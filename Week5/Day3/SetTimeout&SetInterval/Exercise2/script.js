// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// etc ... until 0

// If you need help for this exercise, look at the 1st video of this tutorial

function hello() {
  const div = document.createElement("div");
  //   span for first part of sentence
  const span1 = document.createElement("span");
  const textForSpan1 = document.createTextNode("The sales end in");
  span1.appendChild(textForSpan1);

  //   span for 10 min
  const span2 = document.createElement("span");
  const textForSpan2 = document.createTextNode("10");
  span2.classList.add("min");
  span2.appendChild(textForSpan2);

  //   span for third part of sentence
  const span3 = document.createElement("span");
  const textForSpan3 = document.createTextNode("min!");
  span3.appendChild(textForSpan3);

  //   span for space
  const span4 = document.createElement("span");
  const textForSapn4 = document.createTextNode("    ");
  span4.appendChild(textForSapn4);
  //   const forDiv = document.createTextNode(`The sales end in 10min!`);
  div.appendChild(span1);
  div.appendChild(span4);
  div.appendChild(span2);
  div.appendChild(span3);

  div.style.fontSize = "5em";
  div.style.backgroundColor = "lightblue";
  div.style.display = "inline-flex";
  document.querySelector("body").style.display = "flex";
  document.querySelector("body").style.flexDirection = "row";
  document.querySelector("body").style.justifyContent = "center";
  document.querySelector("body").style.marginTop = "20%";
  document.body.appendChild(div);
  let time = document.querySelector(".min");
  console.log(time);

  var countItDown = function () {
    var currentTime = parseFloat(time.textContent);
    if (currentTime > 0) {
      time.textContent = currentTime - 1;
    } else {
      clearInterval(timer);
    }
  };
  var timer = setInterval(countItDown, 1000);
}

setTimeout(hello, 1000);
