# # Exercise 1 : Family
# # Instructions
# # Create a class called Family and implement the following attributes:

# # members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# # last_name : (string)
# # Initial members data:

# # [
# #     {'name':'Michael','age':35,'gender':'Male','is_child':False},
# #     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# # ]

# # 2. Implement the following methods:

# # born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# # is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# # family_presentation: a method that prints the family’s last name and all the members’ first name.


class Family :
    def __init__(self, members, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} is born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
            return False
    
    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(f"Member: {member['name']}")


members = [{'name':'Michael','age': 35, 'gender':'Male', 'is_child': False},
           {'name':'Sarah','age': 32,'gender':'Female','is_child':False}]




# Exercise 2 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.

# Initial members data:
# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
# ]

class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
# Prints all the members’ incredible name and power.

    def use_power(self, name):
        for member in self.members:
            if members['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old.")


# Add a method called incredible_presentation which :
# Call the incredible_presentation method.

    def incredible_presentation(self):
        super().family_presentation()
        for member in self.members:
            print(f"{member['incredible_name']}'s power: {member['power']}")



initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

# Create an instance of the TheIncredibles class
incredibles = TheIncredibles("Incredible")

# Add initial members to the family
for member in initial_members:
    incredibles.members.append(member)


# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.

incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Baby Jack')

incredibles.incredible_presentation()



# Use power for a member who is over 18
try:
    incredibles.use_power('Michael')
except Exception as no_power:
    print(no_power)

# Use power for a member who is under 18
try:
    incredibles.use_power('Sarah')
except Exception as no_power:
    print(no_power)