const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
    .then(characters=>{
      console.log(characters.data)
    })
    .catch(console.log())
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const valor = document.getElementsByName("character-id")
    charactersAPI.getOneRegister(valor[0].value)
    .then(character=>{
      console.log(character.data)
    })
    .catch(console.log())
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const id = document.getElementsByName("character-id-delete")
    charactersAPI.deleteOneRegister(id[0].value)
    .then(()=>console.log("Done"))
    .catch(()=>console.log("Error"))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const character = {
      id: event.target.chr.value,
      name: event.target.name.value,
      occupation: event.target.occupation.value,
      weapon: event.target.weapon.value,
      cartoon:""
    }
    if(event.target.cartoon.value === "on"){
      character.cartoon = true
    } else{
      character.cartoon = false
    }
    charactersAPI.updateOneRegister(character)
    .then(()=>console.log("Done"))
    .catch(error=>concols.log(error))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const newCharacter = {
      name: event.target.name.value,
      occupation: event.target.occupation.value,
      weapon: event.target.weapon.value,
      cartoon: event.target.cartoon.value
    }
    charactersAPI.createOneRegister(newCharacter)
    .then(()=>console.log("Done"))
    .catch(console.log())

  });
});
