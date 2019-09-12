const charactersAPI = new APIHandler("http://localhost:8000/characters")
const charContainer = document.querySelector('.characters-container')
const charName = document.getElementById('name')
const charOccupation = document.getElementById('occupation')
const charWeapon = document.getElementById('weapon')
const charCartoon = document.getElementById('cartoon')
  document.getElementById('fetch-all').onclick = async()=>{
    charContainer.innerHTML = ''
    const characters = await charactersAPI.getFullList()
    characters.forEach(character => {
     const oneChar =`
    <div class="characters-container">
    <div class="character-info">
      <div class="id">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
    </div>
    </div>
    `

    charContainer.innerHTML += oneChar
  })
  console.log(characters)
    
  }
  
  document.getElementById('fetch-one').onclick = async() =>{
    charContainer.innerHTML = ''
    const id = document.querySelector('#theCharId').value
    const character = await charactersAPI.getOneRegister(id)
    let ftOne =`
     <div class="characters-container">
     <div class="character-info">
     <div class="id">Id: ${character.id}</div>
     <div class="name">Name: ${character.name}</div>
     <div class="occupation">Occupation: ${character.occupation}</div>
     <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
     <div class="weapon">Weapon: ${character.weapon}</div>
     </div>
     </div>
     `
     charContainer.innerHTML += ftOne 
  }
  
  document.getElementById('delete-one').onclick= async() =>{
    const theId = document.querySelector('#charDelete').value
    await charactersAPI.deleteOneRegister(theId)
    document.querySelector('#delete-one').style.background = 'green'

    //.catch(()=>{
      //document.querySelector('#delete-one').style.background = 'red'
    //})
  }
  
  document.getElementById('edit-character-form').onsubmit = async(e) =>{
    e.preventDefault()
    const isCartoon = true
    if (document.querySelector('#cartoon-edit').value === false) {isCartoon = false}
    const char = {
      id: document.querySelector('#id-edit').value,
      name: document.querySelector('#name-edit').value,
      occupation: document.querySelector('#occupation-edit').value,
      weapon: document.querySelector('#weapon-edit').value,
      cartoon: isCartoon
    }
    await charactersAPI.updateOneRegister(char.id, char) 
    console.log(char)
  }
  
  document.getElementById('new-character-form').onsubmit = async(e)=>{
    e.preventDefault()
    const newCharacter = {
      name: charName.value,
      occupation: charOccupation.value,
      weapon: charWeapon.value,
      cartoon: charCartoon.value
    }
    console.log(newCharacter)
     await charactersAPI.createOneRegister(newCharacter)
 
     let newChar = `
       <div class = "name" > Character Name: ${newCharacter.name}</div>
       <div class = "occupation" > Character Occupation: ${newCharacter.occupation}</div>
       <div class = "weapon" > Character Weapon: ${newCharacter.weapon} </div>
       <div class = "cartoon" > Is a Cartoon?: ${newCharacter.cartoon}</div>
     `
     charContainer.innerHTML += newChar
  }
