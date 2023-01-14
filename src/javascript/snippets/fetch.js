// fetch
fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  })
  .catch((e) => {
    console.log(e);
  });
