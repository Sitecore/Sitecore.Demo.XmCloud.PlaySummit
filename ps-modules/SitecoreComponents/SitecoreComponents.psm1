function Clear-LibraryId ($jsonObject) {
    $jsonObject | ForEach-Object {
        # Helper script block that walks the object graph.
        $sb = {
            if ($args[1] -gt 10) {
                return # limit recursion
            }
            foreach ($el in @($args[0])) {
                # iterate over elements (if an array)
                foreach ($prop in $el.psobject.Properties) {
                    # iterate over properties
                    if ($prop.Name -eq 'libraryId') {
                        $prop.Value = 'generated'
                    }

                    if ($prop.Name -eq 'externalSourceId') {
                        $prop.Value = 'generated'
                    }

                    & $sb $prop.Value ($args[1] + 1) # recurse
                }
            }
        }
        # Call the script block with the input object.
        & $sb $_ 0
    }
}

function Save-Components {
    Param(
        [string]$libraryId = "",
        [string]$apiKey = "",
        [string]$endpoint = "https://components.sitecorecloud.io/api",
        [string]$rootFolder = ".\serialization"
    )

    $headers = @{
        "x-api-key" = $apiKey
    }

    # Components
    $collectionsUrl = "$endpoint/libraries/$libraryId/collections"
    $collections = (Invoke-WebRequest -Uri $collectionsUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
    Clear-LibraryId $collections
    $collections | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\collections.json" -Force )

    foreach ($collection in $collections) {
        Write-Host "Collection: " $collection.Name

        foreach ($component in $collection.components) {
            Write-Host "  Component: " $component.Name

            $versionsUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components/$($component.id)/versions"
            $versions = (Invoke-WebRequest -Uri $versionsUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
            Clear-LibraryId $versions
            $versions | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\components\$($component.id).json" -Force )

            foreach ($version in $versions) {
                Write-Host "    Version: " $version.Name "(" $version.status ")"
            }
        }
    }

    # Styles
    $stylesUrl = "$endpoint/libraries/$libraryId/stylesheets"
    $styles = (Invoke-WebRequest -Uri $stylesUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
    Clear-LibraryId $styles
    $styles | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\styles.json" -Force )

    # Datasources
    $datasourcesUrl = "$endpoint/libraries/$libraryId/datasources"
    $datasources = (Invoke-WebRequest -Uri $datasourcesUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
    Clear-LibraryId $datasources
    $datasources | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\datasources.json" -Force )
}

function Restore-Components {
    Param(
        [string]$libraryId = "",
        [string]$apiKey = "",
        [string]$endpoint = "https://components.sitecorecloud.io/api",
        [string]$rootFolder = ".\serialization",
        [string]$chOneKey = ""
    )

    if ( -not (Test-Path $rootFolder)) {
        Write-Host "Nothing to restore, serialization folder does not exist"
        return
    }

    $headers = @{
        "x-api-key" = $apiKey
    }

    # Styles
    Write-Host "Restoring Styles"
    $stylesUrl = "$endpoint/libraries/$libraryId/stylesheets"
    $styles = Get-Content "$rootFolder\styles.json" | ConvertFrom-Json
    try {
        if ($styles.Length -eq 3) {
            $styles | ForEach-Object {
                $result = Invoke-WebRequest -Uri $stylesUrl -Method Put -Body ($_ | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
            }
        }
        else {
            $result = Invoke-WebRequest -Uri $stylesUrl -Method Put -Body ($styles | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
        }
    }
    catch {
        Write-Host "(Failed to restore) Styles"
        $_.Exception.Response.StatusCode.Value__
    }

    # Datasources
    Write-Host "Restoring Datasources"
    $datasourcesUrl = "$endpoint/libraries/$libraryId/datasources"
    $datasources = Get-Content "$rootFolder\datasources.json" | ConvertFrom-Json

    foreach ($datasource in $datasources) {
        Write-Host "Datasource: " $datasource.Name

        try { $result = Invoke-WebRequest -Uri $datasourcesUrl -Method Post -Body ($datasource | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json" } catch {
            Write-Host "(Failed to restore) Datasources"
            $_.Exception.Response.StatusCode.Value__
        }
    }

    # CH ONE
    Write-Host "Restoring CH ONE API Key"
    $settings = @{
        "id"       = $libraryId
        "settings" = @{
            "contentHubOneDeliveryKey" = $chOneKey
        }
    }

    try {
        $result = Invoke-WebRequest -Uri "$endpoint/libraries/$libraryId" -Method Put -Body ($settings | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
    }
    catch {
        Write-Host "(Failed to restore) CH ONE API Key"
        $_.Exception.Response.StatusCode.Value__
    }

    # Components
    $collections = Get-Content "$rootFolder\collections.json" | ConvertFrom-Json
    foreach ($collection in $collections) {
        Write-Host "Collection: " $collection.Name
        $result = Invoke-WebRequest -Uri "$endpoint/libraries/$libraryId/collections" -Method Post -Body ($collection | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

        foreach ($component in $collection.components) {
            Write-Host "  Component: " $component.Name

            try {

                $componentUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components"
                $result = Invoke-WebRequest -Uri $componentUrl -Method Post -Body ($component | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

                $sortOrder = "draft", "saved", "staged", "published"
                $versions = Get-Content "$rootFolder\components\$($component.id).json" | ConvertFrom-Json | Sort-Object { $sortOrder.IndexOf($_.status) }

                foreach ($version in $versions) {
                    Write-Host "    Version: " $version.Name "(" $version.status "," $version.revision ")"

                    $versionsUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components/$($component.id)/versions"
                    $result = Invoke-WebRequest -Uri $versionsUrl -Method Post -Body ($version | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
                }

                Write-Host "  (Restored) Component: " $component.Name

            }
            catch {
                Write-Host "  (Failed to restore) Component: " $component.Name " Version: " $version.Name "(" $version.status "," $version.revision ")"

                $_.Exception.Response.StatusCode.Value__
            }
        }
    }


    Write-Host "Restore-Components Complete"
}