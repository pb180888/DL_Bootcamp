const urls = [
  "https://www.swapi.tech/api/people/1",
  "https://www.swapi.tech/api/people/2",
  "https://www.swapi.tech/api/people/3",
  "https://www.swapi.tech/api/people/4",
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

Promise.all(requests)
  .then((responses) => {
    for (let response of responses) {
      // console.log(response.url);
      return responses;
    }
  })

  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((users) =>
    users.forEach((user) => console.log(user.result.properties))
  );
