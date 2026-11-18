import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def get_bbox(shape_obj):
    xs, ys = [], []
    def recurse(o):
        if isinstance(o, dict):
            if o.get('ty') == 'sh' and 'ks' in o:
                k = o['ks'].get('k')
                if isinstance(k, dict) and 'v' in k:
                    for pt in k['v']:
                        if isinstance(pt, list) and len(pt) >= 2:
                            xs.append(pt[0])
                            ys.append(pt[1])
            for v in o.values():
                recurse(v)
        elif isinstance(o, list):
            for it in o:
                recurse(it)
    recurse(shape_obj)
    if xs and ys:
        return min(xs), min(ys), max(xs), max(ys)
    return None

for l in data['layers']:
    print(f"\nLayer {l.get('nm')}:")
    for s_idx, sh in enumerate(l.get('shapes', [])):
        bbox = get_bbox(sh)
        # get color
        fl_colors = []
        def find_c(o):
            if isinstance(o, dict):
                if o.get('ty') in ['fl', 'st'] and 'c' in o:
                    c = o['c'].get('k')
                    if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                        fl_colors.append('#{:02x}{:02x}{:02x}'.format(int(c[0]*255), int(c[1]*255), int(c[2]*255)))
                for v in o.values():
                    find_c(v)
            elif isinstance(o, list):
                for it in o:
                    find_c(it)
        find_c(sh)
        print(f"  Shape {s_idx} ({sh.get('nm')}): bbox={bbox}, colors={fl_colors}")
