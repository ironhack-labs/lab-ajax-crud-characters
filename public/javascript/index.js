const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault(); // <= !!! Prevent the refresh
    charactersAPI.getFullList()
    //document.getElementById('').innerHTML = charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault(); // <= !!! Prevent the refresh
    const id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault(); // <= !!! Prevent the refresh
    const id = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(id)
    console.log('delete clicked')
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault(); // <= !!! Prevent the refresh
    const id = document.getElementById('update-id-input').value
    charactersAPI.updateOneRegister(id)
    console.log('update clicked')
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault(); // <= !!! Prevent the refresh
    charactersAPI.createOneRegister();
  });
});
