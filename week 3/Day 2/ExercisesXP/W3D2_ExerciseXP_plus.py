# Exercise 1 : Family

# 1. Create a class called Family and implement the following attributes:

#       - members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
#       - last_name : (string)

    # Initial members data:

    # [
    #     {'name':'Michael','age':35,'gender':'Male','is_child':False},
    #     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    # ]

class Family() :
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name
    
    def member(self, name, age, gender, is_child):
        member = {
            'name': name,
            'age': age,
            'gender': gender,
            'is_child': is_child
        }
        self.members.append(member)

# 2. Implement the following methods:

#       - born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.

    def born(self, **kwargs):
        self.child = {}
        for key, value in kwargs.items():
            self.child[key] = value
        self.members.append(self.child)
        if 'name' in self.child :
            print(f"Congratulations to the {self.last_name} family on the birth of {self.child['name']}!")
        elif 'gender' in self.child and self.child['gender'] == 'Male' :
            print(f"Congratulations to the {self.last_name} family on the birth of their babyboy!")
        elif 'gender' in self.child and self.child['gender'] == 'Female' :
            print(f"Congratulations to the {self.last_name} family on the birth of their babygirl!")
        else :
            print(f"Congratulations to the {self.last_name} family on the birth of their child!")

#       - is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.

    def is_18(self, name) :
        for member in self.members:
            if 'name' in member and member['name'] == name:
                return member['age'] >= 18
        return False


#       - family_presentation: a method that prints the family’s last name and all the members’ first name.

    def family_presentation(self) :
        print(f"The {self.last_name} family:")
        name_list = []
        for member in self.members:
            if 'name' in member:
                name_list.append(member['name'])
            elif 'gender' in member :
                if member['gender'] == 'Male' :
                    name_list.append('babyboy')
                elif member['gender'] == 'Female' :
                    name_list.append('babygirl')
                else :
                    name_list.append('baby')
            else :
                name_list.append('baby')
        names = ', '.join(name_list)
        print(names)


smiths = Family("Smith")
smiths.member('Michael', 35, 'Male', False)
smiths.member('Sarah', 32, 'Female', False)
for member in smiths.members:
    print(member)

smiths.born(name='Emily', age=0, gender='Female')
smiths.born(age=0, gender='Female')
smiths.born(age=0, gender='Male')
smiths.born(age=0)
for member in smiths.members:
    print(member)
print(smiths.is_18('Michael'))  # Output: True
print(smiths.is_18('Sarah'))  # Output: True
print(smiths.is_18('Emily'))  # Output: False
smiths.family_presentation()

# print(smiths.members)




# Exercise 2 : TheIncredibles Family

# 1. Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following 
# keys to our dictionaries: power and incredible_name.

    # Initial members data:

    # [
    #     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    #     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    # ]

class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

    # def incredible_member(self, name, age, gender, is_child, power, incredible_name):
    #     super().member(name, age, gender, is_child)
    #     incredible_member = {
    #         'name': name,
    #         'age': age,
    #         'gender': gender,
    #         'is_child': is_child,
    #         'power' : power,
    #         'incredible_name' : incredible_name
    #     }
    #     self.members.append(incredible_member)

    def incredible_member(self, name, age, gender, is_child, power, incredible_name):
            member = {
                'name': name,
                'age': age,
                'gender': gender,
                'is_child': is_child,
                'power': power,
                'incredible_name': incredible_name
            }
            self.members.append(member)

# 2. Add a method called use_power, this method should print the power of a member only if they are over 18 years old. 
#    If not raise an exception (look up exceptions) which stated they are not over 18 years old.
    
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} can use their power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")

# 3. Add a method called incredible_presentation which :
#       - Prints the family’s last name and all the members’ first name (ie. use the super() function, 
#         to call the family_presentation method)
#       - Prints all the members’ incredible name and power.

    def incredible_presentation(self):
        super().family_presentation()
        for member in self.members:
            print(f"{member['incredible_name']} - Power: {member['power']}")

incredible_family = TheIncredibles("Incredible")
incredible_family.incredible_member('Michael', 35, 'Male', False, 'fly', 'MikeFly')
incredible_family.incredible_member('Sarah', 32, 'Female', False, 'read minds','SuperWoman')

# 4. Call the incredible_presentation method.

incredible_family.incredible_presentation()

# 5. Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

incredible_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

# 6. Call the incredible_presentation method again.

incredible_family.incredible_presentation()
incredible_family.use_power("Michael")
incredible_family.use_power("Sarah")
incredible_family.use_power("Baby Jack")