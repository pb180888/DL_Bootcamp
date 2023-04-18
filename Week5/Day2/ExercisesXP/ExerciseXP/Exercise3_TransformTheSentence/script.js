// 1. Declare a global variable named allBoldItems.

var allBoldItems = [];

// 2. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let bold = document.querySelectorAll("strong");
function getBold_items() {
  for (i = 0; i < bold.length; i++) {
    allBoldItems.push(bold[i].innerHTML);
  }
}
getBold_items();
console.log(allBoldItems);
// 3. Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
  for (i = 0; i < bold.length; i++) {
    bold[i].style.color = "blue";
  }
}
highlight();
// 4. Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal() {
  for (i = 0; i < bold.length; i++) {
    bold[i].style.color = "black";
  }
}
return_normal();
// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

document.querySelector("p").addEventListener("mouseover", highlight);
document.querySelector("p").addEventListener("mouseout", return_normal);
