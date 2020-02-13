const charactersAPI = new APIHandler('http://localhost:8000');

function reset() {
  document.querySelector('#delete-one').style.background = 'transparent'
  document.querySelector('#fetch-one').style.background = 'transparent'
  document.querySelector('#character-id').value = ''
  document.querySelector('#character-id-delete').value = ''
  document.querySelector('.characters-container').innerHTML = ''
  document.querySelector('#newName').value = ''
  document.querySelector('#newOccupation').value = ''
  document.querySelector('#newWeapon').value = ''
  document.querySelector('#newCartoon').checked = ''
  document.querySelector('#updId').value = ''
  document.querySelector('#updName').value = ''
  document.querySelector('#updOccupation').value = ''
  document.querySelector('#updWeapon').value = ''
  document.querySelector('#updCartoon').checked = ''
}

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    reset()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()
    reset()
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
    reset()
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.updateOneRegister()
    reset()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.createOneRegister()
    reset()
  });
});