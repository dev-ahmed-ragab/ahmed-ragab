import json

with open('public/lottie/error_edit.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    for sh in l.get('shapes', []):
        for it in sh.get('it', []):
            if it.get('ty') == 'gf':
                print(f"Layer {l.get('nm')} > {it.get('nm')}: g={it.get('g')}")
