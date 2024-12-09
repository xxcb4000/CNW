import json

# Charger les données JSON
with open('Balades.json', 'r', encoding='utf-8') as f:
    balades = json.load(f)

# Charger le template HTML
with open('template_balade.html', 'r', encoding='utf-8') as f:
    template_html = f.read()

for balade in balades:
    balade_html = template_html 

    # Remplacement des placeholders
    for placeholder, value in balade.items():
        balade_html = balade_html.replace(f"{{{{{placeholder}}}}}", str(value))

    # Sauvegarde du fichier généré
    output_filename = f"balade_{balade['NAME_WALK_PASTILLE'].replace(' ', '_').lower()}.html"
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(balade_html)

print(f"Fichier HTML généré : {output_filename}")
