const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getDataFetch = async function () {
  try {
    const arrayOfPromises = urls.map((url) => fetch(url));
    // console.log(arrayOfPromises);

    for await (let promise of arrayOfPromises) {
      const data = await promise.json();
      console.log(data);
    }
  } catch (err) {
    console.log(err, "ooops");
  }
};
getDataFetch();
