import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for a in data.get('assets', []):
    print(f"Asset id={a.get('id')} nm={a.get('nm')}")
    for l in a.get('layers', []):
        ks = l.get('ks', {})
        p = ks.get('p', {}).get('k')
        s = ks.get('s', {}).get('k')
        shapes = l.get('shapes', [])
        print(f"  Layer {l.get('nm')} p={p} s={s}")
        for sh in shapes:
            # check vertices
            print(f"    Shape {sh.get('nm')}")
