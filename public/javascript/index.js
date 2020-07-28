const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    //Hardcore para probar. Hay que llamar para ver si funciona. Hace el console.log en el Live Server.
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    //Hardcore para probar. Hay que llamar para ver si funciona. Hace el console.log en el Live Server.
    charactersAPI.getOneRegister(1)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(4)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const updateCharacter = {
      name: "Loles"
    }
    charactersAPI.updateOneRegister(1, updateCharacter)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    //Hardcore para probar. Hay que llamar para ver si funciona. Hace el console.log en el Live Server.
    //Le creo un nuevo objeto para pasarlo como parámetro al constructor
    const newCharacter = {
      name: 'Paco',
      occupation: 'Bombero',
      weapon: 'Mangera',
      cartoon: true
    }

    charactersAPI.createOneRegister(newCharacter);
  });
});