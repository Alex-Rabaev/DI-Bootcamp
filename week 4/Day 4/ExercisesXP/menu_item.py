import psycopg2


# 1. Create a new database and a new table in pgAdmin (or in psql). 
#    The table is named Menu_Items and contains the columns

#       item_id : SERIAL PRIMARY KEY
#       item_name : VARCHAR(30) NOT NULL
#       item_price : SMALLINT DEFAULT 0

# Done

connection = psycopg2.connect(
    database = "Exercise",
    user = 'postgres',
    password = 'DF45klq91',
    host = 'localhost',
    port = '5432'
)

cursor = connection.cursor()


query_test = f"SELECT * FROM Menu_Items"
cursor.execute(query_test)
result_test = cursor.fetchall()

# 2. In the file menu_item.py, create a new class called MenuItem, 
#    the attributes should be the name and price of each item.

class MenuItem() :
    def __init__(self, name, price = 0):
        self.name = name
        self.price = price
        

# 3. Create several methods (save, delete, update) these methods will allow a user to save, 
#    delete and update items from the Menu_Items table. 
#    The update method can update the name as well as the price of an item.

    def save(self) :
        for item in result_test :
            if self.name in item and self.price in item :
                print(f'{self.name} with price of {self.price} is already exist in the menu.')
                return None                 
        query_user = f"""
        INSERT INTO Menu_Items
        (item_name, item_price)
        VALUES ('{self.name}', {self.price})
        """
        cursor.execute(query_user)
        connection.commit()

    def delete(self) :
        query_user = f"""
        DELETE FROM Menu_Items
        WHERE item_name = '{self.name}' 
        AND item_price = {self.price}
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
        print('item updated')

item = MenuItem('Salad', 27)
item.save()
item2 = MenuItem('Salad Caesar', 30)
item2.save()
# item.update('Salad', 27)
# item.delete()

# print(result_test)
# print(result_test[1][1])


cursor.close()
connection.close()