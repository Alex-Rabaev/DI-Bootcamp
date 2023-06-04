# import json
# from django.apps import apps

# def load_data():
#     Animal = apps.get_model('info', 'Animal')
#     Family = apps.get_model('info', 'Family')

#     with open('info/data/animal-info.json') as file:
#         data = json.load(file)

#         # Load families first
#         families = data['families']
#         for family_data in families:
#             Family.objects.create(id=family_data['id'], name=family_data['name'])

#         # Load animals
#         animals = data['animals']
#         for animal_data in animals:
#             family_id = animal_data['family']
#             family = Family.objects.get(id=family_id)
#             Animal.objects.create(
#                 id=animal_data['id'],
#                 name=animal_data['name'],
#                 legs=animal_data['legs'],
#                 weight=animal_data['weight'],
#                 height=animal_data['height'],
#                 speed=animal_data['speed'],
#                 family=family
#             )

# # Call the function to load the data
# load_data()