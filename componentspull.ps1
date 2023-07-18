Param(
    [string]$libraryId = "",
    [string]$apiKey = "",
    [string]$endpoint = "https://components.sitecorecloud.io/api",
    [string]$rootFolder = ".\src\components"
)

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
                        # Process the "items" property value here (may be an array)
                        $prop.Value = 'generated'
                    }

                    if ($prop.Name -eq 'externalSourceId') {
                        # Process the "items" property value here (may be an array)
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
Write-Host "Styles"
$stylesUrl = "$endpoint/libraries/$libraryId/stylesheets"
$styles = (Invoke-WebRequest -Uri $stylesUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
Clear-LibraryId $styles
$styles | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\styles.json" -Force )

# Datasources
Write-Host "Datasources"
$datasourcesUrl = "$endpoint/libraries/$libraryId/datasources"
$datasources = (Invoke-WebRequest -Uri $datasourcesUrl -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
Clear-LibraryId $datasources
$datasources | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\datasources.json" -Force )
