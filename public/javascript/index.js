const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    const fetchAllButton = document.getElementById('fetch-all')
    const elementDelete = document.querySelector(`.characters-container`)
    const characterList = document.getElementsByClassName('character-list')
    fetchAllButton.innerHTML = 'Fetch All'
    //console.log(characterList)
    if (characterList.length) {
      elementDelete.innerHTML = ''
    } else {
      fetchAllButton.innerHTML = 'Hide All'
      charactersAPI.getFullList()
    }     
  })
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
