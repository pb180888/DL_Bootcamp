// Create a new HTML file

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.
function hello() {
  const div = document.createElement("div");
  const forDiv = document.createTextNode("The sales end in 10min ! ");
  div.appendChild(forDiv);
  div.style.fontSize = "5em";
  div.style.backgroundColor = "lightblue";
  div.style.display = "inline-flex";
  document.querySelector("body").style.display = "flex";
  document.querySelector("body").style.flexDirection = "row";
  document.querySelector("body").style.justifyContent = "center";
  document.querySelector("body").style.marginTop = "20%";
  document.body.appendChild(div);
}
setTimeout(hello, 3000);
