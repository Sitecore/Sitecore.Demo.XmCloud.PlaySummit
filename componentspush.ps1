Param(
    [string]$libraryId = "",
    [string]$apiKey = "",
    [string]$endpoint = "https://components.sitecorecloud.io/api",
    [string]$rootFolder = ".\src\components"
)

$headers = @{
    "x-api-key" = $apiKey
}

function Invoke-PostVersion ($libraryId, $collectionId, $componentId, $version) {
    Write-Host "    Version: " $version.Name "(" $version.status ")"

    $versionsUrl = "$endpoint/libraries/$libraryId/collections/$collectionId/components/$componentId/versions"
    Invoke-WebRequest -Uri $versionsUrl -Method Post -Body ($version | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
}

# Components
$collections = Get-Content "$rootFolder\collections.json" | ConvertFrom-Json
foreach ($collection in $collections) {
    Write-Host "Collection: " $collection.
    Invoke-WebRequest -Uri "$endpoint/libraries/$libraryId/collections" -Method Post -Body ($collection | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

    foreach ($component in $collection.components) {
        Write-Host "  Component: " $component.Name

        $componentUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components"
        Invoke-WebRequest -Uri $componentUrl -Method Post -Body ($component | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

        $versions = Get-Content "$rootFolder\components\$($component.id).json" | ConvertFrom-Json

        # We must create the versions in a specific order for the components to be published and available in Pages: saved, staged, published, draft
        $savedVersions = $versions | Where-Object -Property status -EQ 'saved'
        $stagedVersions = $versions | Where-Object -Property status -EQ 'staged'
        $publishedVersions = $versions | Where-Object -Property status -EQ 'published'
        $draftVersions = $versions | Where-Object -Property status -EQ 'draft'

        foreach ($version in $savedVersions) {
            Invoke-PostVersion $libraryId $collection.id $component.id $version
        }

        foreach ($version in $stagedVersions) {
            Invoke-PostVersion $libraryId $collection.id $component.id $version
        }

        foreach ($version in $publishedVersions) {
            Invoke-PostVersion $libraryId $collection.id $component.id $version
        }

        foreach ($version in $draftVersions) {
            Invoke-PostVersion $libraryId $collection.id $component.id $version
        }
    }
}

# Styles
Write-Host "Styles"
$targetStyles = (Invoke-WebRequest -Uri "$endpoint/libraries/$libraryId/stylesheets" -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
$stylesUrl = "$endpoint/libraries/$libraryId/stylesheets"
$styles = Get-Content "$rootFolder\styles.json" | ConvertFrom-Json
$styles.revision = $targetStyles.revision + 1
Invoke-WebRequest -Uri $stylesUrl -Method Put -Body ($styles | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

# Datasources
$datasourcesUrl = "$endpoint/libraries/$libraryId/datasources"
$datasources = Get-Content "$rootFolder\datasources.json" | ConvertFrom-Json

foreach ($datasource in $datasources) {
    Write-Host "Datasource: " $datasource.Name
    Invoke-WebRequest -Uri $datasourcesUrl -Method Post -Body ($datasource | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
}