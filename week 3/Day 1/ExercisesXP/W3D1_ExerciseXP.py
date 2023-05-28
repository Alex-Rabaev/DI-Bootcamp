# Exercise 1: Cats
# 
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# 1. Instantiate three Cat objects using the code provided above.
# 2. Outside of the class, create a function that finds the oldest cat and returns the cat.
# 3. Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. 
#    Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

lst_cats = [Cat("Fluffy", 5), Cat("Tom", 2), Cat("Whisckers", 8), Cat("Roni", 5)]

def oldest(cats) :
    oldest_cat = cats[0]
    for item in cats :
        if item.age > oldest_cat.age :
            oldest_cat = item
    return oldest_cat

print(f"The oldest cat is {oldest(lst_cats).name}, and is {oldest(lst_cats).age} years old.")



# Exercise 2 : Dogs
# 
# 1. Create a class called Dog.
# 2. In this class, create an __init__ method that takes two parameters : name and height. 
#    This function instantiates two attributes, which values are the parameters.
# 3. Create a method called bark that prints the following string “<dog_name> goes woof!”.
# 4. Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# 5. Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# 6. Print the details of his dog (ie. name and height) and call the methods bark and jump.
# 7. Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# 8. Print the details of her dog (ie. name and height) and call the methods bark and jump.
# 9. Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self) :
        print(f"{self.name} goes woof!")

    def jump(self) :
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog name is {davids_dog.name} and his height is {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"David's dog name is {sarahs_dog.name} and his height is {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# biggest_dog = davids_dog.name if davids_dog.height > sarahs_dog.height else sarahs_dog.name
print(f"{davids_dog.name if davids_dog.height > sarahs_dog.height else sarahs_dog.name} is bigger")
    

# Exercise 3 : Who’s The Song Producer?
#
# 1. Define a class called Song, it will show the lyrics of a song.
#    Its __init__() method should have two arguments: self and lyrics (a list).
# 2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# 3. Create an object, for example:

#   stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# 4. Then, call the sing_me_a_song method. The output should be:

#   There’s a lady who's sure
#   all that glitters is gold
#   and she’s buying a stairway to heaven

class Song :
    def __init__(self, lyrics) :
        self.lyric_lst = lyrics

    def sing_me_a_song(self) :
        for line in self.lyric_lst :
            print(line)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
# 
# 1. Create a class called Zoo.
# 2. In this class create a method __init__ that takes one parameter: zoo_name.
#    It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# 3. Create a method called add_animal that takes one parameter new_animal. 
#    This method adds the new_animal to the animals list as long as it isn’t already in the list.
# 4. Create a method called get_animals that prints all the animals of the zoo.
# 5. Create a method called sell_animal that takes one parameter animal_sold. 
#    This method removes the animal from the list and of course the animal needs to exist in the list.
# 6. Create a method called sort_animals that sorts the animals alphabetically and groups them together 
#    based on their first letter.

# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# 7. Create a method called get_groups that prints the animal/animals inside each group.

# 8. Create an object called ramat_gan_safari and call all the methods.
#    Tip: The zookeeper is the one who will use this class.

# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo :
    def __init__(self, zoo_animals, zoo_name) :
        self.animals = zoo_animals
        self.name = zoo_name

    def add_animal(self, new_animal) :
        if new_animal not in self.animals :
            self.animals.append(new_animal)

    def get_animals(self) :
        for animal in self.animals :
            print(animal)
    
    def sell_animal(self, animal_sold) :
        if animal_sold in self.animals :
            self.animals.remove(animal_sold)

    def sort_animals(self) :
        self.animals.sort()        
        grouped_animals = {}
        for item in self.animals :
            first_letter = item[0]
            if first_letter in grouped_animals:
                grouped_animals[first_letter].append(item)
            else:
                grouped_animals[first_letter] = [item]
        final_grouped_animals = {}
        for i, (key, value) in enumerate(grouped_animals.items(), start=1):
            final_grouped_animals[i] = value
        
        return final_grouped_animals
    
    def get_groups(self, grouped_animals) :
        grouped_animals = self.sort_animals()
        for key in grouped_animals:
            print(f"{key}: {grouped_animals[key]}")


animals_lst = ["Ape","Baboon", "Bear", 'Cat', 'Cougar', 'Eel', 'Emu']
ramat_gan_safari = Zoo(animals_lst, "Safari")
ramat_gan_safari.add_animal(input("Which animal should we add to the zoo? "))
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal(input("Which animal should we sell from the zoo? "))
ramat_gan_safari.get_animals()

ramat_gan_safari.get_groups(ramat_gan_safari.sort_animals())

