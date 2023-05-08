# Exercise 3 : Outputs
# 
# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9 
#     >>> 3 == 3 == 3 
#     >>> bool(0) 
#     >>> bool(5 == "5") 
#     >>> bool(4 == 4) == bool("4" == "4") 
#     >>> bool(bool(None)) 
#       x = (1 == True)
#       y = (1 == False)
#       a = True + 4
#       b = False + 10

#       print("x is", x) 
#       print("y is", y) 
#       print("a:", a) 
#       print("b:", b) 

# Results

# 1. True
# 2. True
# 3. False
# 4. False
# 5. True
# 6. False
# 7.  x is True
#     y is False
#     a: 5
#     b: 10



# Exercise 4 : How Many Characters In A Sentence?
# 
# Use python to find out how many characters are in the following text, use a single line of code 
# (beyond the establishment of your my_text variable).
# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum.

my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))