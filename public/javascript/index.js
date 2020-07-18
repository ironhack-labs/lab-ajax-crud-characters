const charactersAPI = new APIHandler('http://localhost:8000/');
const getFormData = ['id', 'name', 'ocuppation', 'weapon', 'cartoon']
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('character-id').value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('character-id-delete').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.createOneRegister()
  });
});
