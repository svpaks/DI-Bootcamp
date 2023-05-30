# # Exercise 1: Cats
# # Instructions
# # Using this class

# # class Cat:
# #     def __init__(self, cat_name, cat_age):
# #         self.name = cat_name
# #         self.age = cat_age
# # Instantiate three Cat objects using the code provided above.
# # Outside of the class, create a function that finds the oldest cat and returns the cat.
# # Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

lst_cats = [Cat("Tom", 3), Cat("Spike", 7), Cat("Molly", 4)]

def oldest(cats):
    oldest_cat = cats[0]
    for index in range(1, len(cats)) :
        if cats[index].age > oldest_cat.age :
            oldest_cat = cats[index]
    return oldest_cat
    
print(f"The oldest cat is {oldest(lst_cats).name}, and it is {oldest(lst_cats).age} years old.")




# # Exercise 2 : Dogs
# # Instructions
# # Create a class called Dog.
# # In this class, create an __init__ method that takes two parameters : name and height. 
# # This function instantiates two attributes, which values are the parameters.

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

# # Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.

davids_dog = ["Rex", 50]

# # Create a method called bark that prints the following string “<dog_name> goes woof!”.

def bark(self):
    print(f"{self.name} goes woof!")

# # Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”.
# #   x is the height*2.

def jump(self):
    print(f"{self.name} jumps {self.height * 2} cm high!")

# # Print the details of his dog (ie. name and height) and call the methods bark and jump.

davids_dog = ["Rex", 50]
print(f"David's dog name is {davids_dog.name} and his height is {davids_dog.age} cm")
davids_dog.bark()
davids_dog.jump()

# # Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# # Print the details of her dog (ie. name and height) and call the methods bark and jump.

sarahs_dog = ["Teacup", 20]
print(f"Sarahs dog name is {sarahs_dog.name} and his height is {sarahs_dog.age} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# # Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

print(f"{davids_dog.name if davids_dog.height > sarahs_dog.height else sarahs_dog.name} is bigger")



# # Exercise 3 : Who’s The Song Producer?
# # Instructions
# # Define a class called Song, it will show the lyrics of a song.
# # Its __init__() method should have two arguments: self and lyrics (a list).
# # Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

class Song :
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics :
            print(line)


# # Create an object. Then, call the sing_me_a_song method. The output should be:

# # There’s a lady who's sure
# # all that glitters is gold
# # and she’s buying a stairway to heaven

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# # Exercise 4 : Afternoon At The Zoo
# # 1. Create a class called Zoo.
# # 2. In this class create a method __init__ that takes one parameter: zoo_name.
# #    It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# # 3. Create a method called add_animal that takes one parameter new_animal. 
# #    This method adds the new_animal to the animals list as long as it isn’t already in the list.
# # 4. Create a method called get_animals that prints all the animals of the zoo.
# # 5. Create a method called sell_animal that takes one parameter animal_sold. 
# #    This method removes the animal from the list and of course the animal needs to exist in the list.
# # 6. Create a method called sort_animals that sorts the animals alphabetically and groups them together 
# #    based on their first letter.

# # Example

# # { 
# #     1: "Ape",
# #     2: ["Baboon", "Bear"],
# #     3: ['Cat', 'Cougar'],
# #     4: ['Eel', 'Emu']
# # }

# # 7. Create a method called get_groups that prints the animal/animals inside each group.

# # 8. Create an object called ramat_gan_safari and call all the methods.
# #    Tip: The zookeeper is the one who will use this class.

# # Example
# # Which animal should we add to the zoo --> Giraffe
# # x.add_animal(Giraffe)


class Zoo:
    def __init__(self, zoo_name, zoo_animals):
        self.name = zoo_name
        self.animals = zoo_animals

    def add_animal(self, zoo_new_animals):
        for zoo_new_animal in zoo_new_animals:
            if zoo_new_animal not in self.animals:
                self.animals.append(zoo_new_animal)
            else:
                print(f"{zoo_new_animal} is already in the Zoo")

    def get_animals(self):
        print("Animals in the ", self.name, "zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(animal_sold, " has been sold.")
        else:
            print(animal_sold, " is not in the zoo.")


# (6. Create a method called sort_animals that sorts the animals 
# alphabetically and groups them together based on their first letter.)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        animals_lst = []
        for i, animal in sorted_animals:
            if animal[i][0] == animal[i + 1][0]:
                sorted_animals.append(animals_lst)

ramat_gan_animals = ["Tiger", "Panda", "Cat"]
ramat_gan_safari = Zoo("zoo_name", ramat_gan_animals)
print(ramat_gan_safari.animals)

ramat_gan_safari.add_animal(["Eal", "Baboon"])
print(ramat_gan_safari.animals)

ramat_gan_safari.add_animal(["Tiger", "Panda"])
print(ramat_gan_safari.animals)
