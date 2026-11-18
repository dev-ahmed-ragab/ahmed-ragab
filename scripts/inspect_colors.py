import json

def extract_colors(item, path=""):
    colors = []
    if isinstance(item, dict):
        # Fill or Stroke color
        if item.get('ty') in ['fl', 'st'] and 'c' in item:
            c = item['c']
            nm = item.get('nm', '')
            if 'k' in c:
                val = c['k']
                if isinstance(val, list) and len(val) >= 3 and isinstance(val[0], (int, float)):
                    colors.append((path + f" > {nm} ({item.get('ty')})", val))
                elif isinstance(val, list):
                    # Keyframed colors
                    for kf in val:
                        if isinstance(kf, dict) and 's' in kf and isinstance(kf['s'], list):
                            colors.append((path + f" > {nm} ({item.get('ty')} keyframe)", kf['s']))
        # Gradient
        if item.get('ty') in ['gf', 'gs'] and 'g' in item:
            colors.append((path + f" > {item.get('nm')} (gradient)", "gradient"))
        for k, v in item.items():
            if k not in ['c', 'g']:
                colors.extend(extract_colors(v, f"{path}.{k}" if path else k))
    elif isinstance(item, list):
        for idx, elem in enumerate(item):
            subpath = f"{path}[{idx}]"
            if isinstance(elem, dict) and 'nm' in elem:
                subpath = f"{path}[{elem['nm']}]"
            colors.extend(extract_colors(elem, subpath))
    return colors

for name in ['floating_beyond', 'cute_astronaut_telescope', 'space_boy_developer', 'error_edit']:
    print(f"\n==================== {name} ====================")
    with open(f'public/lottie/{name}.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    colors = extract_colors(data)
    print(f"Total color points: {len(colors)}")
    # Print distinct colors (converted to hex)
    hex_map = {}
    for p, c in colors:
        if isinstance(c, list) and len(c) >= 3:
            r = int(c[0] * 255)
            g = int(c[1] * 255)
            b = int(c[2] * 255)
            h = f"#{r:02x}{g:02x}{b:02x}"
            if h not in hex_map:
                hex_map[h] = []
            hex_map[h].append(p)
    print("Found unique hex colors:")
    for h, paths in hex_map.items():
        print(f"  {h} (count: {len(paths)}): sample path: {paths[0]}")
