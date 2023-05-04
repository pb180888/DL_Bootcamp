// John has just signed in to your website and you want to welcome him.

// 1. Create a Bootstrap Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (userName) {
  const navBar = document.querySelector(".navbar");
  const div = document.createElement("div");
  const textDiv = document.createTextNode(userName);
  div.appendChild(textDiv);
  navBar.appendChild(div);
  const photo = document.createElement("img");
  photo.style.width = "150px";
  photo.src = "./mike.avif";
  navBar.appendChild(photo);
})("Mike");
