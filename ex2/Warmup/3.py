import json

with open("desc750-20.json",'r') as f:
    jfile = json.load(f)

print(len(jfile))