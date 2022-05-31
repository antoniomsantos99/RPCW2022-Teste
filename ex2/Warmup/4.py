import json

with open("nivel3.json",'r') as f:
    jfile = json.load(f)
c=0
for elem in jfile:
    if elem["codigo"].startswith("900.10"):
        c+=1
print(c)