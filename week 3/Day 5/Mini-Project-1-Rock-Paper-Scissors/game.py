from random import choice


class Game:
    turn_options = {"r": 0, "p": 1, "s": 2}
    turn_names = {"r": "rock", "p": "paper", "s": "scissors"}

    def __init__(self):
        self.results = {"win": 0, "loss": 0, "draw": 0}

    def get_user_item(self):
        while True:
            ans = input(
                """Your turn! Input:
            (r) for rock
            (p) for paper
            (s) for scissors
             """
            )
            if ans not in self.turn_options:
                print("Wrong input, try again")
            else:
                self.user_item = ans
                break

    def get_computer_item(self):
        self.computer_item = choice(list(self.turn_options))

    def get_game_result(self):
        if self.computer_item == self.user_item:
            return 0
        elif self.turn_options[self.user_item] - self.turn_options[
            self.computer_item
        ] in [1, -2]:
            return 1
        else:
            return -1

    def play(self):
        self.get_user_item()
        self.get_computer_item()
        res = self.get_game_result()
        self.results[["loss", "draw", "win"][res + 1]] += 1
        print(
            f"You selected {self.turn_names[self.user_item]}."
            f" The computer selected {self.turn_names[self.computer_item]}."
            f' You {["lose", "drew", "won"][res + 1]}.'
        )
