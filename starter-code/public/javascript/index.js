const charactersAPI = new APIHandler('http://localhost:8000');



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    charactersAPI.getFullList();
  });
  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister();
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister();
  });


}); //end window