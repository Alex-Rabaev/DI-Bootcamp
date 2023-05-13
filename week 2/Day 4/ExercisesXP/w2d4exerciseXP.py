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
