var table = document.querySelector("#sampleTable");
function insertRow() {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  document.body.appendChild(table);
}
