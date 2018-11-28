const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(result=>{
      console.log(result)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const input = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(input.value)
    .then(result=>{
      console.log(result)
      input.value = ""
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    const input = document.querySelector("input[name='character-id-delete']")
    charactersAPI.deleteOneRegister(input.value)
    .then(result=>{
      console.log(result)
      input.value = ""
    })
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
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
      console.log(result)
      form.name.value = ""
      form.weapon.value = ""
      form.occupation.value = ""
      form.cartoon.checked = false
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
      console.log(result)
      form.name.value = ""
      form.weapon.value = ""
      form.occupation.value = ""
      form.cartoon.checked = false
    })             
  }
})
