import json

# Abrir y leer el archivo JSON
with open('cypress\support\datos.js') as archivo:
    datos_archivo = json.load(archivo)
   # print (datos_archivo)

# Inicializar un contador
sold_pets = [(pet["id"], pet["name"]) for pet in datos_archivo]
#print(sold_pets)

contador_name = {}

# Iterar sobre los arrays de nombres
class PetCounter:
    name_count = {}
    for pet_id, pet_name in sold_pets:
        name = pet_name.strip()
        if name in name_count:
            name_count[name] += 1
            #print(name_count)
        else:
            name_count[name] = 1
    print(name_count)

