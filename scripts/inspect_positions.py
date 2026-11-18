import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    print(f"Layer {l.get('ind')}: {l.get('nm')} (ty={l.get('ty')})")
    ks = l.get('ks', {})
    p = ks.get('p', {}).get('k')
    s = ks.get('s', {}).get('k')
    print(f"   p={p}, s={s}")
    shapes = l.get('shapes', [])
    for s_idx, sh in enumerate(shapes):
        print(f"   shape {s_idx}: {sh.get('nm')}")
        # if group, check its items
        if 'it' in sh:
            for it_elem in sh['it']:
                if it_elem.get('ty') == 'tr':
                    p_it = it_elem.get('p', {}).get('k')
                    print(f"      tr p={p_it}")
                elif it_elem.get('ty') in ['fl', 'st']:
                    print(f"      {it_elem.get('ty')} nm={it_elem.get('nm')} c={it_elem.get('c',{}).get('k')}")
