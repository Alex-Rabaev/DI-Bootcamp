# Challenge 1


# 1. Ask the user for a number and a length.
# 2. Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input("Please, enter a number. ")) # 5
l_list = int(input("Please, enter a length. ")) # 5
number_list = []
for i in range(0, l_list) :
    number_list.append(number * (i + 1))
# i = 1
# while len(number_list) < l_list:
#     number_list.append(number * i)
#     i += 1
print(number_list)


# Challenge 2


# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

word = input("Enter a word: ")
new_word = ""
prev_char = ""
for char in word:
    if char != prev_char:
        new_word += char
        prev_char = char
print("New word with duplicate consecutive letters removed:", new_word)
