import requests
import json
import psycopg2
import random


connection = psycopg2.connect(
    database = "Countries",
    user = 'postgres',
    password = 'DF45klq91',
    host = 'localhost',
    port = '5432'
)

cursor = connection.cursor()

cursor.execute("DROP TABLE IF EXISTS Countries")
cursor.execute("""
CREATE TABLE countries (id SERIAL PRIMARY KEY, 
name VARCHAR(100) NOT NULL, 
capital VARCHAR(100) NOT NULL,
flag_code VARCHAR(100) NOT NULL, 
subregion VARCHAR(100) NOT NULL, 
population INTEGER)
""")

connection.commit()

countries_api = requests.get('https://restcountries.com/v3.1/all')

data = countries_api.json()


# name = data[0]['name']['common']
# capital = data[0]['capital'][0]
# flag_code = data[0]['flag']
# subregion = data[0]['subregion']
# population = data[0]['population']

for i in range(10) :
    number = random.randint(1, 200)

    name = data[number]['name']['common']
    capital = data[number]['capital'][0]
    flag_code = data[number]['flag']
    subregion = data[number]['subregion']
    population = data[number]['population']

    query = (f"""
        INSERT INTO countries (name, capital, flag_code, subregion, population)
        VALUES (%s, %s, %s, %s, %s);
        """)
    cursor.execute(query, (name, capital, flag_code, subregion, population))
    connection.commit()


print('done')


