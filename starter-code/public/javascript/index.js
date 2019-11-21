const charactersAPI = new APIHandler(`https://minions-api.herokuapp.com/characters`);

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()

      .then(response => {
        console.log("Response API: ", response.data);
      })
      .catch(err => console.log("Error", err));;
  });
});

document.getElementById('fetch-one').addEventListener('click', function (event) {

  document.getElementById("character-id").value

  charactersAPI.getOneRegister()
    .then(response => {
      const {
        name,
        occupation,
        cartoon,
        weapon
      } = response.data
      inputs[4].value = id
      inputs[0].value = name
      inputs[1].value = occupation
      inputs[2].value = cartoon ? "true" : "false"
      inputs[3].value = weapon
    })
});

document.getElementById('delete-one').addEventListener('click', function (event) {

  document.getElementById("character-id-delete").value
  charactersAPI.getOneRegister()
});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  const id = document.getElementById("editId").value;
  const name = document.getElementById("editName").value;
  const occupation = document.getElementById("editOcc").value;
  const weapon = document.getElementById("editWeapon").value;
  const cartoon = document.getElementById("editCartoon").checked

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});