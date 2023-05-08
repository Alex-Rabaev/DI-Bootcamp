# Daily Challenge: Build Up A String
#
# Instructions
# 1. Using the input function, ask the user for a string. The string must be 10 characters long.
#   - If it’s less than 10 characters, print a message which states “string not long enough”.
#   - If it’s more than 10 characters, print a message which states “string too long”.

# 2. Then, print the first and last characters of the given text.

# 3. Using a for loop, construct the string character by character: Print the first character, 
#    then the second, then the third, until the full string is printed. For example:
#    The user enters "Hello World"
#    Then, you have to construct the string character by character
#    H
#    He
#    Hel
#    ... etc
#    Hello World


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod




import random
# 1
sent = input("Write a sentence with 10 characters. ")
amount = len(sent)
if amount < 10 :
    print("string not long enough")
else :
    print("string too long")

# 2
print(sent[0], sent[amount-1])

# 3
sent_loop = ""
for char in sent:
    sent_loop = sent_loop + char
    print(sent_loop)

# 4
my_list = list(sent)
random.shuffle(my_list)
jumbled_sent = "".join(my_list)
print(jumbled_sent)