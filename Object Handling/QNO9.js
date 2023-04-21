//Write a JavaScript program to calculate the area and perimeter of a circle.
// Define an object for the circle
const circle = {
    radius: 0,
    calculateArea() {
      return Math.PI * this.radius ** 2;
    },
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  circle.radius = 27;
  const area = circle.calculateArea();
  const perimeter = circle.calculatePerimeter();
  console.log(`The area of the circle is ${area.toFixed(2)}.`);
  console.log(`The perimeter of the circle is ${perimeter.toFixed(2)}.`);
  
