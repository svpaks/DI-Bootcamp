#Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input("Please, write a number."))
length = int(input("Please, write a length."))
lst_number = []
for number1 in range(0, length) :
    lst_number.append(number * (number1 + 1))
print(lst_number)


#Challenge 2
#Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

word = input("Enter a word: ") #apple
new_word = ""
prev_letter = ""
for letter in word :
    if letter != prev_letter:
        new_word = new_word + letter
        prev_letter = letter
print("New word with duplicate consecutive letters removed: ", new_word)



