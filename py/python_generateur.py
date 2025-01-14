import json
import os
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)
print("Répertoire courant :", os.getcwd())
# Charger les données JSON
with open('../datas/balades.json', 'r', encoding='utf-8') as f:
    balades = json.load(f)

# Charger le template HTML
with open('../templates/template_balade.html', 'r', encoding='utf-8') as f:
    template_html = f.read()

for balade in balades:
    balade_html = template_html 

    # Remplacement des placeholders
    for placeholder, value in balade.items():
        balade_html = balade_html.replace(f"{{{{{placeholder}}}}}", str(value))

    # Sauvegarde du fichier généré
    output_filename = f"../html/{balade['SEASON_LEVEL_HTML']}"
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(balade_html)

    print(f"Fichier HTML généré : {output_filename}")
