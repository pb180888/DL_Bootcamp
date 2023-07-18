const data = window.location.search;
let newData = "";
for (let i = 0; i < data.length; i++) {
  if (data[i] === "?" || data[i] === "=" || data[i] === "&") {
    data[i] === "_";
  } else {
    newData = newData + data[i];
  }
}

document.querySelector(".placeForFill").innerHTML = newData;
