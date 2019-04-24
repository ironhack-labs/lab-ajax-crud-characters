const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  }

  document.getElementById('fetch-one').onclick = function () {
    let a = document.getElementsByName('character-id')[0].value
    charactersAPI.getOneRegister(a);
  }

  document.getElementById('delete-one').onclick = function () {
    let b = document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value
    charactersAPI.deleteOneRegister(b);
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()
    let id = document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value
    let name = document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value
    let occupation = document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value
    let weapon = document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value
    let cartoon = document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').checked

    let all = { name, occupation, weapon, cartoon }
    charactersAPI.updateOneRegister(id, all);
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    let name = document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value
    let occupation = document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value
    let weapon = document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value
    let cartoon = document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').checked
    let all = { name, occupation, weapon, cartoon }
    charactersAPI.createOneRegister(all)
  }
})
