function Save-PersonalizeFlows {
    Param(
        [string]$apiUrl = 'https://api-engage-us.sitecorecloud.io',
        [string]$token,
        [string]$rootFolder = ".\serialization",
        [string]$scope
    )

    $headers = @{
        "Authorization" = "Bearer $token"
    }

    $flows = @()
    $offset = 0
    $pageSize = 100

    $flowsUrl = "$apiUrl/v3/flowDefinitions?type=EMBEDDED&search=$scope"
    $response = (Invoke-WebRequest -Uri ($flowsUrl + "&offset=$offset&limit=$pageSize") -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json

    while ($response.items.Length -gt 0) {
        $flows += $response.items
        $offset += $pageSize;

        $response = (Invoke-WebRequest -Uri ($flowsUrl + "&offset=$offset&limit=$pageSize") -Method Get -Headers $headers -UseBasicParsing -ContentType "application/json").Content | ConvertFrom-Json
    }

    foreach ($flow in $flows) {
        if(-not [string]::IsNullOrEmpty($scope)) {
            $flow.friendlyId = $flow.friendlyId.replace($scope, "{scope}")
            $flow.name = $flow.friendlyId.replace($scope, "{scope}")
        }

        $flow | ConvertTo-Json -depth 100 | Out-File ( New-Item -Path "$rootFolder\$($flow.friendlyId).json" -Force )
    }
}

function Restore-PersonalizeFlows {
    Param(
        [string]$apiUrl = 'https://api-engage-us.sitecorecloud.io',
        [string]$token,
        [string]$rootFolder = ".\serialization",
        [string]$scope
    )

    if ( -not (Test-Path $rootFolder)) {
        Write-Host "Nothing to restore, 'personalize' serialization folder does not exist"
        return
    }

    $headers = @{
        "Authorization" = "Bearer $token"
    }

    $files = Get-ChildItem $rootFolder

    foreach ($f in $files) {
        Write-Host "Processing: $($f.FullName)"
        $content = Get-Content $f.FullName
        $flow = $content | ConvertFrom-Json

        if([string]::IsNullOrEmpty($scope)) {
            $flow.friendlyId = $flow.friendlyId.replace("{scope}_", "")
            $flow.name = $flow.friendlyId.replace("{scope}_", "")
        }
        else {
            $flow.friendlyId = $flow.friendlyId.replace("{scope}", $scope)
            $flow.name = $flow.friendlyId.replace("{scope}", $scope)
        }

        $flow.ref = [guid]::NewGuid().toString().ToLower()

        Write-Host "Flow status: $($flow.status)"
        $flowOriginalStatus = $flow.status

        try {
            $flow.status = "DRAFT"
            Invoke-WebRequest -Uri "$apiUrl/v3/flowDefinitions/$($flow.ref)" -Method Put -Body ($flow | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"

            if ($flowOriginalStatus -ne "DRAFT") {
                $flow.status = $flowOriginalStatus
                Invoke-WebRequest -Uri "$apiUrl/v3/flowDefinitions/$($flow.ref)" -Method Put -Body ($flow | ConvertTo-Json -depth 100) -Headers $headers -ContentType "application/json"
            }
        }
        catch {
            Write-Host "Failed to process file: $($f.FullName)"
            $_.Exception
        }
    }
}