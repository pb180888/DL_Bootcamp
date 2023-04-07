// Using Javascript:
// 1. Add a “light blue” background color and some padding to the <div>.
const div = document.querySelector("div");
console.log(div);
const backgroundColorOfDiv = (div.style.backgroundColor = "lightblue");
const paddingOfDiv = (div.style.padding = "1%");
// 2. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
const DisplayFirstLi = (document.querySelector(
  "ul > li:first-child"
).style.display = "none");

// 3. Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)

const borderOfLiWithPete = (document.querySelector(
  "ul > li:nth-child(2)"
).style.border = "2px solid black");

// 4. Change the font size of the whole body.

const fontSizeofWholeBody = (document.querySelector("body").style.fontSize =
  "2em");

// 5. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (backgroundColorOfDiv) {
  alert(
    `Hello ${document.querySelector("ul > li:first-child").innerHTML} and ${
      document.querySelector("ul > li:last-child").innerHTML
    }`
  );
}
