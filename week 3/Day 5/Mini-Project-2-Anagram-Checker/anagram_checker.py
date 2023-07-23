class AnagramChecker:
    def __init__(self):
        with open('sowpods.txt') as words_file:
            self.words = [word.replace('\n', '') for word in words_file.readlines()]

    def is_valid_word(self, word):
        return word.upper() in self.words

    @staticmethod
    def is_anagram(word1, word2):
        return sorted(list(word1.upper())) == sorted(list(word2.upper()))

    def get_anagrams(self, word):
        anagrams = []
        for voc_word in self.words:
            if len(voc_word) == len(word):                      # not necessary, but makes the code faster, because
                if set(voc_word.upper()) == set(word.upper()):  # it's not needed to call is_anagram for each word
                    if word.upper() != voc_word.upper():
                        if self.is_anagram(word, voc_word):
                            anagrams.append(voc_word)

        return anagrams
