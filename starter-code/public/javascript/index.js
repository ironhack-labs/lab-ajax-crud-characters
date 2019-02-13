const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let charactersContainer = document.getElementsByClassName('characters-container')
  
  
  charactersContainer[0].innerHTML = "";

  charactersAPI
  .getFullList()
  .then(characters =>{
    characters.forEach(character =>{
      console.log(character)
  charactersContainer[0].innerHTML +=
  `<div class=container>
  <div class="character-info>
  <div class="name">Character Name: ${character.name}</div>
  <div class="occupation">Character Occupation: ${character.occupation}</div>
  <div class="cartoon">Weapon : ${character.weapon}</div>
  <div class="weapon">Es un cartoon? ${character.cartoon}</div>
  </div>
  </div>
  `

    })
  })
  .catch(e=>console.log(e))
}

  document.getElementById('fetch-one').onclick = function(){
    let charactersContainer = document.getElementsByClassName('characters-container')
    charactersContainer[0].innerHTML = "";
    // const id = document.getElementsByTagName("character-id")[0].value
    const id = $('[name="character-id"]').val()

    console.log(id)
    charactersAPI
    .getOneRegister(id)
    .then(character =>{
      charactersContainer[0].innerHTML +=
      `<div class=container>
      <div class="character-info>
      <div class="name">Character Name: ${character.name}</div>
      <div class="occupation">Character Occupation: ${character.occupation}</div>
      <div class="cartoon">Weapon : ${character.weapon}</div>
      <div class="weapon">Es un cartoon? ${character.cartoon}</div>
      </div>
      </div>
      `
    })
  .catch(e=>console.log(e))

  }
  
  document.getElementById('delete-one').onclick = function(){
    let charactersContainer = document.getElementsByClassName('characters-container')
    charactersContainer[0].innerHTML = "";

    const id = $('[name="character-id-delete"]').val()
    
    charactersAPI
    .deleteOneRegister(id)
    .then(character=>{
      charactersContainer[0].innerHTML +=
      `
      <h2>${character.name} has been deleted</h2>
      `
    })
    .catch(e=>console.log(e))
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let name = $('[name="Newname"]').val()
    let occupation = $('[name="Newoccupation"]').val()
    let weapon = $('[name="Newweapon"]').val()
    let cartoon = $('[name="Newcartoon"]').is(':checked')
    
    const id = $('[name="chr-id"]').val()

    charactersAPI
    .updateOneRegister(id, {name, occupation, weapon, cartoon })
    .then((updated)=>{

    })
    .catch(e=>{
      console.log(e)
    })
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){

    let name = $('[name="name"]').val()
    let occupation = $('[name="occupation"]').val()
    let weapon = $('[name="weapon"]').val()
    let cartoon = $('[name="cartoon"]').is(':checked')

    charactersAPI
    .createOneRegister({name,occupation,weapon,cartoon})
    .then(character=>{})
    .catch(e=>console.log(e))

  }
})
