Param(
  [string]$libraryId = "",
  [string]$apiKey = "",
  [string]$endpoint = "https://components-api.sitecorecloud.io",
  [string]$rootFolder = ".\serialization"
)

$headers = @{
    "x-api-key"=$apiKey
}

# Components
$collections = Get-Content "$rootFolder\collections.json" | ConvertFrom-Json
foreach ($collection in $collections)
{
    Write-Host "Collection: " $collection.Name

   foreach ($component in $collection.components)
   {
      Write-Host "  Component: " $component.Name

      $componentUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components"
      Invoke-WebRequest -Uri $componentUrl -Method Post -Body ($component | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

      $versions = Get-Content "$rootFolder\components\$($component.id).json" | ConvertFrom-Json

      foreach($version in $versions){
        Write-Host "    Version: " $version.Name "(" $version.status ")"

        $versionsUrl = "$endpoint/libraries/$libraryId/collections/$($collection.id)/components/$($component.id)/versions"
        Invoke-WebRequest -Uri $versionsUrl -Method Post -Body ($version | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
      }
   }
}

# Styles
$targetStyles = (Invoke-WebRequest -Uri "$endpoint/libraries/$libraryId/stylesheets" -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
$stylesUrl = "$endpoint/libraries/$libraryId/stylesheets"
$styles = Get-Content "$rootFolder\styles.json" | ConvertFrom-Json
$styles.revision = $targetStyles.revision + 1
Invoke-WebRequest -Uri $stylesUrl -Method Put -Body ($styles | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

# Datasources
$datasourcesUrl = "$endpoint/libraries/$libraryId/datasources"
$datasources = Get-Content "$rootFolder\datasources.json" | ConvertFrom-Json

foreach ($datasource in $datasources)
{
  Write-Host "Datasource: " $datasource.Name
  Invoke-WebRequest -Uri $datasourcesUrl -Method Post -Body ($datasource | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
}