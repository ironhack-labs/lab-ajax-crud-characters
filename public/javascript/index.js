const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterID = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(characterID);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterID = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(characterID);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const elements = event.target.elements;
    let newCharacter ={};
    for(let i = 0; i < elements.length; i++){
        const item = elements.item(i);
        newCharacter[item.name] = item.value;
    }

    charactersAPI.updateOneRegister(newCharacter);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const elements = event.target.elements;
    let newCharacter ={};
    for(let i = 0; i < elements.length; i++){
        const item = elements.item(i);
        newCharacter[item.name] = item.value;
    }

    charactersAPI.createOneRegister(newCharacter);
  });
});
