# Exercise 1 : Set
# 
# 1. Create a set called my_fav_numbers with all your favorites numbers.
# 2. Add two new numbers to the set.
# 3. Remove the last number.
# 4. Create a set called friend_fav_numbers with your friend’s favorites numbers.
# 5. Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = [1, 3, 4, 6, 7, 9, 12, 27, 396]
# my_fav_numbers.insert(7, 13)
# my_fav_numbers.insert(8, 18)
my_fav_numbers.extend([18, 72])
print(my_fav_numbers)
l = len(my_fav_numbers) # length of my_fav_numbers list
my_fav_numbers.pop(l-1)
print(my_fav_numbers)
friend_fav_numbers = [15, 21, 33, 36, 81]
print(friend_fav_numbers)
our_fav_numbers = my_fav_numbers + friend_fav_numbers
print(our_fav_numbers)

# Exercise 2: Tuple
# 
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
#
#
# Answer: Tuples are immutable lists, which means items can’t be changed.


# Exercise 3: List
# 
# Using this list - basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# 1. Remove “Banana” from the list.
# 2. Remove “Blueberries” from the list.
# 3. Add “Kiwi” to the end of the list.
# 4. Add “Apples” to the beginning of the list.
# 5. Count how many apples are in the basket.
# 6. Empty the basket.
# 7. Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

basket.remove("Banana")
print(basket)

basket.remove("Blueberries")
print(basket)

basket.append("Kiwi")
print(basket)

basket.insert(0, "Apples")
print(basket)

apl_count = basket.count("Apples")
print(apl_count) # or print(basket.count("Apples"))

basket.clear()
print(basket)


# Exercise 4: Floats
# 
# 1. Recap – What is a float? What is the difference between an integer and a float?
        # The main difference between an integer and a float is that an integer represents a whole number, 
        # whereas a float can represent a fractional number. Integers have no fractional part, 
        # whereas floats can have a decimal point and can represent a range of values between integers.

# 2. Can you think of another way to generate a sequence of floats?
        # I'm sure that there are an another ways to generate a sequence of floats in python.
        # But I don't know them yet. 

# 3. Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

float_list = []
for i in range(3, 11) :
    float_list.append(i / 2)
print(float_list)

# Exercise 5: For Loop
# 
# 1. Use a for loop to print all numbers from 1 to 20, inclusive.
# 2. Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1, 21) :
    print(i)
for i in range(1, 21) :
    if i % 2 == 0 :
        print(i)

# Exercise 7: Favorite Fruits
# 
# 1. Ask the user to input their favorite fruit(s) (one or several fruits).
#       Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# 2. Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# 3. Now that we have a list of fruits, ask the user to input a name of any fruit.
#       - If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#       - If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fruits = input("Please, write your favorite fruits. Please, separate fruits with a single space. ")
fruits_list = fruits.split()
print(fruits_list)
fruit1 = input("Please, write a name of a fruit you gonna eat. ")
if fruit1 in fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy!")


# Exercise 9: Cinemax
# 
# 1. A movie theater charges different ticket prices depending on a person’s age.
#       - if a person is under the age of 3, the ticket is free.
#       - if they are between 3 and 12, the ticket is $10.
#       - if they are over the age of 12, the ticket is $15.

# 2. Ask a family the age of each person who wants a ticket.

# 3. Store the total cost of all the family’s tickets and print it out.

# 4. A group of teenagers are coming to your movie theater and want to watch a movie 
#   that is restricted for people between the ages of 16 and 21.
#   Given a list of names, write a program that asks teenager for their age, 
#   if they are not permitted to watch the movie, remove them from the list.
#   At the end, print the final list.


ages = input("How old are you and your family members? ")
ages_list = ages.split()
print(ages_list)
total_cost = 0
for age in ages_list :
    age = int(age)
    if 3 < age <= 12 :
        total_cost = total_cost + 10
    elif age > 12 :
        total_cost = total_cost + 15   
print("Total cost of your tickets is", total_cost)

# 4
names = input("Tell me your names please. ")
ages_2 = input("And how old are you? ")
names_list = names.split()
ages2_list = ages_2.split()

# Remove teens not permitted to watch the movie
i = 0
while i < len(names_list):
    if 16 <= int(ages2_list[i]) <= 21:
        i += 1
    else:
        names_list.pop(i)
        ages2_list.pop(i)
print("The allowed teenagers are:", names_list)


# Exercise 10 : Sandwich Orders
# 
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

# 1. Use the above list called sandwich_orders.
# 2. Make an empty list called finished_sandwiches.
# 3. As each sandwich is made, move it to the list of finished sandwiches.
# 4. After all the sandwiches have been made, print a message listing each sandwich that was made , 
#    such as I made your tuna sandwich.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)
    print(f"I made your {sandwich}.")

print("\nAll the sandwiches have been made.")
print("The following sandwiches were made:")
for sandwich in finished_sandwiches:
    print(sandwich)