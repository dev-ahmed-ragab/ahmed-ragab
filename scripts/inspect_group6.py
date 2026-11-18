import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    if l.get('nm') == 'Layer 4':
        sh = l['shapes'][5]
        print(f"Shape: {sh.get('nm')}")
        for idx, item in enumerate(sh.get('it', [])):
            print(f"  Item {idx}: {item.get('nm')}")
            for sub in item.get('it', []):
                print(f"    Sub: {sub.get('nm')} ty={sub.get('ty')}")
                if sub.get('ty') == 'fl':
                    print(f"      Color: {sub.get('c',{}).get('k')}")
