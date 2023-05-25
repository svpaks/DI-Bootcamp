from menu_item import *

connection = psycopg2.connect(
    database="Restaurant Menu Manager", 
    user='postgres',
    password='root',
    host='localhost',
    port='5432'
)

cursor = connection.cursor()
# Another oprtion would be to put the connection code in a function in menu_item.py
#and call the method here.

class MenuManager () :
    @classmethod
    def get_by_name(cls, item_name) :
        query_user = f"SELECT * FROM Menu_Items WHERE ILIKE '%{item_name}%'"
        cursor.execute(query_user)
        result = cursor.fetchall()
        if result == None :
            print(f'No item {item_name} in menu_items')
        else:
            return result

    @classmethod    
    def get_all(cls):
        query = f'''SELECT item_name, item_price FROM menu_items '''
        cursor.execute(query)
        result = cursor.fetchall()
        return result



# item = MenuManager.get_by_name('Burger')
# print(item)
