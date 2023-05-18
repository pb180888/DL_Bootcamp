const submitBtn = document.querySelector("#submit");

let dataObj = {};
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const div = document.querySelector(".placeForFill");
  dataObj.name = document.querySelector("#name").value;
  dataObj.last_name = document.querySelector("#lname").value;
  console.log(dataObj);
  div.innerHTML = dataObj.name;
});
