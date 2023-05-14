# --- DAILY CHALLENGE: SOLVE THE MATRIX --- #

## Instructions:
## – To decrypt the matrix, Neo reads each column from top to bottom, 
##   starting from the leftmost column, selecting only the alpha characters and connecting them. 
## – Then he replaces every group of symbols between two alpha characters by a space.

# IMPORT

import string

# VARIABLES

matrix = [
    [ 7,  'i' , 3 ],
    ['T', 's', 'i'],
    ['h', '%', 'x'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!'],
]

transposed_matrix = list(map(list, zip(*matrix)))
listed_matrix = sum(transposed_matrix, [])

alphabet = list(string.ascii_lowercase + string.ascii_uppercase ) # ['a', 'b', 'c', 'd', ... 'A', 'B', 'C', 'D' ...]
numbers = list(range(10))

# LOGIC

list_without_numbers = list(filter(lambda symbol : True if symbol not in numbers else False, listed_matrix))
list_without_symbols = list(map(lambda symbol : ' ' if symbol not in alphabet else symbol, list_without_numbers))
message =  ' '.join(''.join(list_without_symbols).split())

# OUTPUT

print(message)
