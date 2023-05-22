from game import Game

def get_user_menu_choice():
    user_choice = input('\'1\': Play a new game\n \'2\': Show scores\n \'3\' Quit: ')
    return user_choice #here we had the problem. As we didn`t return, we were getting None in main() when we called this function`

def print_results(results:dict):
    return print(f'''Thank you for playing. Here are the final results: \n 
    You won: {results['Win']} times
    You lost {results['Loss']} times
    You drew {results['Draw']} times\n''')

def main():
    final_results = {
        "Win": 0,
        "Loss": 0,
        "Draw": 0
    }
    user_choice = get_user_menu_choice()
    while user_choice != '3':        
        if user_choice == '1':
            new_game = Game()
            final_results[new_game.play()] += 1
            user_choice = get_user_menu_choice()
        else:
            print_results(final_results)
            user_choice = get_user_menu_choice()
        
main()