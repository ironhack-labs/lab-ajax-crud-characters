const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    gettAll()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const input = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(input.value)
    .then(result=>{
      input.value = ""
      const container = document.querySelector(".cards-container")
      container.innerHTML = ""
      container.innerHTML = `
        <div class="characters-container">
          <div class="character-info">
            <div class="charid">ID: ${result.data.id}</div>
            <div class="name">Name: ${result.data.name}</div>
            <div class="occupation">Occupation: ${result.data.occupation}</div>
            <div class="cartoon">Cartoon: ${result.data.cartoon}</div>
            <div class="weapon">Weapon: ${result.data.weapon}</div>
          </div>
        </div>
        `
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    const input = document.querySelector("input[name='character-id-delete']")
    charactersAPI.deleteOneRegister(input.value)
    .then(result=>{
      input.value = ""
      gettAll()
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    editCharacter(e)
  }

  function gettAll(){
    charactersAPI.getFullList()
    .then(result=>{
      const container = document.querySelector(".cards-container")
      container.innerHTML = ""
      result.data.forEach(character => {
        container.innerHTML += `
        <div class="characters-container">
          <div class="character-info">
            <div class="charid">ID: ${character.id}</div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>
        </div>
        `
      });
    }).catch(e=>console.log(e))
  }

  function editCharacter(e){
    const form = document.querySelector("#edit-character-form")
    const id = form.chrid.value
    let character = {
      name:form.name.value,
      occupation:form.occupation.value,
      weapon:form.weapon.value,
      cartoon:form.cartoon.checked
    }
    charactersAPI.updateOneRegister(id,character)
    .then(result=>{
      form.name.value = ""
      form.weapon.value = ""
      form.occupation.value = ""
      form.cartoon.checked = false
      gettAll()
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const form = document.querySelector("#new-character-form")
    let character = {
      name:form.name.value,
      occupation:form.occupation.value,
      weapon:form.weapon.value,
      cartoon:form.cartoon.checked
    }
    charactersAPI.createOneRegister(character)
    .then(result=>{
      form.name.value = ""
      form.weapon.value = ""
      form.occupation.value = ""
      form.cartoon.checked = false
      gettAll()
    })             
  }
})
