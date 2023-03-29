// 1. Ask the user for their grade.

let grade = Number(prompt("Hello! Type me your grade"));

// 2. If the grade is bigger than 90, console.log “A”
if (grade > 90) {
  console.log("A");
}

// 3. If the grade is between 80 and 90 (included), console.log “B”
else if (grade >= 80 && grade <= 90) {
  console.log("B");
}
// 4. If the grade is between 70(included) and 80 (included), console.log “C”
else if (grade >= 70 && grade <= 80) {
  console.log("C");
}

// 5. If the grade is lower than 70, console.log “D”
else {
  console.log("D");
}
