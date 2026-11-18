import json
import base64
import os
import shutil

# Normalized RGBA colors
COLOR_VIOLET = [0.545, 0.36, 0.96, 1.0]        # #8b5cf6
COLOR_CYAN = [0.024, 0.714, 0.831, 1.0]        # #06b6d4
COLOR_INDIGO = [0.388, 0.4, 0.945, 1.0]        # #6366f1
COLOR_EMERALD = [0.063, 0.725, 0.506, 1.0]     # #10b981
COLOR_TS_BLUE = [0.192, 0.471, 0.776, 1.0]     # #3178c6
COLOR_SOFT_VIOLET = [0.753, 0.518, 0.988, 1.0] # #c084fc
COLOR_SOFT_CYAN = [0.404, 0.91, 0.976, 1.0]    # #67e8f9
COLOR_DEEP_SPACE = [0.012, 0.027, 0.071, 1.0]  # #030712
COLOR_DEEP_PURPLE = [0.118, 0.106, 0.294, 1.0] # #1e1b4b

def color_distance(c1, c2):
    # Euclidean distance between RGB (ignoring alpha if not 4)
    return sum((a - b) ** 2 for a, b in zip(c1[:3], c2[:3])) ** 0.5

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return [int(hex_str[i:i+2], 16) / 255.0 for i in (0, 2, 4)]

print("Starting Lottie customization...")

# -------------------------------------------------------------
# 1. Customize floating_beyond.json
# -------------------------------------------------------------
fb_path = 'public/lottie/floating_beyond.json'
with open(fb_path, 'r', encoding='utf-8') as f:
    fb_data = json.load(f)

# Embed image_0 and image_1 as base64 to ensure 100% self-containment
for asset in fb_data.get('assets', []):
    img_name = asset.get('p')
    if img_name:
        img_full_path = os.path.join('public', 'lottie', 'images', img_name)
        if os.path.exists(img_full_path):
            with open(img_full_path, 'rb') as img_f:
                b64 = base64.b64encode(img_f.read()).decode('utf-8')
                asset['u'] = ''
                asset['p'] = f'data:image/png;base64,{b64}'
                asset['e'] = 1
                print(f"  [floating_beyond] Embedded {img_name} as base64 data URI.")

# Also ensure public/images exists with copies as backup
os.makedirs('public/images', exist_ok=True)
for img in ['image_0.png', 'image_1.png']:
    src = os.path.join('public', 'lottie', 'images', img)
    if os.path.exists(src):
        shutil.copy(src, os.path.join('public', 'images', img))

# Recolor vector accents in floating_beyond
def recolor_floating(node):
    if isinstance(node, dict):
        if node.get('ty') in ['fl', 'st'] and 'c' in node:
            c = node['c'].get('k')
            if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                # If electric blue #3771ff -> Violet
                if color_distance(c, [0.215, 0.443, 1.0]) < 0.2:
                    node['c']['k'] = COLOR_VIOLET[:len(c)]
                # If dark blue #2d4987 or #456ba2 -> Indigo
                elif color_distance(c, [0.176, 0.286, 0.529]) < 0.2 or color_distance(c, [0.271, 0.42, 0.635]) < 0.2:
                    node['c']['k'] = COLOR_INDIGO[:len(c)]
                # If light blue #6199e8 or #8ad4ea -> Cyan
                elif color_distance(c, [0.38, 0.6, 0.91]) < 0.2 or color_distance(c, [0.541, 0.831, 0.918]) < 0.2:
                    node['c']['k'] = COLOR_CYAN[:len(c)]
                # If soft blue #a9c0ff or #adcaf9 -> Soft Violet
                elif color_distance(c, [0.663, 0.753, 1.0]) < 0.2 or color_distance(c, [0.678, 0.792, 0.976]) < 0.2:
                    node['c']['k'] = COLOR_SOFT_VIOLET[:len(c)]
        for v in node.values():
            recolor_floating(v)
    elif isinstance(node, list):
        for item in node:
            recolor_floating(item)

recolor_floating(fb_data.get('layers', []))

with open(fb_path, 'w', encoding='utf-8') as f:
    json.dump(fb_data, f, separators=(',', ':'))
print("  [floating_beyond] Saved customized JSON.")


# -------------------------------------------------------------
# 2. Customize cute_astronaut_telescope.json
# -------------------------------------------------------------
tel_path = 'public/lottie/cute_astronaut_telescope.json'
with open(tel_path, 'r', encoding='utf-8') as f:
    tel_data = json.load(f)

def recolor_telescope(node):
    if isinstance(node, dict):
        if node.get('ty') in ['fl', 'st'] and 'c' in node:
            c = node['c'].get('k')
            if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                # Sparkle stars #b3dbff -> Soft Cyan / Violet
                if color_distance(c, [0.702, 0.859, 1.0]) < 0.15:
                    node['c']['k'] = COLOR_SOFT_CYAN[:len(c)]
                # Blue accent #5988ef -> Cosmic Violet #8b5cf6
                elif color_distance(c, [0.349, 0.533, 0.937]) < 0.2:
                    node['c']['k'] = COLOR_VIOLET[:len(c)]
                # Dark navy outlines #28255b -> Deep Purple #1e1b4b
                elif color_distance(c, [0.157, 0.145, 0.357]) < 0.15:
                    node['c']['k'] = COLOR_DEEP_PURPLE[:len(c)]
        for v in node.values():
            recolor_telescope(v)
    elif isinstance(node, list):
        for item in node:
            recolor_telescope(item)

recolor_telescope(tel_data)

with open(tel_path, 'w', encoding='utf-8') as f:
    json.dump(tel_data, f, separators=(',', ':'))
print("  [cute_astronaut_telescope] Saved customized JSON.")


# -------------------------------------------------------------
# 3. Customize space_boy_developer.json
# -------------------------------------------------------------
boy_path = 'public/lottie/space_boy_developer.json'
with open(boy_path, 'r', encoding='utf-8') as f:
    boy_data = json.load(f)

# A. Star sparkles in comp_0 (Asset 0):
for a in boy_data.get('assets', []):
    if a.get('id') == 'comp_0':
        for l in a.get('layers', []):
            for sh in l.get('shapes', []):
                for it in sh.get('it', []):
                    if it.get('ty') == 'fl':
                        # Make twinkling stars luminous soft cyan & violet
                        it['c']['k'] = COLOR_SOFT_CYAN[:4]

# B. Customize Layers in space_boy_developer
for l in boy_data.get('layers', []):
    lnm = l.get('nm')
    
    # Layer 4: Laptop & Stickers
    if lnm == 'Layer 4':
        shapes = l.get('shapes', [])
        # Shape 0: Main sticker background on laptop -> TypeScript Blue!
        if len(shapes) > 0:
            for it in shapes[0].get('it', []):
                if it.get('ty') == 'gr':
                    for sub in it.get('it', []):
                        if sub.get('ty') == 'fl':
                            sub['c']['k'] = COLOR_TS_BLUE[:len(sub['c']['k'])]
        # Shape 1: Second sticker on laptop -> Cyan
        if len(shapes) > 1:
            for it in shapes[1].get('it', []):
                if it.get('ty') == 'gr':
                    for sub in it.get('it', []):
                        if sub.get('ty') == 'fl':
                            sub['c']['k'] = COLOR_CYAN[:len(sub['c']['k'])]
        # Shape 5 (Group 6): Circular badge on laptop
        if len(shapes) > 5:
            # Group 1 outer circle -> Violet
            for it in shapes[5].get('it', []):
                if it.get('nm') == 'Group 1':
                    for sub in it.get('it', []):
                        if sub.get('ty') == 'gr':
                            for ssub in sub.get('it', []):
                                if ssub.get('ty') == 'fl':
                                    ssub['c']['k'] = COLOR_VIOLET[:len(ssub['c']['k'])]
                elif it.get('nm') == 'Group 6':
                    for sub in it.get('it', []):
                        if sub.get('ty') == 'gr':
                            for ssub in sub.get('it', []):
                                if ssub.get('ty') == 'fl':
                                    ssub['c']['k'] = COLOR_CYAN[:len(ssub['c']['k'])]

    # Layer 6: Astronaut Suit, Helmet & Chest Badges/Patches
    if lnm == 'Layer 6':
        shapes = l.get('shapes', [])
        # Shape 9 (Group 10): Badge 1 -> TypeScript Blue
        if len(shapes) > 9:
            for it in shapes[9].get('it', []):
                if it.get('nm') == 'Group 1':
                    for ssub in it.get('it', []):
                        if ssub.get('ty') == 'fl':
                            ssub['c']['k'] = COLOR_TS_BLUE[:len(ssub['c']['k'])]
        # Shape 12 (Group 13): Badge 2 -> React Cyan
        if len(shapes) > 12:
            for it in shapes[12].get('it', []):
                if it.get('nm') == 'Group 1':
                    for ssub in it.get('it', []):
                        if ssub.get('ty') == 'fl':
                            ssub['c']['k'] = COLOR_CYAN[:len(ssub['c']['k'])]
        # Shape 15 (Group 16): Badge 3 -> Cosmic Emerald
        if len(shapes) > 15:
            for it in shapes[15].get('it', []):
                if it.get('nm') == 'Group 1':
                    for ssub in it.get('it', []):
                        if ssub.get('ty') == 'fl':
                            ssub['c']['k'] = COLOR_EMERALD[:len(ssub['c']['k'])]

# C. Recolor the dark plum #371a45 suit accents to Cosmic Violet #8b5cf6
def recolor_boy_accents(node):
    if isinstance(node, dict):
        if node.get('ty') in ['fl', 'st'] and 'c' in node:
            c = node['c'].get('k')
            if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                # #371a45 plum -> Cosmic Violet
                if color_distance(c, [0.2157, 0.102, 0.2706]) < 0.15:
                    node['c']['k'] = COLOR_VIOLET[:len(c)]
        for v in node.values():
            recolor_boy_accents(v)
    elif isinstance(node, list):
        for item in node:
            recolor_boy_accents(item)

recolor_boy_accents(boy_data.get('layers', []))

with open(boy_path, 'w', encoding='utf-8') as f:
    json.dump(boy_data, f, separators=(',', ':'))
print("  [space_boy_developer] Saved customized JSON.")


# -------------------------------------------------------------
# 4. Customize error_edit.json
# -------------------------------------------------------------
err_path = 'public/lottie/error_edit.json'
with open(err_path, 'r', encoding='utf-8') as f:
    err_data = json.load(f)

for l in err_data.get('layers', []):
    lnm = l.get('nm')
    
    # 404 Numbers: Change orange #ed710c to Violet & Cyan
    if lnm in ['4-2', '4-1']:
        for sh in l.get('shapes', []):
            for it in sh.get('it', []):
                if it.get('ty') == 'fl':
                    it['c']['k'] = COLOR_VIOLET[:len(it['c']['k'])]
    elif lnm == '0':
        for sh in l.get('shapes', []):
            for it in sh.get('it', []):
                if it.get('ty') == 'fl':
                    it['c']['k'] = COLOR_CYAN[:len(it['c']['k'])]
                    
    # Planets & Gradients
    for sh in l.get('shapes', []):
        for it in sh.get('it', []):
            # Recolor solid fill
            if it.get('ty') == 'fl' and 'c' in it:
                c = it['c'].get('k')
                if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                    # Orange #ed710c
                    if color_distance(c, [0.929, 0.443, 0.047]) < 0.2:
                        it['c']['k'] = COLOR_VIOLET[:len(c)]
                    # Sky blue #0c92f2 -> Cyan #06b6d4
                    elif color_distance(c, [0.047, 0.573, 0.949]) < 0.2:
                        it['c']['k'] = COLOR_CYAN[:len(c)]
                    # Dark bg #20262b -> Deep space #030712
                    elif color_distance(c, [0.125, 0.149, 0.169]) < 0.1:
                        it['c']['k'] = COLOR_DEEP_SPACE[:len(c)]
            # Recolor gradient stops
            if it.get('ty') == 'gf' and 'g' in it and 'k' in it['g']:
                gk = it['g']['k']
                stops = gk.get('k')
                if isinstance(stops, list):
                    # Stops are formatted as: [pos0, r0, g0, b0, pos1, r1, g1, b1, ...]
                    p_count = it['g'].get('p', 0)
                    for i in range(p_count):
                        base = i * 4
                        if base + 3 < len(stops):
                            r, g, b = stops[base+1], stops[base+2], stops[base+3]
                            # If orange-ish stop, shift to cosmic violet
                            if r > 0.6 and g < 0.6 and b < 0.4:
                                stops[base+1] = COLOR_VIOLET[0]
                                stops[base+2] = COLOR_VIOLET[1]
                                stops[base+3] = COLOR_VIOLET[2]
                            # If blue stop, shift to cyan
                            elif b > 0.6 and r < 0.2:
                                stops[base+1] = COLOR_CYAN[0]
                                stops[base+2] = COLOR_CYAN[1]
                                stops[base+3] = COLOR_CYAN[2]

with open(err_path, 'w', encoding='utf-8') as f:
    json.dump(err_data, f, separators=(',', ':'))
print("  [error_edit] Saved customized JSON.")
print("All 4 Lottie files successfully customized!")
