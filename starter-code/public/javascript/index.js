const charactersAPI = new APIHandler("https://minions-api.herokuapp.com")




$(document).ready(() => {

  document.getElementById('fetch-all').onclick = function (event) {
    charactersAPI.getFullList()

  }

  document.getElementById('fetch-one').onclick = function (event) {
    charactersAPI.getOneRegister()

  }

  document.getElementById('delete-one').onclick = function (event) {

  }

  document.getElementById('edit-character-form').onsubmit = function (event) {

  }

  document.getElementById('new-character-form').onsubmit = function (event) {
    charactersAPI.createOneRegister()
  }
})
