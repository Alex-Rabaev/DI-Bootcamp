# Challenge 1

# 1. Ask a user for a word
# 2. Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#   - Make sure the letters are the keys.
#   - Make sure the letters are strings.
#   - Make sure the indexes are stored in a list and those lists are values.

# Examples:

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


word = input("Enter a word: ")
letters = {}

for index, letter in enumerate(word):
    if letter not in letters:
        letters[letter] = [index]
    else:
        letters[letter].append(index)

print(letters)


# Challenge 2

# 1. Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# 2. Sort the list in alphabetical order.
# 3. Return “Nothing” if you can’t afford anything from the store.


items_purchase = {
  "Water": 1,
  "Bread": 3,
  "TV": 1000,
  "Fertilizer": 20
}
wallet = 50

affordable_items = []

for item, price in items_purchase.items():
    if price <= wallet:
        affordable_items.append(item)

affordable_items.sort()

if len(affordable_items) == 0:
    print("Nothing")
else:
    print(affordable_items)