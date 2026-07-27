$files = Get-ChildItem -Recurse -Filter *.tsx | Select-Object -ExpandProperty FullName
foreach ($f in $files) {
  $content = Get-Content $f -Raw
  if ($content -match '@gaon-sathi/ui') {
    $content = $content -replace '@gaon-sathi/ui', '@/lib/ui'
    Set-Content -Path $f -Value $content -NoNewline
  }
}
