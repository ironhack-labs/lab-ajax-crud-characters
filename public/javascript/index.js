const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(allChars => {
      let text = ''
      allChars.data.forEach(elm => text += `<div class="character-info">
      <div class="name">Character Name :${elm.name} </div>
      <div class="occupation">Character Occupation: ${elm.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${elm.cartoon}</div>
      <div class="weapon">Character Weapon: ${elm.weapon}</div>
    </div> `)
      document.querySelector('#paco').innerHTML = text
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
   
      const characterId = document.getElementsByName("character-id")[0].value;
      console.log(characterId)
      charactersAPI
          .getOneRegister(characterId)
          .then(response => {
              const inputs = document.querySelectorAll('#edit-character-form div input')
              console.log(response.data)
              inputs[0].value = response.data.id
              inputs[1].value = response.data.name
              inputs[2].value = response.data.occupation
              inputs[3].value = response.data.weapon
          })
          .catch(err => console.log('Hubo un error!', err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementsByName("character-id-delete")[0].value;
    if(characterId)
    {
    charactersAPI.deleteOneRegister(characterId)
    .catch(err => console.log('Hubo un error!', err))
    document.getElementById('delete-one').style.backgroundColor= "green";
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const characterId = document.getElementsByName("character-id")[0].value;
  
      const inputs = document.querySelectorAll('#edit-character-form div input')
  
      const myCharacterToEdit = {
          id: inputs[0].value,
          name: inputs[1].value,
          occupation: inputs[2].value,
          weapon: inputs[3].value,
          cartoon: 0
      }
      
      charactersAPI
          .updateOneRegister(characterId, myCharacterToEdit)
          .then((elm) => {
              document.querySelector('#edit-character-form').reset()
              console.log(elm)
          })
          .catch(err => console.log('Hubo un error!', err))

   
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
  ////////////////
  event.preventDefault()
    const inputs = document.querySelectorAll('#new-character-form div input')

    const myCharacter = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value,
        cartoon: 0
    }
    console.log(myCharacter)
    charactersAPI
          .createOneRegister(myCharacter)
          .then(elm => console.log(elm))
          .catch(err => console.log('Hubo un error!', err))


  });
});
