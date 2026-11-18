import json

with open('public/lottie/space_boy_developer.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for l in data['layers']:
    if l.get('nm') == 'Layer 4':
        sh = l['shapes'][5]
        for it in sh.get('it', []):
            for sub in it.get('it', []):
                if sub.get('ty') == 'gr':
                    for ssub in sub.get('it', []):
                        if ssub.get('ty') == 'fl':
                            c = ssub.get('c',{}).get('k')
                            h = '#{:02x}{:02x}{:02x}'.format(int(c[0]*255), int(c[1]*255), int(c[2]*255))
                            print(f"{it.get('nm')} > {sub.get('nm')} > {ssub.get('nm')}: color={h}")
