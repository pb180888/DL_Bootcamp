const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const keys = Object.values(robots);

console.log(keys);
const area = document.querySelector(".robots");
area.style.paddingTop = "150px";
area.style.display = "flex";
area.style.flexWrap = "wrap";
area.style.justifyContent = "center";
for (let key of keys) {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.backgroundColor = "rgb(79,193,197)";
  div.style.backgroundImage = "url(./images/card-pattern.png)";
  div.style.backgroundSize = "60%";
  div.style.overflow = "hidden";
  div.style.margin = "5px";
  div.style.width = "250px";
  div.style.height = "340px";
  div.style.borderRadius = "25px/25px";
  const divImage = document.createElement("div");
  divImage.style.width = "220px";
  divImage.style.height = "220px";
  divImage.style.backgroundColor = "rgb(48,57,82)";
  divImage.style.backgroundImage = `url("${key.image}")`;
  divImage.style.backgroundSize = "cover";
  divImage.style.backgroundPosition = "center";
  divImage.style.border = "2px solid";
  divImage.style.borderRadius = "100%/100%";
  const divName = document.createElement("div");
  divName.textContent = `${key.username}`;
  divName.style.fontFamily = "sans-serif";
  divName.style.marginTop = "10px";
  divName.style.fontSize = "1.5em";
  const divEmail = document.createElement("div");
  divEmail.textContent = `${key.email}`;
  div.appendChild(divImage);
  div.appendChild(divName);
  div.appendChild(divEmail);
  area.appendChild(div);
}
