import math
import turtle


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Please specify either the radius or the diameter.")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius**2

    def __str__(self):
        return f"Circle(radius={self.radius})"

    def __repr__(self):
        return str(self)

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            raise TypeError(
                "Unsupported operand type. Can only add two Circle instances."
            )

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        else:
            raise TypeError(
                "Unsupported operand type. Can only compare two Circle instances."
            )

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            raise TypeError(
                "Unsupported operand type. Can only compare two Circle instances."
            )

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError(
                "Unsupported operand type. Can only compare two Circle instances."
            )

    def draw(self):
        turtle.up()
        turtle.goto(0, -self.radius)
        turtle.down()
        turtle.circle(self.radius)


# Create circles
circle1 = Circle(radius=40)
circle2 = Circle(diameter=100)
circle3 = Circle(radius=30)

# Draw circles
turtle.speed(1)
circle1.draw()
circle2.draw()
circle3.draw()
turtle.done()
