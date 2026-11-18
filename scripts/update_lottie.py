import base64
import json
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

def main():
    # 1. Read base64 of updated image_0.png
    with open('public/lottie/images/image_0.png', 'rb') as f:
        b64_data = 'data:image/png;base64,' + base64.b64encode(f.read()).decode('utf-8')

    # 2. Load floating_beyond.json
    with open('public/lottie/floating_beyond.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Update asset 0
    for a in data.get('assets', []):
        if a.get('id') == 'image_0':
            a['p'] = b64_data
            print('Updated asset image_0 with base64 length:', len(b64_data))

    # Remove Layer 0 (the abrupt donut chart 'Layer 6 Outlines')
    orig_layers_count = len(data['layers'])
    data['layers'] = [l for l in data['layers'] if l.get('nm') != 'Layer 6 Outlines']
    print(f'Layers: {orig_layers_count} -> {len(data["layers"])}')

    # Find Layer 5
    l5 = [l for l in data['layers'] if l.get('nm') == 'Layer 5'][0]

    # --- UPDATE HTML PILL TO 'TS' ---
    g4_pill = l5['shapes'][1]
    letters_grp = g4_pill['it'][0] # Group 4 (the letters)
    t_orig = letters_grp['it'][2]  # Group 3 ('T')

    # CSS 'S'
    g3_card = l5['shapes'][2]
    css_letters = g3_card['it'][0]
    s_orig = css_letters['it'][1]  # Group 4 ('S')

    # Scaled and translated S
    scale_s = 9.211 / 13.549
    v_s_raw = s_orig['it'][0]['it'][0]['ks']['k']['v']
    i_s_raw = s_orig['it'][0]['it'][0]['ks']['k']['i']
    o_s_raw = s_orig['it'][0]['it'][0]['ks']['k']['o']

    v_s_new = []
    i_s_new = []
    o_s_new = []
    for pt, ipt, opt in zip(v_s_raw, i_s_raw, o_s_raw):
        v_s_new.append([
            round((pt[0] - 74.236) * scale_s + (-74.95), 3),
            round((pt[1] - (-65.603)) * scale_s + (-9.394), 3)
        ])
        i_s_new.append([round(ipt[0] * scale_s, 3), round(ipt[1] * scale_s, 3)])
        o_s_new.append([round(opt[0] * scale_s, 3), round(opt[1] * scale_s, 3)])

    s_new_shape = {
        'ind': 1,
        'ty': 'sh',
        'ix': 1,
        'ks': {
            'a': 0,
            'k': {
                'i': i_s_new,
                'o': o_s_new,
                'v': v_s_new,
                'c': True
            },
            'ix': 2
        },
        'nm': 'Path S',
        'mn': 'ADBE Vector Shape - Group',
        'hd': False
    }

    s_group = {
        'ty': 'gr',
        'it': [
            s_new_shape,
            {
                'ty': 'fl',
                'c': {'a': 0, 'k': [1, 1, 1, 1], 'ix': 4},
                'o': {'a': 0, 'k': 100, 'ix': 5},
                'r': 1,
                'bm': 0,
                'nm': 'Fill 1',
                'mn': 'ADBE Vector Graphic - Fill',
                'hd': False
            },
            {
                'ty': 'tr',
                'p': {'a': 0, 'k': [0, 0], 'ix': 2},
                'a': {'a': 0, 'k': [0, 0], 'ix': 1},
                's': {'a': 0, 'k': [100, 100], 'ix': 3},
                'r': {'a': 0, 'k': 0, 'ix': 6},
                'o': {'a': 0, 'k': 100, 'ix': 7},
                'sk': {'a': 0, 'k': 0, 'ix': 4},
                'sa': {'a': 0, 'k': 0, 'ix': 5},
                'nm': 'Transform'
            }
        ],
        'nm': 'Group S',
        'np': 2,
        'cix': 2,
        'bm': 0,
        'ix': 2,
        'mn': 'ADBE Vector Group',
        'hd': False
    }

    # Keep original 'T' group and add 'S' group
    letters_grp['it'] = [t_orig, s_group, {
        'ty': 'tr',
        'p': {'a': 0, 'k': [0, 0], 'ix': 2},
        'a': {'a': 0, 'k': [0, 0], 'ix': 1},
        's': {'a': 0, 'k': [100, 100], 'ix': 3},
        'r': {'a': 0, 'k': 0, 'ix': 6},
        'o': {'a': 0, 'k': 100, 'ix': 7},
        'sk': {'a': 0, 'k': 0, 'ix': 4},
        'sa': {'a': 0, 'k': 0, 'ix': 5},
        'nm': 'Transform'
    }]
    print('Updated HTML pill to TS!')

    # --- UPDATE CSS CARD TO 'React' ---
    font = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 240)
    img = Image.new('L', (1200, 300), color=0)
    draw = ImageDraw.Draw(img)
    bbox = draw.textbbox((50, 50), 'React', font=font)
    draw.text((50, 50), 'React', font=font, fill=255)

    orig_x0, orig_y0 = bbox[0], bbox[1]
    orig_w, orig_h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    target_h = 13.0
    scale = target_h / orig_h
    target_w = orig_w * scale
    start_x = 74.0 - target_w / 2
    start_y = -65.6 - target_h / 2

    arr = np.array(img)
    contours, hier = cv2.findContours(arr, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_L1)

    react_paths = []
    for i, c in enumerate(contours):
        eps = 0.003 * cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, eps, True)
        pts = approx.reshape(-1, 2)
        v = [[round(start_x + (px - orig_x0) * scale, 3), round(start_y + (py - orig_y0) * scale, 3)] for px, py in pts]
        zeros = [[0.0, 0.0] for _ in v]
        react_paths.append({
            'ind': i,
            'ty': 'sh',
            'ix': i + 1,
            'ks': {
                'a': 0,
                'k': {
                    'i': zeros,
                    'o': zeros,
                    'v': v,
                    'c': True
                },
                'ix': 2
            },
            'nm': f'Path {i+1}',
            'mn': 'ADBE Vector Shape - Group',
            'hd': False
        })

    # Add Fill and Transform to React group
    react_items = react_paths + [
        {
            'ty': 'fl',
            'c': {'a': 0, 'k': [0.024, 0.714, 0.831, 1.0], 'ix': 4}, # Nebula Cyan #06b6d4
            'o': {'a': 0, 'k': 100, 'ix': 5},
            'r': 2, # EvenOdd fill rule
            'bm': 0,
            'nm': 'Fill 1',
            'mn': 'ADBE Vector Graphic - Fill',
            'hd': False
        },
        {
            'ty': 'tr',
            'p': {'a': 0, 'k': [74.0, -65.6], 'ix': 2},
            'a': {'a': 0, 'k': [74.0, -65.6], 'ix': 1},
            's': {
                'a': 1,
                'k': [
                    {'i': {'x': [0.667, 0.667], 'y': [1, 1]}, 'o': {'x': [0.333, 0.333], 'y': [0, 0]}, 't': 44.0, 's': [100, 100]},
                    {'i': {'x': [0.667, 0.667], 'y': [1, 1]}, 'o': {'x': [0.333, 0.333], 'y': [0, 0]}, 't': 54.0, 's': [114, 114]},
                    {'t': 64.0, 's': [100, 100]}
                ],
                'ix': 3
            },
            'r': {'a': 0, 'k': 0, 'ix': 6},
            'o': {'a': 0, 'k': 100, 'ix': 7},
            'sk': {'a': 0, 'k': 0, 'ix': 4},
            'sa': {'a': 0, 'k': 0, 'ix': 5},
            'nm': 'Transform'
        }
    ]

    css_letters['it'] = [
        {
            'ty': 'gr',
            'it': react_items,
            'nm': 'React Word',
            'np': len(react_items) - 1,
            'cix': 2,
            'bm': 0,
            'ix': 1,
            'mn': 'ADBE Vector Group',
            'hd': False
        },
        {
            'ty': 'tr',
            'p': {'a': 0, 'k': [0, 0], 'ix': 2},
            'a': {'a': 0, 'k': [0, 0], 'ix': 1},
            's': {'a': 0, 'k': [100, 100], 'ix': 3},
            'r': {'a': 0, 'k': 0, 'ix': 6},
            'o': {'a': 0, 'k': 100, 'ix': 7},
            'sk': {'a': 0, 'k': 0, 'ix': 4},
            'sa': {'a': 0, 'k': 0, 'ix': 5},
            'nm': 'Transform'
        }
    ]
    print('Updated CSS card to React!')

    # Save updated JSON
    with open('public/lottie/floating_beyond.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, separators=(',', ':'))

    print('Saved public/lottie/floating_beyond.json successfully!')

if __name__ == '__main__':
    main()
