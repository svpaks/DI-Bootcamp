import requests
import json
import pprint
import psycopg2

# connection = psycopg2.connect(
#     database = 'countries',
#     user = 'postgres',
#     password = 'root',
#     host = 'localhost',
#     port = '5432'
# )

# cursor = connection.cursor()

# cursor.execute("DROP TABLE IF EXISTS countries")
# cursor.execute('''
# CREATE TABLE countries (id SERIAL PRIMARY KEY, 
# name VARCHAR(50) NOT NULL, 
# capital VARCHAR(50) NOT NULL,
# flag_code VARCHAR(50) NOT NULL, 
# subregion TEXT(50) NOT NULL, 
# population INTEGER)''')


# connection.commit()


countries_api = requests.get('https://restcountries.com/v3.1/name/Brazil')


data = countries_api.json()
print(data[0]['name']['common'])
# jason_data = json.loads(data)
# print(data['name'])


# pprint.pprint(data[0]['flag'])
name = data[0]['name']['common']
capital = data[0]['capital'][0]
flag_code = data[0]['flag']
subregion = data[0]['subregion']
population = data[0]['population']


# try:
#     query = (f'''INSERT INTO countries 
#     ({name},{capital},{flag_code},{subregion},{population})''')
#     cursor.execute(query)
#     connection.commit()
# except SyntaxError as e:
#     print(e)


print('done')

