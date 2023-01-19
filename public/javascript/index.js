const charactersAPI = new APIHandler("http://localhost:8000");

// const getAllCharacters = characterName => {
//   axios
//   .get(`http://localhost:8000/characters/${characterName}`)
//   .then(response => {
//     const characterDetail = response.data[0]
//     console.log(characterDetail)
//   })
//   .catch(err => console.log("The error is:", err))
// };

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => console.log(response))
        .catch((err) => console.log(err));

      // getAllCharacters(2)
      // .then(response => console.log(response))
      // .catch(err => console.log("The error is:", err))
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
