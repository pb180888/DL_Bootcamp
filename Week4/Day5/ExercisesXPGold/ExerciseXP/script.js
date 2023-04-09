// to color all diagonal table cells in red.
let table = document.body.firstElementChild;
const tr = table.querySelectorAll("tr");
const td = table.querySelectorAll("tr > td");

let itemAnother = td.length - 1;
let item = 0;
for (let i = td.length; i > 1; i--) {
  for (let y = 0; y < td.length; i++) {
    td[item].style.backgroundColor = "red";
    console.log(td[item]);
    item = item + 6;
    itemAnother = itemAnother - 4;
    td[itemAnother].style.backgroundColor = "red";
    console.log(td[itemAnother]);
  }
}
