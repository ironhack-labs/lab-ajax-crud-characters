const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const characterInfo = document.querySelectorAll('#new-character-form input')
    const info = {
      name: characterInfo[0].value,
      occupation: characterInfo[1].value,
      weapon: characterInfo[2].value
    }
    const api = new APIHandler('https://minions-api.herokuapp.com');
    api.createOneRegister(info)
      .then(data => {
        console.log(data)
      })

  });
});