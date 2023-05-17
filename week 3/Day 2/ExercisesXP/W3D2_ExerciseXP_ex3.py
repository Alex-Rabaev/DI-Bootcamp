# Exercise 3 : Dogs Domesticated
# 
# 1. Create a new python file and import your Dog class from the previous exercise.

import random
from W3D2_ExerciseXP import Dog

# 2. In the new python file, create a class named PetDog that inherits from Dog.
# 3. Add an attribute called trained to the __init__ method, 
#    this attribute is a boolean and the value should be False by default.

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

# 4. Add the following methods:
#   - train: prints the output of bark and switches the trained boolean to True

    def train(self):
        bark_output = self.bark()
        self.trained = True
        return bark_output

#   - play: takes a parameter which value is a few names of other Dog instances (use *args). 
#     The method should print the following string: “dog_names all play together”.

    def play(self, *dog_names):
        all_dogs = [self.name] + list(dog_names)
        return f"{', '.join(all_dogs)} all play together"

#   - do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#           “dog_name does a barrel roll”.
#           “dog_name stands on his back legs”.
#           “dog_name shakes your hand”.
#           “dog_name plays dead”.

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f'{self.name} does a barrel roll',
                f'{self.name} stands on his back legs',
                f'{self.name} shakes your hand',
                f'{self.name} plays dead'
            ]
            return random.choice(tricks)
        else:
            return f'{self.name} is not trained yet'
        

spike = PetDog("Spike", 5, 15)
Butcher = PetDog("Butcher", 3, 20)

# Test 
print(spike.train())  # Output: Spike is barking
print(spike.trained)  # Output: True
print(Butcher.play("Sharik", "Dobby"))  # Output: Butcher Charlie Luna all play together
print(spike.do_a_trick())  # Output: Max does a barrel roll (randomly selected)
print(Butcher.do_a_trick())  # Output: Butcher is not trained yet