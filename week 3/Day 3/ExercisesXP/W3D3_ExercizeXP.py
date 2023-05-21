# Exercise 1 : Built-In Functions

# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# 1. Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# 2. Using the __doc__ dunder method create your own documentation which explains the execution of your code. 
#    Take a look at the doc method on google for help.

def built_in_functions_demo():
    """
    This program demonstrates the usage of Python built-in functions.
    
    The program performs the following actions:
    1. Calls the `input()` function to prompt the user for input.
    2. Converts the user input to an integer using the `int()` function.
    3. Calculates the absolute value of the integer using the `abs()` function.
    4. Prints the results to the console.
    
    Execution:
    - The program prompts the user to enter a value.
    - The input is converted to an integer using the `int()` function.
    - The absolute value of the integer is calculated using the `abs()` function.
    - The program displays the input, converted integer, and absolute value.
    """
    # Prompt the user for input
    user_input = input("Enter a value: ")

    # Convert the input to an integer
    integer_value = int(user_input)

    # Calculate the absolute value of the integer
    absolute_value = abs(integer_value)

    # Print the results
    print("Input: ", user_input)
    print("Converted to integer: ", integer_value)
    print("Absolute value: ", absolute_value)


# Run the program
built_in_functions_demo()




# Exercise 2: Currencies
# 
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


# 1. Using the code above, implement the relevant methods and dunder methods which will output the results below.
#    Hint : When adding 2 currencies which don’t share the same label you should raise an error.

        # >>> c1 = Currency('dollar', 5)
        # >>> c2 = Currency('dollar', 10)
        # >>> c3 = Currency('shekel', 1)
        # >>> c4 = Currency('shekel', 10)

        # >>> str(c1)
        # '5 dollars'

        # >>> int(c1)
        # 5

        # >>> repr(c1)
        # '5 dollars'

        # >>> c1 + 5
        # 10

        # >>> c1 + c2
        # 15

        # >>> c1 
        # 5 dollars

        # >>> c1 += 5
        # >>> c1
        # 10 dollars

        # >>> c1 += c2
        # >>> c1
        # 20 dollars

        # >>> c1 + c3
        # TypeError: Cannot add between Currency type <dollar> and <shekel>


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError(f"Unsupported operand type: {type(other)}")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            raise TypeError(f"Unsupported operand type: {type(other)}")
        return self