// Part I : function with no parameters

// 1. Create a function called infoAboutMe() that takes no parameter.
// 2.The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// 3. Call the function.

function infoAboutMe() {
  console.log(
    "I'm Pavel Bogdanov. Age is 34. I like programming and aircraft."
  );
}
infoAboutMe();

// Part II : function with three parameters

// 1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// 2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// 3. Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `My name is ${personName}, my age is ${personAge} and my favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
