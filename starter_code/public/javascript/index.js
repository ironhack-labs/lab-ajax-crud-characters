const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then((res) => {
        console.log(res.data)

      })
  }

  document.getElementById('fetch-one').onclick = function () {
    var info = document.getElementById('fetch-one').value
    charactersAPI.getOneRegister(info)
      .then((res) => {
        console.log(res.data)
      })
  }

  document.getElementById('delete-one').onclick = function () {
    var infor = document.getElementById('borrar').value
    charactersAPI.deleteOneRegister(infor)
    console.log(infor)
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    let id = document.getElementById('editid').value
    let obj = {
      name: document.querySelector('#edit-character-form input[name=name]').value,
      occupation: document.querySelector('#edit-character-form input[name=occupation]').value,
      weapon: document.querySelector('#edit-character-form input[name=weapon]').value
    }
    console.log(obj)

    charactersAPI.updateOneRegister(d, obj)
      .then((res) => {
        console.log(res)
      })
  }





  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();

    let obj = {
      name: document.querySelector('#new-character-form input[name=name]').value,
      occupation: document.querySelector('#new-character-form input[name=occupation]').value,
      weapon: document.querySelector('#new-character-form input[name=weapon]').value,
      debt: document.getElementById('check').checked
    }
    console.log(obj)
   
    
    charactersAPI.createOneRegister(obj)
  }
})
