import psycopg2

connection = psycopg2.connect(
    database="Restaurant Menu Manager", 
    user='postgres',
    password='root',
    host='localhost',
    port='5432'
)

cursor = connection.cursor()

class MenuItem() :
    def __init__(self, name, price = 0):
        self.name = name
        self.price = price
       
    def save(self) :
        query_user = f"""
        INSERT INTO Menu_Items 
        (item_name, item_price)
        VALUES ('{self.name}', '{self.price}')
        """
        cursor.execute(query_user)
        connection.commit()
    
    def delete(self) :
        query_user = f"""
        DELETE FROM Menu_Items 
        WHERE item_name = '{self.name}'
        """
        cursor.execute(query_user)
        connection.commit()
    
    def update(self, new_name, new_price) :
        self.new_name = new_name
        self.new_price = new_price
        query_user = f"""
        UPDATE Menu_Items 
        SET item_name = '{new_name}', item_price = {new_price}
        WHERE item_name = '{self.name}'
        """
        cursor.execute(query_user)
        connection.commit()

# Don't forget to test each new method when you finish the code for it.
def main():
    item1 = MenuItem('Burger ', 35)
    item2 = MenuItem('Pizza', 50)
    item3 = MenuItem('Salad', 20)
    item1.save()
    item2.save()
    item3.save()


if __name__ == '__main__':
    main()
# item1.update('Vegan Burger', 45)
# item1.delete()


cursor.close()
connection.close()