document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(email, message);
  const body = {
    email: email,
    message: message,
  };

  fetch("/formData", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.text())
    .then((res) => displayResponse(res))
    .catch((err) => console.error(err));
});

function displayResponse(res) {
  document.getElementById("messages").innerHTML = res;
}
