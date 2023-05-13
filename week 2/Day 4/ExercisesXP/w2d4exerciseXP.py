# Exercise 1 : What Are You Learning ?
# 
# 1. Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# 2. Call the function, and make sure the message displays correctly.

def display_message() :
    print("I'm trying to become a web developer")

display_message()

# Exercise 2: What’s Your Favorite Book ?
# 
# 1. Write a function called favorite_book() that accepts one parameter called title.
# 2. The function should print a message, such as "One of my favorite books is <title>".
#    For example: “One of my favorite books is Alice in Wonderland”
# 3. Call the function, make sure to include a book title as an argument when calling the function.


def favorite_book(book_title) :
    print(f"One of my favorite books is {book_title}")
book = input("What are you reading? ")
favorite_book(book)

# Exercise 3 : Some Geography
# 
# 1. Write a function called describe_city() that accepts the name of a city and its country as parameters.
# 2. The function should print a simple sentence, such as "<city> is in <country>".
#    For example “Reykjavik is in Iceland”
# 3. Give the country parameter a default value.
# 4. Call your function.

def describe_city(city, country = "Israel") :
    print(f"{city} is in {country}")
describe_city(input("City name: "))


# Exercise 4 : Random
# 
# 1. Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# 2. Compare the two numbers, if it’s the same number, display a success message, 
#    otherwise show a fail message and display both numbers.


import random

def compare_numbers(num):
    rand_num = random.randint(1, 100)
    if num == rand_num:
        print("Success! You guessed the number.")
    else:
        print("Fail! The numbers are different.")
    print(f"Your number was: {num}. And win number was: {rand_num}")
    
compare_numbers(50)

# Exercise 5 : Let’s Create Some Personalized Shirts !
# 
# 1. Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# 2. The function should print a sentence summarizing the size of the shirt and the message printed on it, such as 
#    "The size of the shirt is <size> and the text is <text>"
# 3. Call the function make_shirt().

# 4. Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# 5. Make a large shirt with the default message
# 6. Make medium shirt with the default message
# 7. Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size = "large", massage = "I love Python") :
    print(f"The size of the shirt is {size} and the text is {massage}")
make_shirt("XL", "Marvel")
make_shirt()
make_shirt("medium")
make_shirt(size = "Small", massage = "I always want to sleep... zzz")

# Exercise 6 : Magicians …
# 
# 1. Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# 2. Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# 3. Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" 
#    to each magician’s name.
# 4. Call the function make_great().
# 5. Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(name_list) :
    for name in name_list :
        print(name)

show_magicians(magician_names)

def make_great(name_list) :
    for i in range(len(name_list)) :
        name_list[i] = "The Great " + name_list[i]

make_great(magician_names)
show_magicians(magician_names)


# Exercise 7 : Temperature Advice
# 
# 1. Create a function called get_random_temp().
#       1. This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#       2. Test your function to make sure it generates expected results.

# 2. Create a function called main().
#       1. Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#       2. Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# 3. Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#       1. below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#       2. between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#       3. between 16 and 23
#       4. between 24 and 32
#       5. between 32 and 40

# 4. Change the get_random_temp() function:
#       1. Add a parameter to the function, named ‘season’.
#       2. Inside the function, instead of simply generating a random number between -10 and 40, 
#          set lower and upper limits based on the season, eg. if season is ‘winter’, 
#          temperatures should only fall between -10 and 16.
#       3. Now that we’ve changed get_random_temp(), let’s change the main() function:
#               1. Before calling get_random_temp(), we will need to decide on a season, 
#                  so that we can call the function correctly. Ask the user to type in a season - 
#                  ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#               2. Use the season as an argument when calling get_random_temp().

# 5. Bonus: Give the temperature as a floating-point number instead of an integer.
# 6. Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

import random

def get_random_temp(season):
    if season == 'winter':
        return round(random.uniform(-10, 16), 1)
    elif season == 'spring' or season == 'autumn' or season == 'fall':
        return round(random.uniform(0, 23), 1)
    elif season == 'summer':
        return round(random.uniform(16, 40), 1)
    else:
        return "Invalid season"

def main():
    month = int(input("Enter the number of the month (1-12): "))
    if month in [12, 1, 2]:
        season = 'winter'
    elif month in [3, 4, 5]:
        season = 'spring'
    elif month in [6, 7, 8]:
        season = 'summer'
    elif month in [9, 10, 11]:
        season = 'autumn'
    else:
        print("Invalid month")
        return
    temperature = get_random_temp(season)
    if isinstance(temperature, str):
        print(temperature)
    else:
        print("The temperature right now is", temperature, "degrees Celsius.")
        if temperature < 0:
            print("Brrr, that’s freezing! Wear some extra layers today")
        elif temperature >= 0 and temperature < 16:
            print("Quite chilly! Don’t forget your coat")
        elif temperature >= 16 and temperature < 24:
            print("The weather is pleasant")
        elif temperature >= 24 and temperature < 32:
            print("It's quite warm today, stay hydrated")
        else:
            print("It's very hot! Stay indoors if possible")

main()