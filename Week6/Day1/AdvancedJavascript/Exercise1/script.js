// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function userYear(year) {
  year =
    year > 2000
      ? console.log("You are in the 21st century")
      : console.log("You live in the Middle Age");
}
userYear(2001);
