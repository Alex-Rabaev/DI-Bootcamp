import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


class Desk:

    def __init__(self):
        self.desk = []
        for suit in ('Hearts', 'Diamonds', 'Clubs', 'Spades'):
            for value in ('A','2','3','4','5','6','7','8','9','10','J','Q','K'):
                self.desk.append(Card(suit, value))

    def shuffle_cards(self):
        random.shuffle(self.desk)

    def deal(self):
        card = self.desk.pop()
        print(f'Your card is {card.value} of {card.suit}')

def main():
    desk = Desk()
    desk.shuffle_cards()
    for _ in range(52):
        desk.deal()

main()