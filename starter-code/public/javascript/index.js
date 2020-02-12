const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI.getFullList()
      .then(charactersArr => {
        charactersArr.forEach(elm => {
          list.innerHTML += `<li>${elm.name}</li>`
        })
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
