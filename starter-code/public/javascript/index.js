const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', (e) =>{
    charactersAPI.getFullList()

  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const charID = document.querySelector('#character-id').value
    charactersAPI.getOneRegister(charID)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const charID = document.querySelector('#character-id-delete').value
    charactersAPI.deleteOneRegister(charID)
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
