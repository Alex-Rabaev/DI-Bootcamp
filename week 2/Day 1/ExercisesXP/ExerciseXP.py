# Exercise 1 : Hello World
#
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
print("Hello world\n"*4)

# Exercise 2 : Some Math
#
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).
print((99**3)*8)
# or
# result = 99**3*8
# print(result)

# Exercise 3 : What Is The Output ?
#
# Predict the output of the following code snippets:
# >>> 5 < 3 
# >>> 3 == 3 
# >>> 3 == "3" 
# >>> "3" > 3 
# >>> "Hello" == "hello" 
            # RESULTS:
            # False
            # True
            # False
            # TypeError: '>' not supported between instances of 'str' and 'int'
            # False

# Exercise 4 : Your Computer Brand
#
# 1. Create a variable called computer_brand which value is the brand name of your computer.
# 2. Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Dell"
print(f"I have a {computer_brand} computer")

# Exercise 5 : Your Information
#
# 1. Create a variable called name, and set it’s value to your name.
# 2. Create a variable called age, and set it’s value to your age.
# 3. Create a variable called shoe_size, and set it’s value to your shoe size.
# 4. Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# 5. Have your code print the info message.
# 6. Run your code

name = "Alex"
age = 32
shoe_size = 44
info = f"My name is {name}, I am {age} years old. My shoe size is {shoe_size}."
print(info)

# Exercise 6 : A & B
# 
# 1. Create two variables, a and b.
# 2. Each variable value should be a number.
# 3. If a is bigger then b, have your code print Hello World.

a = 1024
b = 2**8
if a > b :
    print("Hello world")

# Exercise 7 : Odd Or Even
#
# Write code that asks the user for a number and determines whether this number is odd or even.

number = int(input("Write a number please. "))
if number % 2 == 0 :
    print("The number is evem")
else :
    print("The number is odd")

# Exercise 8 : What’s Your Name ?
# 
# Write code that asks the user for their name and determines whether or not you have the same name, 
# print out a funny message based on the outcome.

my_name = "Alex"
username = input("What is your name? ")
if my_name == username :
    print("You have really cool name!")
else :
    print("Your name is fine.")

# Exercise 9 : Tall Enough To Ride A Roller Coaster
# 
# 1. Write code that will ask the user for their height in inches.
# 2. If they are over 145cm print a message that states they are tall enough to ride.
# 3. If they are not tall enough print a message that says they need to grow some more to ride.

inches_height = int(input("What is your height in inches? "))
cm_height = inches_height * 2.54
if cm_height >= 145 :
    print("You are tall enough to ride.")
else :
    print("You are need to grow some more to ride.")
# print(f"Your height in cm = {cm_height}")

# END