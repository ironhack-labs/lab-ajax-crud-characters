const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    const fetchAllButton = document.getElementById('fetch-all')
    const elementDelete = document.querySelector(`.characters-container`)
    fetchAllButton.innerHTML = 'Fetch All'
    if (event.target.className == 'show') {
      elementDelete.classList.add('hide')
      fetchAllButton.classList.remove('show')
    } else {
      elementDelete.classList.remove('hide')
      fetchAllButton.classList.add('show')
      fetchAllButton.innerHTML = 'Hide All'
      charactersAPI.getFullList()
    }
        
  });
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
