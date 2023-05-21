import random

class Game:

    def __init__(self):
        self.user_item = self.get_user_item()
        self.computer_item = self.get_computer_item()
        pass

    @staticmethod
    def get_user_item(self) :
        moves = ['r', 'p', 's']
        user_item = input('select an item: (R : rock \n P : paper \n S : scissors\n').lower()
        while user_item not in moves:
            user_item = input('Please, select a valid item \n (R : rock \n P : paper \n S : scissors\n').lower()
            return user_item

        @staticmethod
        def get_computer_item(self):
            moves = ['r', 'p', 's']
            computer_item = random.choice(moves)
            return computer_item
            

        def get_game_result(self):
            if self.user_item == self.computer_item:
                return 'tie'
            elif self.user_item == 'r' and self.computer_item == 's':
                return 'win'
            elif self.user_item == 'p' and self.computer_item == 'r':
                return 'win'
            elif self.user_item == 's' and self.computer_item == 'p':
                return 'win'
            elif self.user_item == 'r' and self.computer_item == 'p':
                return 'win'
            else:
                return 'Loss'
            # if self.user == 'p' and self.comp == 'r' and 
            #     return 'win'
            
            def play(self):
                print(f'You selected {self.user_item}. The computer selected {self.computer_item}. You {self.get_game_result}')

game1 = Game()
# game1.get_user_item()
# game1.get_computer_item()
game1.play()