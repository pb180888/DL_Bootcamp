const form = document.forms[0];
const item = document.getElementById("item");
const quantity = document.getElementById("quantity");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log(item.value, quantity.value);
  body = { item: item.value, quantity: Number(quantity.value) };
  if (Number(quantity.value) < 1) return;
  console.log(body);
  await sendBodyToServer(body);
  resetList();
  populateItems();
});
function resetList() {
  document.getElementById("list").innerHTML = "";
}

const url = "http://localhost:3000/items";
let items;
populateItems();
function displayItems() {
  for (let item of items) {
    console.log(item);
    const li = document.createElement("li");
    li.innerHTML = item.item + ":" + " " + item.quantity;
    document.getElementById("list").appendChild(li);
  }
}

async function populateItems() {
  const res = await fetch(url);
  const jsonRes = await res.json();
  items = jsonRes;
  displayItems();
}
async function sendBodyToServer(body) {
  const url = "http://localhost:3000/items";
  const option = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, option);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
