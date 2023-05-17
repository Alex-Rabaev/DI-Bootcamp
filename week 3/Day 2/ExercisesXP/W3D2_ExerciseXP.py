# Exercise 1 : Pets

# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
# 1. Create another cat breed named Siamese which inherits from the Cat class.

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# 2. Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

all_cats = [Bengal("Tom", 9), Chartreux("Whiskers", 5), Siamese("Fluffy", 4)]

# 3. Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, 
# and pass the variable all_cats to the new instance.

sara_pets = Pets(all_cats)

# 4. Take all the cats for a walk, use the walk method.

sara_pets.walk()

# Exercise 2 : Dogs

# 1. Create a class called Dog with the following attributes name, age, weight.

class Dog :

    def __init__(self, name_dog, age_dog, weight_dog) :
        self.name = name_dog
        self.age = age_dog
        self.weight = weight_dog

# 2. Implement the following methods in the Dog class:
#       - bark: returns a string which states: “<dog_name> is barking”.

    def bark(self) :
        return f"{self.name} is barking"

#       - run_speed: returns the dogs running speed (weight/age*10).

    def run_speed(self) :
        speed_dog = self.weight / (self.age * 10)
        return speed_dog
    
#       - fight : takes a parameter which value is another Dog instance, called other_dog. 
#         This method returns a string stating which dog won the fight. 
#         The winner should be the dog with the higher run_speed x weight.

    def fight(self, other_dog) :
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight :
            return f"{self.name} has won the fight vs {other_dog.name}."
        elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight :
            return f"{other_dog.name} has won the fight vs {self.name}"
        else :
            return f"Oof, it's a tie"

# 3 Create 3 dogs and run them through your class.

spike = Dog("Spike", 6, 25)
karat = Dog("Karat", 7, 24)
devil = Dog("Devil", 11, 32)
print(spike.bark())
print(karat.bark())
print(devil.bark())
print(spike.run_speed())
print(karat.run_speed())
print(devil.run_speed())
print(spike.fight(karat))
print(spike.fight(devil))
print(karat.fight(devil))

# Exercise 3 : Dogs Domesticated
# 
# 1. Create a new python file and import your Dog class from the previous exercise.
# 2. In the new python file, create a class named PetDog that inherits from Dog.
# 3. Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# 4. Add the following methods:
#   - train: prints the output of bark and switches the trained boolean to True

#   - play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#   - do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#           “dog_name does a barrel roll”.
#           “dog_name stands on his back legs”.
#           “dog_name shakes your hand”.
#           “dog_name plays dead”.



# --------------- look file ___W3D2_ExerciseXP_ex3.py___ -----------------