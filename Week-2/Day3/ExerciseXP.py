# Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method

# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
d1 = zip(keys, values)
print(dict(d1))


# Exercise 2 : Cinemax
# Instructions
#   1. A movie theater charges different ticket prices depending on a person’s age.
#      * if a person is under the age of 3, the ticket is free.
#      ** if they are between 3 and 12, the ticket is $10.
#      *** if they are over the age of 12, the ticket is $15.

#   2. Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#   3. How much does each family member have to pay ?

#   4. Print out the family’s total cost for the movies.
#   5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


family = {
    "rick": 43, 
    'beth': 13, 
    'morty': 5, 
    'summer': 8
}

total_price = 0
for key, value in family.items():
    if value < 3 :
        ticket = 0
    elif 3 <= value <= 12 :
        ticket = 10
    else :
        ticket = 15
    total_price = total_price + ticket
    print(f"{key}, you have to pay {ticket} $")
print(f"Total price will be {total_price}")

family = {}
amount_members = int(input("How many family members do you have? "))
for item in range(amount_members) :
    key = input(f"Please, tell me name of family member {item+1}. ")
    value = int(input(f"Please, tell me age of {key}. "))
    family[key] = value
print(family)

total_price = 0
for key, value in family.items():
    if value < 3 :
        ticket = 0
    elif 3 <= value <= 12 :
        ticket = 10
    else :
        ticket = 15
    total_price = total_price + ticket
    print(f"{key}, you have to pay {ticket} $")
print(f"Total price will be {total_price}")


# Exercise 3: Zara
# Instructions
#   1. Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


#   2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#   3. Change the number of stores to 2.
#   4. Print a sentence that explains who Zaras clients are.
#   5. Add a key called country_creation with a value of Spain.
#   6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
#   7. Delete the information about the date of creation.
#   8. Print the last international competitor.
#   9. Print the major clothes colors in the US.
#   10. Print the amount of key value pairs (ie. length of the dictionary).
#   11. Print the keys of the dictionary.
#   12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000

#   13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
#   14. Print the value of the key number_stores. What just happened ?



#2
brand = {
"name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000, 
"major_color": {
    "France": "blue", 
    "Spain": "red", 
    "US": ["pink", "green"]
    }
}
print(brand)

#3 
brand["number_stores"] = 2
print(brand)

#4
clients = ", ".join(brand["type_of_clothes"])
print(f"Zara's clients are {clients}.")

#5
brand["country_creation"] = "Spain"
print(brand)

#6
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print(brand)

#7
brand.pop("creation_date")
print(brand)

#8
print(brand["international_competitors"][-1])

#9
print(brand["major_color"]["US"])

#10
print(len(brand))

#11
print(brand.keys())

#12
more_on_zara={
    "creation_date": 1975, 
    "number_stores": 10000
}

#13
brand.update(more_on_zara)
print(brand)

#14
print(brand["number_stores"])
# The value of the key "number_stores" is now 10000 because we updated it in step 13.


# Exercise 4 : Disney Characters
# Use this list :
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# 1.
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# 2.
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# 3.
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# 1. Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# 2. Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# 3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# 4. Only recreate the 1st result for:
#   - The characters, which names contain the letter “i”.
#   - The characters, which names start with the letter “m” or “p”.

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

#1
disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A)

#2
disney_users_B = {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)

#3
disney_users_C = {}
sorted_users = sorted(users)
for i in range(len(sorted_users)):
    disney_users_C[sorted_users[i]] = i
print(disney_users_C)

#4
disney_users_A_i = {}
for user in users:
    if "i" in user:
        disney_users_A_i[user] = users.index(user)
print(disney_users_A_i)


disney_users_A_mp = {}
for user in users:
    if user.startswith("M") or user.startswith("P"):
        disney_users_A_mp[user] = users.index(user)
print(disney_users_A_mp)