const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList()
      .then(fullList => {
        container.innerHTML = ""
        fullList.forEach(elm => {
          replaceContainer("", elm.name, elm.occupation, elm.cartoon, elm.weapon)
        })
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id")[0]
    charactersAPI.getOneRegister(id.value)
      .then(elm => {
        container.innerHTML = ""
        replaceContainer("", elm.name, elm.occupation, elm.cartoon, elm.weapon)
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
  });
});