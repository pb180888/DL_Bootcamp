const form1 = document.querySelectorAll("#first  input");
const ids = ["fname", "lname", "email", "username", "password"];
const divs = ids.map((id) => document.getElementById(id));

document.querySelector("#first").addEventListener("keyup", checkEmpty);
function checkEmpty() {
  let arr = [];
  for (let i = 0; i < form1.length - 1; i++) {
    if (form1[i].value.length < 1 || form1[i].value === "") {
      arr.push(false);
    } else {
      arr.push(true);
    }
  }
  if (arr.includes(false)) {
    document.querySelector("#button").setAttribute("disabled", "");
  } else {
    document.querySelector("#button").removeAttribute("disabled", "");
  }
}
document.querySelector("#first").addEventListener("submit", sendData);

function sendData(e) {
  e.preventDefault();
  const [fname, lname, email, username, password] = divs.map(
    (div) => div.value
  );
  body = { fname, lname, email, username, password };

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("root1").innerHTML = JSON.stringify(data);
      console.log(data);
    })

    .catch(console.error());

  // document.getElementById("root1").innerHTML = JSON.stringify(body);
}
