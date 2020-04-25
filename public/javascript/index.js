const charactersAPI = new APIHandler('http://localhost:8001');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(apiRes => charactersAPI.displayCharacters(apiRes)).catch(apiErr => console.log(apiErr))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("search-by-id").value
    charactersAPI.getOneRegister(id).then(apiRes => charactersAPI.displayCharacter(apiRes)).catch(apiErr => console.log(apiErr))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("delete-by-id").value
    charactersAPI.deleteOneRegister(id).then(document.getElementById("delete-one").classList.add("active")).catch(document.getElementById("delete-one").classList.add("inactive"))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById("edit-character-form-id").value
    const name = document.getElementById("edit-character-form-name").value
    const occupation = document.getElementById("edit-character-form-occupation").value
    const weapon = document.getElementById("edit-character-form-weapon").value
    const cartoon = document.getElementById("edit-character-form-cartoon").value
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon).then(apiRes => {
      console.log(apiRes)
      document.getElementById("send-data-update").classList.add("active")
    }).catch(ApiErr => {
      console.log(ApiErr);
      document.getElementById("send-data-create").classList.add("inactive")
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById("new-character-form-name").value
    const occupation = document.getElementById("new-character-form-occupation").value
    const weapon = document.getElementById("new-character-form-weapon").value
    const cartoon = document.getElementById("new-character-form-cartoon").value
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon).then(apiRes => {
      document.getElementById("send-data-create").classList.add("active")
    }).catch(apiErr => {
      document.getElementById("send-data-create").classList.add("inactive");
      console.log(apiErr)
    })
  });
});