const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('#goya').value;
    console.log(characterId);
    charactersAPI.getOneRegister(characterId)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const charId = document.querySelector("#jim").value;
    charactersAPI.deleteOneRegister(charId)
    .then(response => console.log(response.data))
    .catch(err => console.log(err));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterId = document.querySelector('#arwen-one').value;
    const characterName = document.querySelector('#arwen-two').value;
    const characterOccupation = document.querySelector('#arwen-tree').value;
    const characterWeapon = document.querySelector('#arwen-four').value;
    const characterCartoon = document.querySelector('#arwen-five').checked;
    const updatedChar = {
      name: characterName, 
      occupation: characterOccupation, 
      weapon: characterWeapon, 
      cartoon: characterCartoon
    }
    charactersAPI.updateOneRegister(characterId, updatedChar)
    .then(response => console.log("Updated: ", response.data))
    .catch(err => console.log(err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.target);
    const characterName = document.querySelector('#goya-one').value;
    const characterOccupation = document.querySelector('#goya-two').value;
    const characterWeapon = document.querySelector('#goya-tree').value;
    const characterCartoon = document.querySelector('#goya-four').checked;
    const newChar = {
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      cartoon: characterCartoon
    }
    console.log(newChar);
    charactersAPI.createOneRegister(newChar)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  });
});
