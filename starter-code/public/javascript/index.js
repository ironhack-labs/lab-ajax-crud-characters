const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = async() => {
    const characters = await charactersAPI.getFullList()
    const data = characters.data
    console.log(data)

    data.forEach(char => {
        let charHTML = `
          <div class="character-info" >
            <div class="name" > Character Name:${char.name} </div> 
            <div class="occupation" > Character Occupation: ${char.occupation} </div> 
            <div class="cartoon" > Is a Cartoon?: ${char.cartoon} </div>
            <div class="weapon" > Character Weapon: ${char.weapon} </div> 
            </div>
            `
        document.querySelector('.characters-container').innerHTML += charHTML
         })
      }

  document.getElementById('fetch-one').onclick = async()=>{
    const id = document.querySelector('input[name="character-id"]').value
    console.log(id)
    const obj =  await charactersAPI.getOneRegister(id)
    const {data} = obj
    console.log(data)
    let charHTML = `
      <div class = "name" > Character Name: ${data.name}</div>
      <div class = "occupation" > Character Occupation: ${data.occupation}</div>
      <div class = "cartoon" > Is a Cartoon?: ${data.cartoon}</div>
      <div class = "weapon" > Character Weapon: ${data.weapon} </div>
    `
    document.querySelector('.characters-container').innerHTML += charHTML
  }

  document.getElementById('delete-one').onclick = () =>{
    const id = document.querySelector('input[name="character-id-delete"]').value
    console.log(id)
    charactersAPI.deleteOneRegister(id)
  }

  document.getElementById('edit-character-form').onsubmit = async (e) => {
    e.preventDefault()
    const flag = true
    if (document.getElementById('cartoon-edit').value === false) flag = false
    const character = {
      id: document.getElementById('id-edit').value,
      name: document.getElementById('name-edit').value,
      occupation: document.getElementById('occupation-edit').value,
      cartoon: flag,
      weapon: document.getElementById('weapon-edit').value
    }
     charactersAPI.updateOneRegister(character.id, character)
  }
  
  document.getElementById('new-character-form').onsubmit = async (e) =>{
    e.preventDefault()
   const character = {
     name: document.getElementById('name-input').value,
     occupation: document.getElementById('occupation-input').value,
     cartoon: document.getElementById('cartoon-input').value,
     weapon: document.getElementById('weapon-input').value
   }
    await charactersAPI.createOneRegister(character)
    console.log(character)

    let charHTML = `
      <h3> NEW CHARACTER </h3>
      <div class = "name" > Character Name: ${name}</div>
      <div class = "occupation" > Character Occupation: ${character.occupation}</div>
      <div class = "cartoon" > Is a Cartoon?: ${character.cartoon}</div>
      <div class = "weapon" > Character Weapon: ${character.weapon} </div>
    `
    document.querySelector('.characters-container').innerHTML += charHTML
  }
 })

