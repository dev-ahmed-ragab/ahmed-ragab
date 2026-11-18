import json

with open('public/lottie/error_edit.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    colors = set()
    def get_c(o):
        if isinstance(o, dict):
            if o.get('ty') in ['fl', 'st'] and 'c' in o:
                c = o['c'].get('k')
                if isinstance(c, list) and len(c) >= 3 and isinstance(c[0], (int, float)):
                    colors.add('#{:02x}{:02x}{:02x}'.format(int(c[0]*255), int(c[1]*255), int(c[2]*255)))
            for v in o.values():
                get_c(v)
        elif isinstance(o, list):
            for it in o:
                get_c(it)
    get_c(l)
    print(f"Layer {l.get('nm')} (ty={l.get('ty')}): colors={colors}")
