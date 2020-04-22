let ApiUrl = "https://minions-api.herokuapp.com"
const charactersAPI = new APIHandler(ApiUrl);

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getOneRegister()
  });
 
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
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
