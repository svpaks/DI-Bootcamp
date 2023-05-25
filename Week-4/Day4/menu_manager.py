import psycopg2
from menu_item import *

connection = psycopg2.connect(
    database="Restaurant Menu Manager", 
    user='postgres',
    password='root',
    host='localhost',
    port='5432'
)

cursor = connection.cursor()

class MenuManager () :
    @classmethod
    def get_by_name(cls, item_name) :
        query_user = f"SELECT * FROM Menu_Items WHERE ILIKE '%{item_name}%'"
        cursor.execute(query_user)
        result = cursor.fetchone()
        if result == None :
            return f"There is no {item_name} in the menu"
        return result

item = MenuManager.get_by_name('Burger')
print(item)



        
    # def all_items(cls) :
    #     db = DatabaseConnection()  
    #     query = "SELECT * FROM Menu_Items"
    #     results = db.execute(query)
    #     menu_items = []
    #     for result in results:
        #     menu_item = Menu_Item(result['id'], result['name'], result['price'])
        #     menu_items.append(menu_item)
        # return menu_items


