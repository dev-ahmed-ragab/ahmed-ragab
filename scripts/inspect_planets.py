import json

with open('public/lottie/error_edit.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    if 'planet' in l.get('nm', ''):
        print(f"Layer {l.get('nm')}:")
        for sh in l.get('shapes', []):
            print("  shape:", sh.get('nm'), sh.get('ty'))
            for it in sh.get('it', []):
                print("    it:", it.get('nm'), it.get('ty'))
