const charactersAPI = new APIHandler("http://localhost:8000/characters/")
const charactersContainer = document.querySelector('.characters-container')

const editForm = document.getElementById('edit-character-form')
const editId = document.querySelector('#edit-id')
const editName = document.querySelector('#edit-name')
const editOccupation = document.querySelector('#edit-occupation')
const editWeapon = document.querySelector('#edit-weapon')
const editCartoon = document.querySelector('#edit-cartoon')

const createForm = document.querySelector('#new-character-form')
const createId = document.querySelector('#create-id')
const createName = document.querySelector('#create-name')
const createOccupation = document.querySelector('#create-occupation')
const createWeapon = document.querySelector('#create-weapon')
const createCartoon = document.querySelector('#create-cartoon')
//buttons
const fetchAll = document.querySelector('#fetch-all')
const fetchOne = document.querySelector('#fetch-one')
const deleteOne = document.querySelector('#delete-one')
const createChar = document.querySelector('#create-char')
const editChar = document.querySelector('#edit-char')

const clearButtons = () => {
  fetchAll.classList.remove('success')
  fetchAll.classList.remove('valev')
  fetchOne.classList.remove('success')
  fetchOne.classList.remove('valev')
  deleteOne.classList.remove('success')
  deleteOne.classList.remove('valev')
  createChar.classList.remove('success')
  createChar.classList.remove('valev')
  editChar.classList.remove('success')
  editChar.classList.remove('valev')
}

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = async function(){
    clearButtons()
    charactersContainer.innerHTML  = ''
    let characters
    try {
       characters = await charactersAPI.getFullList()
      }
      catch(e){
        return fetchAll.classList.add('valev') 
      }
      fetchAll.classList.add('success')
    

    characters.forEach(character => {
      const charHTML = `
      <div class="character-info">
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`
      charactersContainer.innerHTML += charHTML
    });

    
  }
  
  document.getElementById('fetch-one').onclick = async function(){
    clearButtons()
    const id = document.querySelector('#character-id').value
    let character
    charactersContainer.innerHTML  = ''
    try {
      character = await charactersAPI.getOneRegister(id)
      }
      catch(e){
        return fetchOne.classList.add('valev') 
      }
      fetchOne.classList.add('success')
    
      const charHTML = `
      <div class="character-info">
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`
      charactersContainer.innerHTML += charHTML

      editId.value = character.id
      editName.value = character.name
      editOccupation.value = character.occupation
      editWeapon.value = character.weapon
      editCartoon.checked = character.cartoon

      
      
  }
  
  document.getElementById('delete-one').onclick = async function(){
       clearButtons()
        const id = document.querySelector('#character-id-delete').value
        try {
          await charactersAPI.deleteOneRegister(id)
          }
          catch(e){
            return deleteOne.classList.add('valev') 
          }
          deleteOne.classList.add('success')
        
  }
  
  document.getElementById('edit-character-form').onsubmit = async function(e){
    clearButtons()
    e.preventDefault()
    const newData = {
      name:editName.value,
      occupation: editOccupation.value,
      weapon:editWeapon.value,
      cartoon: editCartoon.checked
    }
    console.log(newData)
    try {
      await charactersAPI.updateOneRegister(editId.value, newData)
      }
      catch(e){
        return editChar.classList.add('valev') 
      }
      editChar.classList.add('success')
      editForm.reset()
  }
  
  document.getElementById('new-character-form').onsubmit = async function(e){
    clearButtons()
    e.preventDefault()
    const newData = {
      name: createName.value,
      occupation: createOccupation.value,
      weapon: createWeapon.value,
      cartoon: createWeapon.checked
    }
    
    console.log(newData)
    try {
    await charactersAPI.createOneRegister(newData)
    }
    catch(e){
      return createChar.classList.add('valev') 
    }
    createChar.classList.add('success')
    editForm.reset()
  }
})


