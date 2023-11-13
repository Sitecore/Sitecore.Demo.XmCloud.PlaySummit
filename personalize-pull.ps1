Param(
    [string]$scope = "",
    [string]$token = "",
    [string]$rootFolder = ".\src\personalize"
)

Import-Module .\ps-modules\SitecorePersonalize

Save-PersonalizeFlows -token $token -scope "" -rootFolder ".\src\personalize"