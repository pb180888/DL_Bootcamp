// 1. Evaluate these (ie True or False)
// [2] === [2] false
// {} === {} false;
console.log([2] === [2], {} === {});
// 2. What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log("object2", object2.number); //number: 4
console.log("object3", object3.number); //number: 4
console.log("object4", object4.number); //number: 5
// 3
// 1. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
const tiger = new Animal("tiger", "cat", "orange-white");
console.log(tiger);
// 2. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  constructor(name, color) {
    super(name, "Mamal", color);
  }
  sound(sound) {
    return `The ${this.name} ${this.type} is ${this.color} color makes ${sound} sound`;
  }
}
const monkey = new Mamal("ben", "brown");
console.log(monkey);
console.log(monkey.sound("RRRR"));

// 3. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mamal("Lily", "brown and white");
console.log(farmerCow);
console.log(farmerCow.sound("Moooo"));
