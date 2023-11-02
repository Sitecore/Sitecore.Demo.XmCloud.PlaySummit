Param(
    [string]$scope = "",
    [string]$token = "",
    [string]$rootFolder = ".\src\personalize"
)

Import-Module .\ps-modules\SitecorePersonalize

Restore-PersonalizeFlows -token $token -scope "" -rootFolder ".\src\personalize"