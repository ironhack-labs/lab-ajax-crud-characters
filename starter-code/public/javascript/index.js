const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(data => {
        console.log(data)
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    charactersAPI.checkId(3);
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

  document.getElementById('send-data-edit').onclick = function () {
    let infoCharacter = document.querySelectorAll("#edit-character-form input");
    console.log(infoCharacter);
    if (infoCharacter[0].value === '') return

    const aux = {}
    const keys=['name','occupation','weapon']

    for (let i=1;i<4;i++){
      if(infoCharacter[i].value !== '') aux[keys[i-1]] = infoCharacter[i].value;
    }
    aux.cartoon = infoCharacter[4].checked;
    // if(infoCharacter[1].value !== '') aux.name = infoCharacter[1].value;


    console.log(aux);

    charactersAPI.updateOneRegister(infoCharacter[0].value, aux)
    .then(data => {
      console.log('Successfully modified')
    })
    .catch(err => console.log(err))


  }

  document.getElementById('send-data').onclick = function () {
    let character = document.querySelectorAll("#new-character-form input");

    let empty = false;
    for (let i = 0; i < 3; i++) {
      if (character[i].value === '') empty = true;
    }

    if(empty) {
      console.log('Todos los campos deben estar rellenitos');
      return
    }

    const characterInfo = {
      name: character[0].value,
      occupation: character[1].value,
      weapon: character[2].value,
      cartoon: character[3].checked
    };

    charactersAPI.createOneRegister(characterInfo)
      .then((data) => {
        console.log('Successfully created', data)
      })
      .catch(err => console.log(err))

  }

  function createCharacterDiv(data){
    
  }
})
