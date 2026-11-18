"""
Lottie Asset Processor
Processes raw downloaded Lottie animations into cohesive cosmic-themed vector assets:
1. satellite_1.json -> satellite_clean.json (isolated satellite & solar wings recolored to electric cyan & aerospace silver/navy)
2. planet_user.json -> planet_cosmic.json (cosmic indigo, electric cyan, and violet palette)
3. rocket_user.json -> rocket_cosmic.json (sleek white/titanium chassis, fiery amber and cyan exhaust)
"""
import json
import os

def process_satellite():
    src = 'public/lottie/satellite_1.json'
    dst = 'public/lottie/satellite_clean.json'
    if not os.path.exists(src):
        return
    with open(src, 'r', encoding='utf-8') as f:
        sat = json.load(f)

    # Filter layers: keep ONLY 'Satellite' and 'Wings'
    clean_layers = [l for l in sat.get('layers', []) if l.get('nm') in ('Satellite', 'Wings')]
    sat['layers'] = clean_layers

    CYAN_PRIMARY = [0.024, 0.714, 0.831, 1.0]      # #06b6d4 Electric Cyan
    CYAN_LIGHT   = [0.404, 0.910, 0.976, 1.0]      # #67e8f9 Luminous Cyan highlight
    AERO_NAVY    = [0.059, 0.090, 0.165, 1.0]      # #0f172a Aerospace Deep Navy
    AERO_SILVER  = [0.886, 0.910, 0.941, 1.0]      # #e2e8f0 Aerospace Silver
    AERO_STEEL   = [0.392, 0.455, 0.545, 1.0]      # #64748b Aerospace Steel
    AMBER_GOLD   = [0.984, 0.749, 0.141, 1.0]      # #fbbf24 High-Gain Antenna Gold

    for layer in sat['layers']:
        nm = layer.get('nm')
        if nm == 'Wings':
            for shape in layer.get('shapes', []):
                s_nm = shape.get('nm')
                for it in shape.get('it', []):
                    if it.get('ty') == 'fl':
                        if s_nm in ('Group 9', 'Group 10'):
                            it['c']['k'] = CYAN_PRIMARY
                        elif s_nm in ('Group 5', 'Group 6'):
                            it['c']['k'] = CYAN_LIGHT
                        elif s_nm in ('Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 7', 'Group 8'):
                            it['c']['k'] = AERO_NAVY
        elif nm == 'Satellite':
            for shape in layer.get('shapes', []):
                s_nm = shape.get('nm')
                for it in shape.get('it', []):
                    if it.get('ty') == 'fl':
                        if s_nm in ('Group 2', 'Group 3', 'Group 8'):
                            it['c']['k'] = AERO_SILVER
                        elif s_nm in ('Group 5', 'Group 10'):
                            it['c']['k'] = AERO_STEEL
                        elif s_nm in ('Group 7', 'Group 12'):
                            it['c']['k'] = AMBER_GOLD
                        else:
                            it['c']['k'] = AERO_NAVY

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(sat, f, indent=2)
    print(f"Processed: {dst}")


def process_planet():
    src = 'public/lottie/planet_user.json'
    dst = 'public/lottie/planet_cosmic.json'
    if not os.path.exists(src):
        return
    with open(src, 'r', encoding='utf-8') as f:
        planet = json.load(f)

    # 1. Layer 3 (Planet 2D base and atmospheric glow)
    l3 = planet['layers'][2]
    # Shape 0: Ellipse 1 (Planet sphere)
    l3['shapes'][0]['it'][1]['g']['k'] = [
        0,   0.024, 0.714, 0.831,   # #06b6d4 Electric Cyan
        0.5, 0.450, 0.280, 0.920,   # #7347eb Cosmic Violet
        1.0, 0.060, 0.050, 0.180    # #0f0d2e Deep Space Midnight
    ]

    # Shape 1: Ellipse 2 (Atmospheric glow ring)
    l3['shapes'][1]['it'][1]['g']['k'] = [
        0,   0.024, 0.714, 0.831,   # Cyan
        0.5, 0.545, 0.361, 0.965,   # Violet
        1.0, 0.388, 0.400, 0.945,   # Indigo
        0,   0.85,
        0.5, 0.35,
        1.0, 0.0
    ]

    # 2. Layer 2 (Planet relief MASK)
    l2 = planet['layers'][1]
    mask_k = l2['shapes'][0]['it'][1]['g']['k']
    mask_k['k'][0]['s'] = [
        0,   0.388, 0.400, 0.945,   # Indigo
        0.5, 0.180, 0.120, 0.400,   # Deep Violet
        1.0, 0.0,   0.0,   0.0,
        0,   1.0,
        0.5, 0.5,
        1.0, 0.0
    ]
    mask_k['k'][1]['s'] = [
        0,   0.118, 0.106, 0.294,   # Dark Indigo
        0.5, 0.050, 0.040, 0.150,   # Midnight Violet
        1.0, 0.0,   0.0,   0.0,
        0,   1.0,
        0.5, 0.5,
        1.0, 0.0
    ]
    mask_k['k'][2]['s'] = [
        0,   0.388, 0.400, 0.945,
        0.5, 0.180, 0.120, 0.400,
        1.0, 0.0,   0.0,   0.0,
        0,   1.0,
        0.5, 0.5,
        1.0, 0.0
    ]

    # 3. Layer 1 (Planet relief craters)
    l1 = planet['layers'][0]
    crater_grad = [
        0,   0.080, 0.060, 0.220,   # Crater shadow (midnight violet)
        0.5, 0.388, 0.400, 0.945,   # Crater basin (indigo)
        1.0, 0.404, 0.910, 0.976,   # Crater rim (luminous cyan)
        0,   0.80,
        0.5, 0.40,
        1.0, 0.0
    ]
    for shape in l1.get('shapes', []):
        for it in shape.get('it', []):
            if it.get('ty') == 'gf':
                it['g']['k'] = list(crater_grad)

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(planet, f, indent=2)
    print(f"Processed: {dst}")


def process_rocket():
    src = 'public/lottie/rocket_user.json'
    dst = 'public/lottie/rocket_cosmic.json'
    if not os.path.exists(src):
        return
    with open(src, 'r', encoding='utf-8') as f:
        rock = json.load(f)

    # 1. Fire 2 (Thruster flame)
    fire_layer = rock['layers'][1]
    fire_fill = fire_layer['shapes'][0]['it'][1]
    fire_fill['c']['k'] = [1.0, 0.68, 0.08, 1.0] # Glowing fiery amber

    # 2. comp_0 (Rocket Chassis)
    comp_0 = next(a for a in rock['assets'] if a['id'] == 'comp_0')

    CYAN_STRIPE   = [0.024, 0.714, 0.831, 1.0]   # #06b6d4 Electric Cyan
    SILVER_SHADE  = [0.886, 0.910, 0.941, 1.0]   # #e2e8f0 Titanium Silver Shading
    WHITE_BODY    = [1.0, 1.0, 1.0, 1.0]         # Pure White
    DARK_TITANIUM = [0.118, 0.161, 0.231, 1.0]   # #1e293b Slate/Dark Titanium
    MID_TITANIUM  = [0.200, 0.255, 0.333, 1.0]   # #334155 Mid Titanium
    RIM_SILVER    = [0.796, 0.835, 0.882, 1.0]   # #cbd5e1 Porthole Rim Silver
    RIVET_SILVER  = [0.580, 0.639, 0.722, 1.0]   # #94a3b8 Rivets Silver
    WINDOW_BLUE   = [0.012, 0.412, 0.631, 1.0]   # #0369a1 Cosmic Azure Window
    WINDOW_GLOW   = [0.878, 0.949, 0.996, 1.0]   # #e0f2fe Window Highlight Reflection

    for l in comp_0['layers']:
        ind = l.get('ind')
        if ind == 1:
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = CYAN_STRIPE
        elif ind in (2, 3):
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = RIVET_SILVER
        elif ind == 4:
            for s in l.get('shapes', []):
                s_nm = s.get('nm')
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        if s_nm in ('Group 1', 'Group 2'):
                            it['c']['k'] = RIM_SILVER
                        elif s_nm == 'Group 3':
                            it['c']['k'] = DARK_TITANIUM
                        elif s_nm == 'Group 4':
                            it['c']['k'] = WINDOW_BLUE
                        elif s_nm in ('Group 5', 'Group 6'):
                            it['c']['k'] = DARK_TITANIUM
                        elif s_nm == 'Group 7':
                            it['c']['k'] = WINDOW_GLOW
        elif ind in (5, 6):
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = DARK_TITANIUM if ind == 6 else MID_TITANIUM
        elif ind == 7:
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = SILVER_SHADE
        elif ind == 8:
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = WHITE_BODY
        elif ind in (9, 10):
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = CYAN_STRIPE
        elif ind in (11, 12):
            for s in l.get('shapes', []):
                for it in s.get('it', []):
                    if it.get('ty') == 'fl':
                        it['c']['k'] = DARK_TITANIUM

    # 3. comp_1 (Exhaust Plume Smoke)
    comp_1 = next(a for a in rock['assets'] if a['id'] == 'comp_1')

    AMBER_HOT    = [1.000, 0.700, 0.100, 0.90]  # Hot golden amber
    AMBER_WARM   = [0.961, 0.550, 0.080, 0.85]  # Fiery amber
    CYAN_PLASMA  = [0.024, 0.714, 0.831, 0.85]  # Electric cyan #06b6d4
    CYAN_LIGHT   = [0.220, 0.741, 0.973, 0.80]  # Luminous azure #38bdf8
    CYAN_MIST    = [0.647, 0.953, 0.988, 0.75]  # Cyan mist #a5f3fc

    for idx, l in enumerate(comp_1['layers']):
        p_k = l.get('ks', {}).get('p', {}).get('k', [])
        start_x = 427.0
        if len(p_k) > 0 and isinstance(p_k[0], dict) and 's' in p_k[0]:
            start_x = p_k[0]['s'][0]

        dist = abs(start_x - 427.2)
        if dist < 12.0:
            col = AMBER_HOT if (idx % 2 == 0) else AMBER_WARM
        elif dist < 24.0:
            col = AMBER_WARM if (idx % 3 == 0) else CYAN_PLASMA
        elif dist < 38.0:
            col = CYAN_PLASMA if (idx % 2 == 0) else CYAN_LIGHT
        else:
            col = CYAN_LIGHT if (idx % 2 == 0) else CYAN_MIST

        for s in l.get('shapes', []):
            for it in s.get('it', []):
                if it.get('ty') == 'fl':
                    it['c']['k'] = list(col)

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(rock, f, indent=2)
    print(f"Processed: {dst}")


if __name__ == '__main__':
    process_satellite()
    process_planet()
    process_rocket()
