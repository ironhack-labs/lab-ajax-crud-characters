const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

let charactersContainer = document.querySelector('.characters-container');

function characterBuilder(character){

      let characterBuilder =     `
            <div class="character-info">
            <div class="id"> Id: ${character.id}</div>
            <div class="name"> Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon"> Is a Cartoon?: ${character.debt}</div>
            <div class="weapon"> Weapon: ${character.weapon}</div>
            </div>
            `

            return characterBuilder;

}

$(document).ready( () => {


  document.getElementById('fetch-all').onclick = function(e){
    e.preventDefault();
    charactersContainer.innerHTML = ""
    charactersAPI.getFullList()
   .then(allCharactersFetched => {
        allCharactersFetched.forEach(character => {
          charactersContainer.innerHTML += characterBuilder(character)
          
        });

      }) 
   
  }
  
  document.getElementById('fetch-one').onclick = function(e){
    e.preventDefault();
    charactersContainer.innerHTML = "";
    let characterId = document.querySelector('#character-id').value
  
    charactersAPI.getOneRegister(parseInt(characterId))
    .then(character => {
      charactersContainer.innerHTML += characterBuilder(character)
            
    })
    .catch(error => console.log(error))
    document.querySelector('#character-id').value = "";
    
  }

  
  document.getElementById('delete-one').onclick = function(e){
    e.preventDefault();
    charactersContainer.innerHTML = "";
    
    let characterToDeleteID = document.querySelector('#character-id-delete').value
    charactersAPI.deleteOneRegister(parseInt(characterToDeleteID))
      .then(deletedCharacter => {
        charactersAPI.getFullList()
          .then(allCharactersFetched => {
            allCharactersFetched.forEach(character => {
              charactersContainer.innerHTML += characterBuilder(character)
          })
        })
      })
      .catch(error => console.log(error))
    

    document.querySelector('#character-id-delete').value = ""

        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersContainer.innerHTML = "";
    let characterData = document.querySelectorAll('#edit-character-form.character-form > div.field > input')
    let characterUpdateObject = { name: characterData[1].value, 
                                  occupation: characterData[2].value, 
                                  weapon: characterData[3].value
                                }

    console.log(characterUpdateObject,characterData[0].value )
    charactersAPI.updateOneRegister(parseInt(characterData[0].value), characterUpdateObject)
      .then(updatedCharacter => {
        charactersAPI.getFullList()
        .then(allCharactersFetched => {
          allCharactersFetched.forEach(character => {
            charactersContainer.innerHTML += characterBuilder(character)
          })
        })

      })
      .catch(error => console.log(error))

            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersContainer.innerHTML = "";
    let characterData = document.querySelectorAll('#new-character-form.character-form > div.field > input')
    let characterObject = { name: characterData[0].value, 
                            occupation: characterData[1].value, 
                            weapon: characterData[2].value
                          }
    
    charactersAPI.createOneRegister(characterObject)
      .then(newcharacter => { 
        charactersAPI.getFullList()
          .then(allCharactersFetched => {
            allCharactersFetched.forEach(character => {
              charactersContainer.innerHTML += characterBuilder(character)
          })
        })

      })
      .catch(error => console.log(error))

      characterData.forEach(character => character.value = "")
                
  }


})
