const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then ((res) => {
        console.log(res.data)
      })
    };

  document.getElementById('fetch-one').onclick = function () {

    var info = document.getElementById('buscauno').value
    charactersAPI.getOneRegister(info)
    .then((res) => {
      console.log(res.data)
    })
  }

  document.getElementById('delete-one').onclick = function () {
    var infoDelete = document.getElementById('borrarUNo').value
    charactersAPI.deleteOneRegister(infoDelete)
    .then((res) =>{
      console.log(res)
      console.log("elemento borrado")
    })

  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault( )

    const elemento = document.getElementById('editId').value;
    const editar = {
      name: document.getElementById('editName').value,
      occupation: document.getElementById('editOccupation').value,
      weapon: document.getElementById('editWeapon').value,
      debt: document.getElementById('editIs').value
    }
    console.log(editar);
    console.log(elemento);
    charactersAPI.updateOneRegister(elemento, editar)

  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();

    const nuevo = {
      name: document.getElementById('nuevoName').value,
      occupation: document.getElementById('nuevoOccupation').value,
      weapon: document.getElementById('nuevoWeapon').value,
      debt: document.getElementById('nuevoIs').checked
    }
    console.log(nuevo)

     charactersAPI.createOneRegister(nuevo)
    .then(() => {console.log("objeto creado")})
    .catch(() => { console.log("ERROOOORRR")});


  }
})