const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.querySelector("#character-id-field").value
    charactersAPI.getOneRegister(+characterId)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.querySelector("#character-id-delete").value
    charactersAPI.deleteOneRegister(+characterId)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event && event.preventDefault();
    const id = +document.querySelector("#edit-character-id").value;
    const name = document.querySelector("#edit-character-name").value;
    const occupation = document.querySelector("#edit-character-occupation").value;
    const weapon = document.querySelector("#edit-character-weapon").value;
    const cartoon = document.querySelector("#edit-character-checkbox").checked;
    charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon})
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event && event.preventDefault();
    // const newCharacter = {
      const name = document.querySelector("#new-character-name").value;
      const occupation = document.querySelector("#new-character-occupation").value;
      const weapon = document.querySelector("#new-character-weapon").value;
      const cartoon = document.querySelector("#new-character-checkbox").checked;
    // }
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
  });
});
