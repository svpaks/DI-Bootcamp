def my_abs (arg:int) -> int :
    '''abs()'is a build-in functions that returns the absolut value''''

    return print(abs(arg))

my_abs(1234)

print(my_abs.__doc__)



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
        return self.circle_area() + other_circle.circle_area()
        



circleA = Circle.from_diameter(diameter = 4)
circleB = Circle.from_radius(radius = 4)
circleC = Circle(3,6)

print(circleA.radius)
print(circleA.diameter)
print(circleC.radius)

circleA.circle_area()
circleB.circle_area()





