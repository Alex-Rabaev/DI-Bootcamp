import psycopg2
from menu_item import *

connection = psycopg2.connect(
    database = "Exercise",
    user = 'postgres',
    password = 'DF45klq91',
    host = 'localhost',
    port = '5432'
)

cursor = connection.cursor()

class MenuManager() :
    @classmethod
    def get_by_name (cls, item_name) :
        query_user = f"SELECT * FROM Menu_Items WHERE item_name ILIKE '%{item_name}%'"
        cursor.execute(query_user)
        result = cursor.fetchall()
        if result == None or result == []:
            return f"There is no {item_name} in the menu"
        message_list = []
        i = 1
        for list_item in result :            
            message_list += [f'{i}. {list_item[1]}']
            i += 1
        message = 'Here what we have in the menu:\n' + "\n".join(message_list)        
        return message
    
    @classmethod
    def get_all(cls) :        
        query_user = f"SELECT * FROM Menu_Items"
        cursor.execute(query_user)
        result = cursor.fetchall()
        return result
             

item3 = MenuManager.get_by_name('Salad')
print(item3)
print(MenuManager.get_all())



cursor.close()
connection.close()
