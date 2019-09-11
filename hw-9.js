/*instead of the advanced words guess game, submit this

1. 

a Shape constructor has a 

	name property

	sides property

		number
2.

a Rectangle is a shape
	
	height

	width

on the Rectangle's prototype 

	an area function

	a perimeter function

make sure to connect the Rectangle and the Shape

3. 

a Square is a Rectangle

    but if the height and width are different then set the width to be the height */

function Shape(name, side) {
    this.name = name;
    this.side = side;

}

function Rectangle(height, width, name, side) {
    this.height = height;
    this.width = width

    Shape.call(this, name, side);
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function () {
    console.log(this.height * this.width);
}
Rectangle.prototype.perimeter = function () {
    console.log(this.height * 2 + this.width * 2);
}
function Square(height, name, side) {
    Rectangle.call(this, height, height, name, side);
}

Square.prototype = Object.create(Rectangle.prototype)


var rec = new Rectangle(4,5,6,7);
console.log(rec.area())




