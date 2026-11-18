import json

with open('public/lottie/floating_beyond.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("floating_beyond assets:")
for a in data.get('assets', []):
    print(" ", a)

print("\nfloating_beyond layers:")
for l in data.get('layers', []):
    print(" ", l.get('ind'), l.get('nm'), "ty=", l.get('ty'), "refId=", l.get('refId'))
