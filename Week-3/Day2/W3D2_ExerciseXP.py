# # Exercise 1 : Pets
# # Instructions
# # Using this code:

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass

# # Create another cat breed named Siamese which inherits from the Cat class.
# # Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

bengal_cat = Bengal("Bengal Cat", 3)
chartreux_cat = Chartreux("Chartreux Cat", 4)
siamese_cat = Siamese("Siamese Cat", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# # Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

sarah_pets = Pets(all_cats)

# # Take all the cats for a walk, use the walk method.
sarah_pets.walk()






# # Exercise 2 : Dogs
# # Instructions
# # Create a class called Dog with the following attributes name, age, weight.
# # Implement the following methods in the Dog class:
# # bark: returns a string which states: “<dog_name> is barking”.
# # run_speed: returns the dogs running speed (weight/age*10).
# # fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# # Create 3 dogs and run them through your class.

class Dog :

    def __init__(self, name_dog, age_dog, weight_dog):
        self.name = name_dog
        self.age = age_dog
        self.weight = weight_dog

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / (self.age * 10)
    
    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_dog_score = other_dog.run_speed() * other_dog.weight

        if self_score > other_dog_score:
            return f"{self.name} won the fight!"
        elif self_score < other_dog_score:
            return f"{other_dog.name} won the fight!"

self_dog = Dog("Rex", 5, 35)
other_dog1 = Dog("Spike", 4, 45)
other_dog2 = Dog("Lola", 3, 50)

print(self_dog.bark())
print(other_dog1.bark())
print(other_dog2.bark())

print(f"Rex running speed is {self_dog.run_speed}")
print(f"Spike's running speed is {other_dog1.run_speed}")
print(f"Lola's running speed is {other_dog1.run_speed}")

print(self_dog.fight(other_dog1))
print(other_dog1.fight(other_dog2))
print(other_dog2.fight(self_dog))




# Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

class Dog :

    def __init__(self, name_dog, age_dog, weight_dog):
        self.name = name_dog
        self.age = age_dog
        self.weight = weight_dog


