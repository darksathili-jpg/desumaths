#!/usr/bin/env python3
"""Audit statique indicatif ; les chemins JS dynamiques sont hors périmètre."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
import json
root=Path(__file__).resolve().parents[1]/'dist'/'web'
class Links(HTMLParser):
    def __init__(self): super().__init__();self.refs=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        for k in ('src','href'):
            if d.get(k): self.refs.append((tag,k,d[k]))
if not root.exists(): raise SystemExit('BLOQUÉ : lancer npm run build:web avant audit.')
count=0; missing=[]
for page in root.rglob('*.html'):
    doc=Links();doc.feed(page.read_text(encoding='utf-8',errors='replace'))
    for tag,key,url in doc.refs:
        p=urlsplit(url)
        if p.scheme or p.netloc or not p.path or url.startswith(('mailto:','data:','#','javascript:')): continue
        if p.path.startswith('/'): target=root/unquote(p.path.lstrip('/'))
        else: target=page.parent/unquote(p.path)
        count+=1
        if not target.exists(): missing.append({'source':str(page.relative_to(root)),'ref':url})
report={'checked_static_paths':count,'unresolved':len(missing),'examples':missing[:35], 'note':'Audit indicatif : scripts JS, URL dynamiques et ressources réseau non inclus.'}
print(json.dumps(report,ensure_ascii=False,indent=2))
(root.parents[1]/'docs'/'G2_R9_WEB_LINKS.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
