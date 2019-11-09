const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', function(event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', function(event) {
      let id = document.querySelector('input[name="character-id"]').value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById('delete-one')
    .addEventListener('click', function(event) {
      let id = document.querySelector('input[name="character-id-delete"]').value;
      charactersAPI.deleteOneRegister(id)
    });

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', function(event) {});

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function(event) {
      event.preventDefault()
      let name = document.querySelector('input[name="name"]').value;
      let occupation = document.querySelector('input[name="occupation"]').value;
      let weapon = document.querySelector('input[name="weapon"]').value;
      let cartoon = document.querySelector('input[name="cartoon"]').checked;
      charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
    });
});