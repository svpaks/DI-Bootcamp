# Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


my_fav_numbers = [5, 11, 19, 27, 33, 49]
my_fav_numbers.insert(2, 67)
print(my_fav_numbers)
my_fav_numbers.insert(5, 89)
#OR
my_fav_numbers.append(89) 
print(my_fav_numbers)
my_fav_numbers.remove(89)
#OR
l = len(my_fav_numbers)
my_fav_numbers.pop(l-3)
print(my_fav_numbers)

friend_fav_numbers = [13, 21, 55, 44]
print(friend_fav_numbers)
our_fav_numbers = my_fav_numbers + friend_fav_numbers
print(our_fav_numbers)

# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

my_tuple = (5, 7, 11)
my_tuple = my_tuple + (15,) # it's impossible to add, but it's possible to replace tuple using original Tuple.
print(my_tuple)

# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)
basket.remove("Blueberries")
print(basket)
basket.append("Kiwi")
print(basket)
basket.insert(0, "Apples")
print(basket)
apples_count = basket.count("Apples")
print(apples_count)
basket.clear()
print(basket)

# Exercise 4: Floats
# Instructions
#   1. Recap – What is a float? What is the difference between an integer and a float?
#      - integer is a data type for working with integers, and float is for working with floating point numbers.
#   2. Can you think of another way to generate a sequence of floats?
#      - I don't know.
#   3. Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#      - I don't know.


# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for number in range(1, 21) :
    print(number)

for number in range(1, 21) :
    if number % 2 == 0 :
        print(number)


# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
# DON'T

# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


user_answer = input("Please, write your favorite fruits")
user_answer = input("Please, separate fruits with a single space")
lst_answers = user_answer.split()
print(lst_answers)
user_answer2 = input("Please, write a name of any fruit")
if user_answer2 in user_answer:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy!")


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# DON'T


topping_user = input("give me a pizza topping") #"tomato"
# topping_user = tomato
all_toppings = []
total = 10

while topping_user != "quit" :
    print(f"{topping_user} will be added to the pizza")
    all_toppings.append(topping_user)
    topping_user = input("give me a pizza topping")

str_toppings = " - ".join(all_toppings) #create a string all elements ...
complete_total = total + len(all_toppings) * 2.5
sentence = f"Here are your toppings {str_toppings} it will cost you {total}"
print(sentence)


print(f"") 


all_toppings = ["tomato", "cheese", "pineapple"]
"tomato - cheese - pineapple"


words = ['PYTHON', 'JOHN', 'HAM', 'DOE']

if "PYTHON" in words :
    print("I love python")





# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


user_answer = input("Please state your age and age of your family")
lst_answers = user_answer.split()
print(lst_answers)
for age in lst_answers :
    age = int(age)



# Exercise 10 : Sandwich Orders
# Instructions
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.





# Exercise 11 : Sandwich Orders#2
# Instructions
# Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
# Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
# Make sure no pastrami sandwiches end up in finished_sandwiches.


