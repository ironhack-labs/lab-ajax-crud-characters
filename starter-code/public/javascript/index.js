const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    getAllChar();   //-----------
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector("#character-id").value;

    getOneChar(id)                  //-----------------
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idDelete = document.querySelector("#deleteOne").value;
    charactersAPI.deleteOneRegister(idDelete)               //---------------
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
