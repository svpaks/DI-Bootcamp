# Exercise 1 : Built-In Functions
# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.


# abs() function 
number = -10
absolute_value = abs(number)
print(f"The absolute value of {number} is: {absolute_value}")

# int() function 
number_str = input("Enter a number: ")
converted_number = int(number_str)
print(f"The integer value of {number_str} is: {converted_number}")

# input() function 
user_input = input("Enter your name: ")
print(f"Hello, {user_input}!")





# Exercise 2: Currencies
# Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# My code starts HERE:

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __add__(self, other):
        if isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                return Currency(self.currency, self.amount + other.amount)
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            raise TypeError("Unsupported operand type for +")

    def __iadd__(self, other):
        if isinstance(other, (int, float)):
            self.amount += other
            return self
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
                return self
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        else:
            raise TypeError("Unsupported operand type for +")


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))  # Output: '5 dollars'
print(int(c1))  # Output: 5
print(repr(c1))  # Output: '5 dollars'

c5 = c1 + 5
print(c5)  # Output: 10 dollars

c6 = c1 + c2
print(c6)  # Output: 15 dollars

print(c1)  # Output: 5 dollars

c1 += 5
print(c1)  # Output: 10 dollars

c1 += c2
print(c1)  # Output: 20 dollars

c7 = c1 + c3  # Raises TypeError











