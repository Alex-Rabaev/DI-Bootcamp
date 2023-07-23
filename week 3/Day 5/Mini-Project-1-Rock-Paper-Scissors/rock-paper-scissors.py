from game import Game


def get_user_menu_choice():
    while True:
        try:
            choice = input(
                "Enter your choice:\n(P)lay a new game\n(S)how scores\n(Q)uit\n"
            ).lower()
            if choice in ["p", "s", "q"]:
                return choice
            else:
                raise
        except:
            print("Wrong input. Try again.")


def print_results(results):
    print("SCORES:")
    for k, v in results.items():
        print(f"{k}: {v}")
    return


def main():
    game = Game()

    while True:
        choice = get_user_menu_choice()
        if choice == "q":
            print_results(game.results)
            break
        elif choice == "s":
            print_results(game.results)
        else:
            game.play()


main()
