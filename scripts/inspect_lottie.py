import json
import os

files = ['floating_beyond', 'cute_astronaut_telescope', 'space_boy_developer', 'error_edit']

for name in files:
    path = f'public/lottie/{name}.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f'******************** {name} ********************')
    print('w:', data.get('w'), 'h:', data.get('h'), 'fr:', data.get('fr'), 'ip:', data.get('ip'), 'op:', data.get('op'))
    assets = data.get('assets', [])
    for idx, a in enumerate(assets):
        print(f'Asset {idx}: id={a.get("id")}, nm={a.get("nm")}, p={a.get("p")}, u={a.get("u")}, layers_count={len(a.get("layers", []))}')
        if a.get('layers'):
            for sub_idx, sl in enumerate(a['layers']):
                print(f'   SubLayer {sub_idx}: nm="{sl.get("nm")}", ty={sl.get("ty")}, shapes={len(sl.get("shapes", []))}')
    layers = data.get('layers', [])
    for idx, l in enumerate(layers):
        print(f'Layer {idx}: nm="{l.get("nm")}", ty={l.get("ty")}, refId={l.get("refId")}, shapes={len(l.get("shapes", []))}')
