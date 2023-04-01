// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// 1. Create two objects, each object should hold a person’s details. Here are the details:
//     FullName
//     Mass
//     Height

// 2. Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

let firstObject = {
  fullName: "Lauren Smith",
  Mass: 50,
  Height: 1.7,
  BMI: function () {
    bmi = this.Mass / (this.Height * this.Height);
    return bmi;
  },
};
console.log(firstObject.BMI());
let secondObject = {
  fullName: "Mark Smith",
  Mass: 90,
  Height: 1.8,
  BMI: function () {
    bmi = this.Mass / (this.Height * this.Height);
    return bmi;
  },
};
console.log(secondObject.BMI());

// 3. Outside of the objects, create a JS function that compares the BMI of both objects.

let comparingTwoBMI = function (firstObject, secondObject) {
  if (firstObject.BMI() > secondObject.BMI()) {
    console.log(
      `${firstObject.fullName}'s BMI - ${firstObject.BMI()} is bigger than ${
        secondObject.fullName
      }'s BMI - ${secondObject.BMI()}`
    );
  } else {
    console.log(
      `${secondObject.fullName}'s BMI - ${secondObject.BMI()} is bigger than ${
        firstObject.fullName
      }"s BMI - ${firstObject.BMI()}`
    );
  }
};

// 4. Display the name of the person who has the largest BMI.

comparingTwoBMI(firstObject, secondObject);
