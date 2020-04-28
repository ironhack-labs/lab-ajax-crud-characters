const charactersAPI = new APIHandler('http://localhost:8000');

charactersAPI.getFullList();
//charactersAPI.getOneRegister(2);
charactersAPI.createOneRegister({name: 4, occupation:'unknown', cartoon: 'true', weapon: 'knife'});
//charactersAPI.deleteOneRegister(11);
charactersAPI.getFullList();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
