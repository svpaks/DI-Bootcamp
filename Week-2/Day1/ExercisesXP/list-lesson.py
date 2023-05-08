# colors = ["blue", "red", "pink", 23, True, [1,2,3]]
colors = ["blue", "red", "pink"]
my_favorite_color = colors[1]
print(my_favorite_color)

# ----------------------------------------------------------

colors = ["blue", "red", "pink", ["a", "b", "c"]]
letter_c = colors[3][2]
print(letter_c)

# colors [3] # ["a", "b", "c"]

# ----------------------------------------------------------

colors = ["blue", "red", "pink"]
colors.append("yellow") # add the color at the end of the list
print(colors)

colors.insert(1, "green")
print(colors)

# ----------------------------------------------------------

colors = ["blue", "red", "pink", ["a", "b", "c"]]
# # colors[3].append("d")
# colors[-1].append("d")
# print(colors)
colors[3].insert(0, "Z") # insert - add the certain position
print(colors)

# ----------------------------------------------------------


# insert 
# add the certain position
colors = ["blue", "red", "pink"]
colors.insert(2, "white") # colors = ["blue", "red", "white" "pink"]
print(colors)


# ----------------------------------------------------------


colors = ["blue", "red", "pink"]

sentence = "Hello World How are you"

# ["Hello", "World", "Hoe", "are", "you"]
# 1st_word = sentence.split("-")
# print(1st_word)

# "HELLO".lower()
# len("Hello")

["Hello", "World", "Hoe", "are", "you"]
lst_word = sentence.split()
print(lst_word)
# 
# ----------------------------------------------------------

colors = ["blue", "red", "pink"]
user_answer = input("give me an position and a color")
"1 black"

colors = ["blue", "red", "pink"]
user_answer = "1 green" # end result ["blue", "green" "red", "pink"]

# end result 
# ["blue", "green" "red", "pink"]
colors = ["blue", "red", "pink"]
user_answer = "1 green" 
colors.insert(1, "green")

# ----------------------------------------------------------


# colors = ["blue", "red", "pink"]
# user_answer = input("give me a position and a color, separeted by a comma")
# lst_answers = user_answer.split(",") # ["2", "green"]
# colors.insert(x, y)

# ----------------------------------------------------------


colors = ["blue", "red", "pink"]
colors.pop() #deleting the last element
print(colors)

colors.pop(1) #deleting the element at position 1
print(colors)

colors.remove("red")
print(colors)

# ----------------------------------------------------------

colors = ["blue", "red", "pink"]
favorite_colors = colors


print(favorite_colors)
favorite_colors.pop() #delete the last element in the list
print("the favorite color list :", favorite_colors) #["blue", "red"]
print("the colors list :", colors) #["blue", "red"]


# ----------------------------------------------------------

colors = ["blue", "red", "pink"]
# i want ["blue", "red"]
new_list = colors[0:2] #the last index is not included
print(new_list)

new_list = colors[0:1] #["blue"]
print(new_list)

new_list = colors[1:1] #["red", "pink"]
print(new_list)


# ----------------------------------------------------------


colors = ["blue", "red", "pink", "yellow"]
new_list = colors[2:] # from position 2 to the "pink"
print(new_list)


new_list = colors[2:-1] # ["pink", "green"]
print(new_list)

new_list = colors[:] # everything - all colors
print(new_list)


colors = ["blue", "red", "pink", "green", "yellow"]
new_list = colors[:] # ["blue", "red", "pink", "green", "yellow"]
new_list[0] = "white"

print("the new list :", new_list)
print("the colors list :", colors)

colors = ["blue", "red", "pink", "green", "yellow"]
new_list = colors[::2] #SLICING
# we start at the beginning
# we end at the end of the list
# we jump 2 steps at a time
print(new_list) # ["blue", "pink", "yellow"]

"hello"[:3] # "hel"

# ----------------------------------------------------------

# EXERCISE 1 PLATFORM 

list1 = [5, 10, 15, 20, 25, 50, 20]
list1[3] = "200"
print(list1)

# OR
list1 = ["a", "b", "c", "d", "e", "f", "g"]
list1[3] = "hello"
# ["a", "b", "c", "hello", "e", "f", "g"]
index_of_d = list1.index("d") #3


my_list = [5, 10, 15, 20, 25, 50, 20]
my_list[3] = 200
#HARDCODED
find_number = my_list.index(20) #3
#OR
index_of_20 = my_list.index(20) #3
# first position of the number 20 in the list


#SECOND WAY _ BETTER
my_list = [5, 10, 15, 20, 25, 50, 20]
position = my_list.index(20) #3
# first position of the number 20 in the list
my_list[position] = 200
# --> modifies the element at the position 3 to be 200


#the same as my_list[3] = 200
print(my_list)
