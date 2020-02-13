const baseUrlMinion = "https://minions-api.herokuapp.com/characters"

const charactersAPI = new APIHandler(baseUrlMinion);


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    charactersAPI.updateOneRegister()


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    charactersAPI.createOneRegister()


  });
});
