import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def print_tree(item, indent=0):
    ind = "  " * indent
    if isinstance(item, dict):
        nm = item.get('nm', '')
        ty = item.get('ty', '')
        extra = ""
        if ty in ['fl', 'st'] and 'c' in item and 'k' in item['c']:
            k = item['c']['k']
            if isinstance(k, list) and len(k) >= 3 and isinstance(k[0], (int, float)):
                r = int(k[0] * 255)
                g = int(k[1] * 255)
                b = int(k[2] * 255)
                extra = f" [color: #{r:02x}{g:02x}{b:02x}]"
        print(f"{ind}- {nm} (ty={ty}){extra}")
        for k in ['shapes', 'it', 'layers']:
            if k in item:
                print_tree(item[k], indent + 1)
    elif isinstance(item, list):
        for elem in item:
            print_tree(elem, indent)

print("=== Assets ===")
for a in data.get('assets', []):
    print(f"Asset id={a.get('id')} nm={a.get('nm')}")
    print_tree(a.get('layers', []), 1)

print("=== Layers ===")
print_tree(data.get('layers', []), 0)
