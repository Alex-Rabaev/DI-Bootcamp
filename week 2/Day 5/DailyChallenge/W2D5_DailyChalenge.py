# Daily Challenge: Sorting
# 
# Write a program that accepts a comma separated sequence of words as input and prints the words in a 
# comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world



input_string = input("Enter comma-separated words: ")

words = input_string.split(",")

sorted_words = sorted(words)

output_string = ",".join([word for word in sorted_words])

print(output_string)