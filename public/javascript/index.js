const charactersAPI = new APIHandler();


// FETCH ALL
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI
        .getFullList()
        .then(allCharacters => {
          let cards =''
          let counter = 0
  // Viendo como está la Api meto un loop pra que me devuelva solo los 30 primeros con un nombre truthy
          for (let i = 50; i < allCharacters.data.length; i+= 3){
            if (allCharacters.data[i].name) {
              counter++
              cards += `
              <div class="characters-container">
              <div class="character-info">
              <div class="name">${allCharacters.data[i].name}</div>
              <div class="occupation">${allCharacters.data[i].occupation}</div>
              <div class="cartoon">${allCharacters.data[i].cartoon}</div>
              <div class="weapon">${allCharacters.data[i].weapon}</div>
              </div>
              </div>`
            }
          
            if (counter > 40) break
          }
          document.querySelector('#charactersList').innerHTML = cards
                  
        })
        .catch(err => console.log('Algo ha fallado!!', err))


  });
//FETCH ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

    const characterId = document.querySelector("#character-id").value
    const characterCard= document.querySelectorAll(".character-info div")

    charactersAPI
        .getOneRegister(characterId)
        .then(characterRecovered =>{
          characterCard[0].innerText = characterRecovered.data.name
          characterCard[1].innerText = characterRecovered.data.occupation
          characterCard[2].innerText = characterRecovered.data.cartoon
          characterCard[3].innerText = characterRecovered.data.weapon
        })
        .catch(err => {
          characterCard[0].innerText = 'Registro no encontrado'
          characterCard[1].innerText = ''
          characterCard[2].innerText = ''
          characterCard[3].innerText = ''
          console.log('Algo ha fallado!!', err)
        })
  });

  //DELETE ONE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const button = document.getElementById('delete-one')
    let characterId = document.querySelector("#character-id-delete").value

    charactersAPI
        .deleteOneRegister(characterId)
        .then(elm => button.classList.add("success"))
        .catch(err => button.classList.add("fail"))
  // No da nunca error, aunque no haya ningún registro que borrar      
  });


  //EDIT REGISTER
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
   event.preventDefault()
   const button = document.querySelector('#edit-character-form button')
   const characterData = document.querySelectorAll("#edit-character-form input")

   const characterId = characterData[0].value

   const characterInfo = {
     name : characterData[1].value,
     occupation : characterData[2].value,
     weapon : characterData[3].value
     }
     characterData[3].value === "on" ? characterInfo.cartoon = true : characterInfo.cartoon = false

    charactersAPI
        .updateOneRegister(characterId,characterInfo)
        .then (() =>{
          characterData[0].value = ''
          characterData[1].value = ''
          characterData[2].value = ''
          characterData[3].value = ''
          characterData[4].value = '' 
          button.classList.add("success") 
        })
         .catch(elm => button.classList.add("fail"))
  });

  //CREATE REGISTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const button = document.querySelector('#new-character-form button')
    const characterData = document.querySelectorAll("#new-character-form input")
 
    const characterInfo = {
      name : characterData[0].value,
      occupation : characterData[1].value,
      weapon : characterData[2].value
      }
      
      characterData[3].value === "on" ? characterInfo.cartoon = true : characterInfo.cartoon = false
      charactersAPI
          .createOneRegister(characterInfo)
          .then(elm => button.classList.add("success"))
          .catch(elm => button.classList.add("fail"))
  });
});
