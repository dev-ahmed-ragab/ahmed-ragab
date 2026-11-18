import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    if l.get('nm') in ['Layer 4', 'Layer 6']:
        print(f"=== {l.get('nm')} ===")
        for s_idx, sh in enumerate(l.get('shapes', [])):
            print(f"  Shape {s_idx}: {sh.get('nm')}")
            if 'it' in sh:
                for it_idx, it_elem in enumerate(sh['it']):
                    print(f"    Item {it_idx}: nm={it_elem.get('nm')} ty={it_elem.get('ty')}")
                    if it_elem.get('ty') in ['fl', 'st']:
                        print(f"      Color: {it_elem.get('c', {}).get('k')}")
                    if it_elem.get('ty') == 'gr':
                        for sub_it in it_elem.get('it', []):
                            print(f"      SubItem: nm={sub_it.get('nm')} ty={sub_it.get('ty')}")
                            if sub_it.get('ty') in ['fl', 'st']:
                                print(f"        Color: {sub_it.get('c', {}).get('k')}")
