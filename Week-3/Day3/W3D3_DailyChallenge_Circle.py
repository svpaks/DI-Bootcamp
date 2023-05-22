# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the circle and get something nice
# Be able to add two circles together
# Be able to compare two circles to see which is bigger
# Be able to compare two circles and see if there are equal
# Be able to put them in a list and sort them


# CIRCLE

class Circle:
    def __init__(self, radius=0, diameter=0):
        self.radius = float(radius)
        self.diameter = float(diameter)

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius*2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter = diameter, radius = diameter/2)
    
    def circle_area(self):
        return print(3.14 * self.radius **2)
    
    def __add__(self, other_circle):
        # return self.diameter + other_circle.diameter
        return self.get_area + other_circle.diameter
        



circleA = Circle.from_diameter(diameter = 4)
circleB = Circle.from_radius(radius = 4)
circleC = Circle(3,6)
circleA.get_area()
print(circleA.radius)

print("Circle radius :", circleA.radius)
print("Circle diameter :", circleA.diameter)
print("Circle diameter :", circleB.diameter)

print(circleC.radius)

# circleA.circle_area()
# circleB.circle_area()

print("add", circleA + circleB)

