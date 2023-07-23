from anagram_checker import AnagramChecker

while True:
    choice = input("'a' to get anagrams, 'e' to exit: ")
    if choice == 'e': break
    if choice == 'a':
        word = input("input your word: ").strip()
        if len(word.split()) > 1:
            print("Only one word allowed")
        elif not word.isalpha():
            print("Only alphabetic characters are allowed")
        else:
            anagram_chk = AnagramChecker()

            print(f"YOUR WORD: '{word.upper()}'")

            if anagram_chk.is_valid_word(word):
                print("this is a valid English word.")
            else:
                print("this is NOT a valid English word.")

            anagrams = anagram_chk.get_anagrams(word)

            if anagrams:
                print("Anagrams for your word: ", end='')
                print(*[anagram.lower() for anagram in anagrams], sep=', ', end ='.\n')

            else:
                print("There are no anagrams for your word.")
    else:
        print('wrong input, try again')
