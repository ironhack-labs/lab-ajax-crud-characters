const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(data => {
        console.log(data)
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    let id = document.getElementsByName("character-id")[0].value;
    if (id === '') return
    charactersAPI.getOneRegister(id)
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.getElementsByName("character-id-delete")[0].value;
    if (id === '') return
    charactersAPI.deleteOneRegister(id)
      .then(() => {
        console.log('Successfully deleted')
      })
      .catch(err => console.log(err))
  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('send-data').onclick = function () {
    let character = document.querySelectorAll("#new-character-form input");
    for (let i = 0; i < 3; i++) {
      if (character[i] === '') return
    }

    const characterInfo = {
      name: character[0].value,
      occupation: character[1].value,
      weapon: character[2].value,
      cartoon: character[3].checked
    };


    charactersAPI.createOneRegister(characterInfo)
      .then(() => {
        console.log('Successfully created')
      })
      .catch(err => console.log(err))


  }
})
