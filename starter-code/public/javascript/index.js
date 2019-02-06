const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    charactersAPI.getFullList();
  };

  document.getElementById('fetch-one').onclick = () => {
    charactersAPI.getOneRegister();
  };

  document.getElementById('delete-one').onclick = () => {
    charactersAPI.deleteOneRegister();
  };

  document.getElementById('edit-character-form').onsubmit = () => {
    charactersAPI.updateOneRegister();
  };

  document.getElementById('new-character-form').onsubmit = () => {
    charactersAPI.createOneRegister();
  };
});
