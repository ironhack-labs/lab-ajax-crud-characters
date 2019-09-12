const charactersAPI = new APIHandler("http://localhost:8000")

const charContainer = document.querySelector('.characters-container')



$(document).ready( () => {
  //Todos los personajes
  document.getElementById('fetch-all').onclick = async function(){
    const response = await charactersAPI.getFullList()
    //Solo queremos la informacion dentro del data, no todo lo demas, por eso es .data
    const allCharacters = response.data
    //Por cada personaje de mi arreglo
    allCharacters.forEach( character => {
      const {id, name, occupation, cartoon, weapon} = character

    //Creamos etiqueta
     const characterCard = document.createElement('div')
     characterCard.classList.add('character-info')
    
     //Se le agrega contenido
     characterCard.innerHTML = `
     <div class="id">Id:${id} </div>
     <div class="name">Character Name: ${name} </div>
     <div class="occupation">Character Occupation: ${occupation} </div>
     <div class="cartoon">Is a Cartoon?: ${cartoon} </div>
     <div class="weapon">Character Weapon: ${weapon}</div>
     `
     //Se agrega al contenedor characters-container
     charContainer.appendChild(characterCard)
   });
            
  }
  
  document.getElementById('fetch-one').onclick = async function(){
    const characterId = document.querySelector('input[name="character-id"]').value
    const response = await charactersAPI.getOneRegister(characterId)
    const  character = response.data
    console.log(character);

    //Pintar en DOM
    //Creamos etiqueta
    const {id, name, occupation, cartoon, weapon} = character

    const characterCard = document.createElement('div')
    characterCard.classList.add('character-info')
   
    //Se le agrega contenido
    characterCard.innerHTML = `
    <div class="id">Id:${id} </div>
    <div class="name">Character Name: ${name} </div>
    <div class="occupation">Character Occupation: ${occupation} </div>
    <div class="cartoon">Is a Cartoon?: ${cartoon} </div>
    <div class="weapon">Character Weapon: ${weapon}</div>
    `
    //Se agrega al contenedor characters-container
    charContainer.appendChild(characterCard)
      
  }
  
  document.getElementById('delete-one').onclick = async function(){
    const deleteId = document.querySelector('input[name="character-id-delete"]').value
    //NO se guarda en la constante porque no la vamos a manipular despues
    await charactersAPI.deleteOneRegister(deleteId)
  }
  
  //UPDATE ONE
  document.getElementById('edit-character-form').onsubmit =async function(e){
    e.preventDefault()
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value  
    const name = document.querySelector('#edit-character-form input[name="name"]').value  
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value 
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked
  
    const updateCharacter = {id, name, occupation, weapon, cartoon}
    await charactersAPI.updateOneRegister(id, updateCharacter)
  }
  

  //CREANDO UNO
  document.getElementById('new-character-form').onsubmit = async function(e){
    e.preventDefault()
    const name = document.querySelector('.form-container input[name="name"]').value  
    const occupation = document.querySelector('.form-container input[name="occupation"]').value
    const weapon = document.querySelector('.form-container input[name="weapon"]').value 
    const cartoon = document.querySelector('.form-container input[name="cartoon"]').checked 

    //Creamos el objeto con los valores obtenidos del post
    const newCharacter = {name, occupation, weapon, cartoon}
    
    //Peticion
    await charactersAPI.createOneRegister(newCharacter)
  }
})
