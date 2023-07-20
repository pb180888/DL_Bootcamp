const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let arrPocs = [];
async function pokemons() {
  try {
    htmlPic = document.createElement("img");
    htmlPic1 = document.createElement("img");
    htmlPic.src = "./pics/loading.gif";
    htmlPic1.src = "./pics/loading.gif";
    document.querySelector(".img").appendChild(htmlPic);
    document.querySelector(".info").appendChild(htmlPic1);
    i = Math.floor(Math.random() * 807 + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const data = await response.json();
    console.log(data);
    const pic = data.sprites.back_default;
    htmlPic.style.width = "150px";
    htmlPic.src = pic;
    const name = data.name;
    const height = data.height;
    const weight = data.weight;
    const type = data.types[0].type.name;
    console.log(name, height, weight, type);
    document.querySelector(".info").removeChild(htmlPic1);
    const nameHTML = (document.querySelector(".name").textContent = name);
    const heightHTML = (document.querySelector(
      ".height"
    ).textContent = `Height: ${height}cm`);
    const weightHTML = (document.querySelector(
      ".weight"
    ).textContent = `Weight: ${weight}gr`);
    const typeHTML = (document.querySelector(
      ".type"
    ).textContent = `Type: ${type}`);
    const poc = {};
    poc.Pic = data.sprites.back_default;
    poc.Name = name;
    poc.Height = height;
    poc.Weight = weight;
    poc.Type = type;
    arrPocs.push(poc);
    console.log(arrPocs);
  } catch (err) {
    console.log(err);
  }
}

document.querySelector(".ranBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".img").innerHTML = "";
  document.querySelector(".name").textContent = "";
  document.querySelector(".height").textContent = "";
  document.querySelector(".weight").textContent = "";
  document.querySelector(".type").textContent = "";
  pokemons();
});

const leftBtn = document.querySelector(".left");
leftBtn.addEventListener("click", function () {
  const imgHTML = document.querySelector(".img > img");
  const srcImg = imgHTML.src;
  console.log(srcImg);
  for (let i = 0; i < arrPocs.length; i++) {
    if (arrPocs[i].Pic === srcImg) {
      document.querySelector(".img > img").src = arrPocs[i - 1].Pic;
      document.querySelector(".name").textContent = arrPocs[i - 1].Name;
      document.querySelector(".height").textContent = `Height: ${
        arrPocs[i - 1].Height
      }cm`;
      document.querySelector(".weight").textContent = `Weight: ${
        arrPocs[i - 1].Weight
      }gr`;
      document.querySelector(".type").textContent = `Type: ${
        arrPocs[i - 1].Type
      }`;
      console.log(arrPocs[i - 1]);
    }
  }
});

const rightBtn = document.querySelector(".right");
rightBtn.addEventListener("click", function () {
  const imgHTML = document.querySelector(".img > img");
  const srcImg = imgHTML.src;
  console.log(srcImg);
  for (let i = 0; i < arrPocs.length; i++) {
    if (arrPocs[i].Pic === srcImg) {
      document.querySelector(".img > img").src = arrPocs[i + 1].Pic;
      document.querySelector(".name").textContent = arrPocs[i + 1].Name;
      document.querySelector(".height").textContent = `Height: ${
        arrPocs[i + 1].Height
      }cm`;
      document.querySelector(".weight").textContent = `Weight: ${
        arrPocs[i + 1].Weight
      }gr`;
      document.querySelector(".type").textContent = `Type: ${
        arrPocs[i + 1].Type
      }`;
      console.log(arrPocs[i + 1]);
    }
  }
});
