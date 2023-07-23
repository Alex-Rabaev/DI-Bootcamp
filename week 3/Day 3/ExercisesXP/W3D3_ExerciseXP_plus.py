# Exercise 2: Import

# 1. In a file named func.py create a function that adds 2 number, and prints the result
# 2. In a file namedexercise_one.py import and the function
#    Hint: You can use the the following syntaxes:

# import module_name

# OR

# from module_name import function_name

# OR

# from module_name import function_name as fn

# OR

# import module_name as mn


# Exercise 3: Random Module

# 1. Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
#    - if it’s the same number, display a success message to the user, else don’t.

from random import randint, choice


def game_1_100(number):
    winNumber = randint(1, 100)
    if winNumber == number:
        print("you won")
    return


game_1_100(28)


# Exercise 4: String Module

# 1. Generate random String of length 5
#    Note: String must be the combination of the UPPER case and lower case letters only.
#    No numbers and a special symbol.
#    Hint: use the string module

from string import ascii_letters

string = ""
for i in range(5):
    string += choice(ascii_letters)
print(string)


# Exercise 5 : Current Date

# 1. Create a function that displays the current date.
#    Hint : Use the datetime module.

from datetime import date, datetime, timedelta

print(date.today())


# Exercise 6 : Amount Of Time Left Until January 1st

# 1. Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

delta = datetime(date.today().year + 1, 1, 1) - datetime.now()
print(
    f"the 1st of January is in {delta.days} days and",
    (datetime.min + delta).strftime("%H:%M:%S hours"),
)


# Exercise 7 : Birthday And Minutes

# 1. Create a function that accepts a birthdate as an argument
#    (in the format of your choice), then displays a message stating how many
#    minutes the user lived in his life.


def count_life_minutes(birthday):
    """birthday should be in 'DD.MM.YYYY' format"""

    bDay = datetime(*[int(n) for n in birthday.split(".")[::-1]])
    delta = datetime.now() - bDay
    minutes = int(delta.total_seconds() / 60)
    print(f"You lived {minutes} minutes")


count_life_minutes("21.06.1985")


# Exercise 8 : Faker Module

# 1. Install the faker module, and take a look at the documentation and learn how to
#    properly implement faker in your code.
# 2. Create an empty list called users. Tip: It should be a list of dictionaries.
# 3. Create a function that adds new dictionaries to the users list. Each user has
#    the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

users = []
fake = Faker()


def add_user():
    user_info = {
        "name": fake.name(),
        "adress": fake.address(),
        "language_code": fake.language_code(),
    }
    return user_info


for i in range(10):
    users.append(add_user())

print(add_user())
print(users)
