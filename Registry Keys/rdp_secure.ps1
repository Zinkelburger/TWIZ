# From Northeastern Scripts
# Removed `reg add "HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v UserAuthentication /t REG_DWORD /d 1 /f | Out-Null`

# reg add "HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" /v SecurityLayer /t REG_DWORD /d 2 /f | Out-Null
# ## Requiring encrypted RPC connections
# reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /v fEncryptRPCTraffic /t REG_DWORD /d 1 /f | Out-Null
# ## Disabling remote assistance
# reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /v fAllowToGetHelp /t REG_DWORD /d 0 /f | Out-Null
# ## Prevent sharing of local drives via Remote Desktop Session Hosts
# reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" /v fDisableCdm /t REG_DWORD /d 1 /f | Out-Null
# Write-Host "[" -ForegroundColor white -NoNewLine; Write-Host "SUCCESS" -ForegroundColor green -NoNewLine; Write-Host "] RDP secured" -ForegroundColor white


$SecurityLayer = Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" -Name SecurityLayer
if ($SecurityLayer.SecurityLayer -eq 2) {
    Write-Host "SecurityLayer is set correctly to 2." -ForegroundColor Green
} else {
    Write-Host "SecurityLayer is not set correctly." -ForegroundColor Red
}

$fEncryptRPCTraffic = Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" -Name fEncryptRPCTraffic
if ($fEncryptRPCTraffic.fEncryptRPCTraffic -eq 1) {
    Write-Host "fEncryptRPCTraffic is set correctly to 1." -ForegroundColor Green
} else {
    Write-Host "fEncryptRPCTraffic is not set correctly." -ForegroundColor Red
}

$fAllowToGetHelp = Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" -Name fAllowToGetHelp
if ($fAllowToGetHelp.fAllowToGetHelp -eq 0) {
    Write-Host "fAllowToGetHelp is set correctly to 0." -ForegroundColor Green
} else {
    Write-Host "fAllowToGetHelp is not set correctly." -ForegroundColor Red
}

$fDisableCdm = Get-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services" -Name fDisableCdm
if ($fDisableCdm.fDisableCdm -eq 1) {
    Write-Host "fDisableCdm is set correctly to 1." -ForegroundColor Green
} else {
    Write-Host "fDisableCdm is not set correctly." -ForegroundColor Red
}
