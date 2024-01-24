Param(
    [string]$libraryId = "",
    [string]$apiKey = "",
    [string]$endpoint = "https://components.sitecorecloud.io/api",
    [string]$rootFolder = ".\src\components"
)

Import-Module .\ps-modules\SitecoreComponents

Save-Components -libraryId $libraryId -apiKey $apiKey -endpoint $endpoint -rootFolder $rootFolder