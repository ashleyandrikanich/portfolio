# Exports public/Ashley-Andrikanich-Resume.docx to PDF via Microsoft Word.
# Requires Word installed. Run: npm run export-resume-pdf

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$docx = Join-Path $root "public\Ashley-Andrikanich-Resume.docx"
$pdf = Join-Path $root "public\Ashley-Andrikanich-Resume.pdf"

if (-not (Test-Path $docx)) {
  Write-Error "Missing $docx"
}

$word = $null
$doc = $null
try {
  $word = New-Object -ComObject Word.Application
  $word.Visible = $false
  $doc = $word.Documents.Open($docx)
  # 17 = wdExportFormatPDF
  $doc.ExportAsFixedFormat($pdf, 17)
  Write-Host "Saved $pdf"
}
finally {
  if ($doc) { $doc.Close($false) | Out-Null }
  if ($word) { $word.Quit() | Out-Null; [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
}
