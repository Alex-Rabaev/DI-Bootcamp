# Instructions

# Given a “Matrix” string:

#     7i3
#     Tsi
#     h%x
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!

# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	    i	3
# T	    s	i
# h	    %	x
# i	    	#
# s	    M	
# $	    a	
# #	    t	%
# ^	    r	!

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# - lists for storing data
# - Loops for going through the data
# - if/else statements to check the data
# - String for the output of the secret message


matrix = [
    "7i3",
    "Tsi",
    "h%x",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

rows = len(matrix)
cols = len(matrix[0])

message = ""
for j in range(cols):
    for i in range(rows):
        if matrix[i][j].isalpha():
            message += matrix[i][j]
        else :
            message += " "

result = message[0]
for i in range(1, len(message)):
    if message[i-1].isalpha() and message[i].isalpha():
        result += message[i]
    elif message[i-1].isalpha() and message[i] == " ":
        result += " "
    elif message[i-1] == " "  and message[i].isalpha():
        result += message[i]

# Print the secret message
print(result)