const charactersAPI = new APIHandler('http://localhost:8000');
const anclaVital = document.querySelector(".characters-container")
const originalCard = document.querySelector(".character-info")


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()
    //charactersAPI.getFullList()
    let response = charactersAPI.getFullList()

    charactersAPI.printAllCharacters(anclaVital, originalCard, response)
    //CÓMO Y DÓNDE BORRAR?
    // document.querySelector(".characters-container").reset()
    console.log("response desde index", response)

  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id").value
    event.preventDefault()
    const prueba = charactersAPI.getOneRegister(id)
    console.log("pRUEBA get one", prueba)
    charactersAPI.printAOneSadTinyCharacter(anclaVital, originalCard, id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id-delete").value
    const btn = document.getElementById("delete-one")
    event.preventDefault()
    //pasar parametro DOM 
    charactersAPI.deleteOneRegister(id, btn)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    //console.log("te estoy clicando locamenti")
    const btn = document.getElementById("send-data-BIS")
    const inputEdit = document.querySelectorAll("#edit-character-form input")
    const characterEdit = {
      id: inputEdit[0].value,
      name: inputEdit[1].value,
      occupation: inputEdit[2].value,
      weapon: inputEdit[3].value,
      cartoon: inputEdit[4].checked
    }
    event.preventDefault()
    charactersAPI.updateOneRegister(characterEdit, btn)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const btn = document.getElementById("send-data")
    const inputNew = document.querySelectorAll("#new-character-form input")
    event.preventDefault()
    inputNew[0].value != "" ? charactersAPI.createOneRegister(inputNew, btn) : alert("RELLENA EL NOMBRE, plis")
    console.log("return de create", charactersAPI.createOneRegister(inputNew, btn))
  });
});


