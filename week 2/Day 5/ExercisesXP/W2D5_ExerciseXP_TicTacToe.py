# Mini-Project - Tic Tac Toe

# Create a TicTacToe game in python, where two users can play together.

#  
# 
# 1. The game is played on a grid that’s 3 squares by 3 squares.
# 2. Players take turns putting their marks (O or X) in empty squares.
# 3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# 4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# Hint
# To do this project, you basically need to create four functions:

#   - display_board() – To display the Tic Tac Toe board (GUI).
#   - player_input(player) – To get the position from the player.
#   - check_win() – To check whether there is a winner or not.
#   - play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose 
#       a completely different appoach if you want.

# Tips : Consider The Following:
# - What functionality will need to accur every turn to make this program work?
# - After contemplating the question above, think about splitting your code into smaller pieces (functions).
# - Remember to follow the single responsibility principle! each function should do one thing and do it well!




def display_board(board):

    print("*"*13)
    print('* ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] + " *")
    print('*---+---+---*')
    print('* ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] + " *")
    print('*---+---+---*')
    print('* ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + " *")
    print("*"*13)


def player_input(player):
    row = int(input(f"{player}, choose a row (1-3): ")) - 1
    col = int(input(f"{player}, choose a column (1-3): ")) - 1
    return row, col

def check_win(board):
    # rows
    for row in range(3):
        if board[row][0] == board[row][1] == board[row][2] and board[row][0] != " ":
            return True
    # columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
            return True
    # diagonals
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return True

    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
        return True

    return False

def play():

    board = [[" ", " ", " "],
             [" ", " ", " "],
             [" ", " ", " "]]

    players = ["Player 1 (X)", "Player 2 (O)"]
    turn = 0
    while True:
        display_board(board)

        player = players[turn % 2]
        row, col = player_input(player)

        if board[row][col] == " ":
            if turn % 2 == 0 :
                board[row][col] = "X" 
            else :
                board[row][col] = "O"
        else:
            print("That position is already taken. Try again.")
            continue

        if check_win(board):
            display_board(board)
            print(f"{player} wins!")
            break

        # Check for a tie
        if all(" " not in row for row in board):
            display_board(board)
            print("Tie game!")
            break

        # Next turn
        turn += 1     


play()