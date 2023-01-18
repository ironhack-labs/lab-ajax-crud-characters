const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((result)=>console.log(result))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementById("character-id").value
    charactersAPI.getOneRegister(characterId)
    .then((result)=>console.log(result))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

   

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newCharacterName = document.getElementById("char-name").value
    const newCharacterOccupation = document.getElementById("char-occupation").value
    const newCharacterWeapon = document.getElementById("char-weapon").value
    const newCharacterCartoon = document.getElementById("char-cartoon").value

    charactersAPI.createOneRegister({ name: newCharacterName, occupation: newCharacterOccupation, cartoon: newCharacterCartoon, weapon: newCharacterWeapon })
    .then((result)=>console.log(result))

  });
});
