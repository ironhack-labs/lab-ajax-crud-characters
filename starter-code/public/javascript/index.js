const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector("#character-id").value
    console.log(id)
    charactersAPI.getOneRegister (id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector("#character-id-delete").value
    charactersAPI.deleteOneRegister (id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.querySelector("#chr-id").value
    const name = document.querySelector("#name-edit").value
    const occupation = document.querySelector("#occupation-edit").value
    const weapon = document.querySelector("#weapon-edit").value
    const cartoon = document.querySelector("#cartoon-edit").value
    const characterObj = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister (id, characterObj)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.querySelector("#name-create").value
    const occupation = document.querySelector("#occupation-create").value
    const weapon = document.querySelector("#weapon-create").value
    const cartoon = document.querySelector("#cartoon-create").value
    const characterObj = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister (characterObj)
  });
});
