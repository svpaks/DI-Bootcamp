# Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

# import module_name 
# OR 
# from module_name import function_name 
# OR 
# from module_name import function_name as fn 
# OR
# import module_name as mn

from func import add_numbers

add_numbers(3, 5)



# 🌟 Exercise 2: Random Module
# Instructions
# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

import random

def roll_and_check(user_number):
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
        print("Congratulations! You rolled the same number.")
    else:
        print("Good luck next time!")

user_number = int(input("Enter a number between 1 and 100: "))
roll_and_check(user_number)



# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import string
import random

def generate_random_string():
    letters = string.ascii_letters  # Get all uppercase and lowercase letters
    random_string = ''.join(random.choice(letters) for _ in range(5))
    return random_string

# Example usage
random_string = generate_random_string()
print(random_string)




# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.


from datetime import datetime

def display_current_date():
    current_date = datetime.now().date()
    print(f"The current date is: {current_date}")

display_current_date()



# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


from datetime import datetime

def calculate_time_left():
    current_datetime = datetime.now()
    target_datetime = datetime(current_datetime.year + 1, 1, 1)  # January 1st of the next year
    
    time_left = target_datetime - current_datetime
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    print(f"The 1st of January is in {days} days, {hours:02d}:{minutes:02d}:{seconds:02d} hours.")

# Example usage
calculate_time_left()




# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.


from datetime import datetime

def calculate_lived_minutes(birthdate):
    current_datetime = datetime.now()
    birth_datetime = datetime.strptime(birthdate, "%Y-%m-%d") 
    
    lived_duration = current_datetime - birth_datetime
    lived_minutes = int(lived_duration.total_seconds() / 60)
    
    print(f"You have lived approximately {lived_minutes} minutes.")


birthdate = input("Enter your birthdate (YYYY-MM-DD): ")
calculate_lived_minutes(birthdate)




# Exercise 7 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.


from datetime import datetime

def display_date_and_time_left():
    # Get the current date and time
    current_datetime = datetime.now()
    
    # Define the upcoming holiday and its date
    upcoming_holiday = "New Year's Day"
    upcoming_holiday_date = datetime(current_datetime.year + 1, 1, 1)  # January 1st of the next year
    
    # Calculate the time left until the upcoming holiday
    time_left = upcoming_holiday_date - current_datetime
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    # Display today's date
    print(f"Today's date: {current_datetime.strftime('%Y-%m-%d')}")
    
    # Display the time left until the upcoming holiday and the holiday name
    print(f"The next holiday is {upcoming_holiday} and it is in {days} days, {hours:02d}:{minutes:02d}:{seconds:02d} hours.")

# Example usage
display_date_and_time_left()



# Exercise 8 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.


def calculate_age(age_in_seconds):
    # Define orbital periods in seconds
    earth_orbital_period = 31557600
    mercury_orbital_period = earth_orbital_period * 0.2408467
    venus_orbital_period = earth_orbital_period * 0.61519726
    mars_orbital_period = earth_orbital_period * 1.8808158
    jupiter_orbital_period = earth_orbital_period * 11.862615
    saturn_orbital_period = earth_orbital_period * 29.447498
    uranus_orbital_period = earth_orbital_period * 84.016846
    neptune_orbital_period = earth_orbital_period * 164.79132
    
    # Calculate age on Earth
    age_earth = age_in_seconds / earth_orbital_period
    
    # Calculate ages on other planets
    age_mercury = age_in_seconds / mercury_orbital_period
    age_venus = age_in_seconds / venus_orbital_period
    age_mars = age_in_seconds / mars_orbital_period
    age_jupiter = age_in_seconds / jupiter_orbital_period
    age_saturn = age_in_seconds / saturn_orbital_period
    age_uranus = age_in_seconds / uranus_orbital_period
    age_neptune = age_in_seconds / neptune_orbital_period
    
    # Return the ages on different planets as a dictionary
    return {
        "Earth": age_earth,
        "Mercury": age_mercury,
        "Venus": age_venus,
        "Mars": age_mars,
        "Jupiter": age_jupiter,
        "Saturn": age_saturn,
        "Uranus": age_uranus,
        "Neptune": age_neptune
    }

age_in_seconds = 1_000_000_000
ages = calculate_age(age_in_seconds)
print(f"The person is {ages['Earth']:.2f} Earth-years old.")
print(f"The person is {ages['Mercury']:.2f} Mercury-years old.")
print(f"The person is {ages['Venus']:.2f} Venus-years old.")
print(f"The person is {ages['Mars']:.2f} Mars-years old.")
print(f"The person is {ages['Jupiter']:.2f} Jupiter-years old.")
print(f"The person is {ages['Saturn']:.2f} Saturn-years old.")
print(f"The person is {ages['Uranus']:.2f} Uranus-years old.")
print(f"The person is {ages['Neptune']:.2f} Neptune-years old.")



# Exercise 9 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.


# I'll do this exercise a bit later