import mammoth

docx_path = r"c:\Users\ashle\projects\portfolio\public\Ashley-Andrikanich-Resume.docx"
html_path = r"c:\Users\ashle\projects\portfolio\public\resume-preview.html"

with open(docx_path, "rb") as docx_file:
    result = mammoth.convert_to_html(docx_file)

page = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ashley Andrikanich — Resume</title>
  <style>
    body {{
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      max-width: 820px;
      margin: 2rem auto;
      padding: 0 1.5rem 3rem;
      line-height: 1.55;
      color: #f5f5f4;
      background: #4a1520;
    }}
    a {{ color: #fecaca; }}
    h1, h2, h3, strong {{ color: #ffffff; }}
    p, li {{ color: #e7e5e4; }}
  </style>
</head>
<body>
{result.value}
</body>
</html>
"""

with open(html_path, "w", encoding="utf-8") as out:
    out.write(page)

print("Wrote", html_path)
