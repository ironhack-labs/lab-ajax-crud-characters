const charactersAPI = new APIHandler("http://localhost:8000/characters/")


//Consumir servicios de API Handler
$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
        .then(chars=>{
              $('.characters-container').empty()
              for (char of chars.data){
                $('.characters-container').append(`
                 <div class="character-info">
                 <div class="name">Character Name: <span>${char.name}</span></div>
                 <div class="occupation">Character Occupation: <span>${char.occupation}</span> </div>
                 <div class="cartoon">Is a Cartoon?<span>${char.cartoon}</span> </div>
                 <div class="weapon">Character Weapon: <span>${char.weapon}</span></div>
                 <div class="id">ID: <span>${char.id}</span></div>
                 </div>`)
              }



        })

        .catch(e=>console.log(e))

  }
  
  document.getElementById('fetch-one').onclick = function() {
    let id = document.getElementById('character-id').value;
                console.log(id)
    charactersAPI.getOneRegister(id)
        .then(char => {
          console.log(char)
          char = char.data
          $('.characters-container').empty()
          $('.characters-container').append(`
                 <div class="character-info">
                 <div class="name">Character Name: <span>${char.name}</span></div>
                 <div class="occupation">Character Occupation: <span>${char.occupation}</span> </div>
                 <div class="cartoon">Is a Cartoon?<span>${char.cartoon}</span> </div>
                 <div class="weapon">Character Weapon: <span>${char.weapon}</span></div>
                 <div class="id">ID: <span>${char.id}</span></div>
                 </div>`)

        })

        .catch(e=>console.log(e))

    
  }
  
  document.getElementById('delete-one-button').onclick = function(){
    let id = document.getElementById('delete-one').value
    charactersAPI.deleteOneRegister(id)
        .then(() =>{
            $('.characters-container').empty()
            $('.characters-container').append(`

             <div class="character-info">
                    Character deleted
            </div>`)
        })

        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    let id = document.getElementById('edit-id').value
    let name = document.getElementById('edit-name').value
    let occupation = document.getElementById('edit-occupation').value
    let weapon = document.getElementById('edit-weapon').value
    let cartoon = document.getElementById('edit-is-cartoon').checked
    let editChar = {
      "name" : name,
      "occupation": occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }
    charactersAPI.updateOneRegister (id, {...editChar})
        .then( r=>{
          $('.characters-container').empty()
          $('.characters-container').append(`
                 <div class="character-info">
                 <div class="name">Character Name: <span>${editChar.name}</span></div>
                 <div class="occupation">Character Occupation: <span>${editChar.occupation}</span> </div>
                 <div class="cartoon">Is a Cartoon?<span>${editChar.cartoon}</span> </div>
                 <div class="weapon">Character Weapon: <span>${editChar.weapon}</span></div>
                 <div class="id">ID: <span>EDITED</span></div>
                 </div>`)

        })
        .catch(e=> console.log(e))
            
  }






  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    let name = document.getElementById('new-name').value
    let occupation = document.getElementById('new-occupation').value
    let weapon = document.getElementById('new-weapon').value
    let cartoon = document.getElementById('is-cartoon').checked
    let newChar = {
      "name" : name,
      "occupation": occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }
    charactersAPI.createOneRegister ({...newChar})
    console.log(newChar)
    $('.characters-container').empty()
    $('.characters-container').append(`
                 <div class="character-info">
                 <div class="name">Character Name: <span>${newChar.name}</span></div>
                 <div class="occupation">Character Occupation: <span>${newChar.occupation}</span> </div>
                 <div class="cartoon">Is a Cartoon?<span>${newChar.cartoon}</span> </div>
                 <div class="weapon">Character Weapon: <span>${newChar.weapon}</span></div>
                 <div class="id">ID: <span>${char.id}</span></div>
                 </div>`)

  }

})
