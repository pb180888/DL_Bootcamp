const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

getData();
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
const getDataFetch = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  console.log(arrayOfPromises);
  for await (let promise of arrayOfPromises) {
    const data = await promise.json();
    console.log(data);
  }
};
getDataFetch();
