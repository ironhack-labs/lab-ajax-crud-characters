const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function (){
    document.querySelector("#characters-container").innerHTML = ""
    charactersAPI.getFullList()
    .then(list => {
     list.forEach(element => {
       let {name, occupation, weapon, cartoon} = element;
       let x = `no`

       if(cartoon) {x = `yes`}
       
       let card = `<div class="character-info">
        <div class="name">Name: ${name}</div>
        <div class="occupation">Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon: ${x}</div>
        <div class="weapon">Weapon: ${weapon}</div></div>`
        document.querySelector("#characters-container").innerHTML += card;
     });
    })
    .catch(err=>console.log(err))
  }
  
  
  document.getElementById('fetch-one').onclick = function(){
    document.querySelector("#characters-container").innerHTML = ""
    let id = document.querySelector("#character-id")

    charactersAPI.getOneRegister (id.value)
    .then(element => {
      let {name, occupation, weapon, cartoon} = element;

      let x = `no`

      if(cartoon) {x = `yes`}
      
      let card = `<div class="character-info">
       <div class="name">Name: ${name}</div>
       <div class="occupation">Occupation: ${occupation}</div>
       <div class="cartoon">Is a Cartoon: ${x}</div>
       <div class="weapon">Weapon: ${weapon}</div></div>`
       document.querySelector("#characters-container").innerHTML = card;
       document.querySelector("#character-id").value = ""
    })
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector("#character-id-delete")

    charactersAPI.deleteOneRegister(id.value)
    id.value = ""
  }
  
  document.getElementById('edit-character-form').onsubmit = (event) => {
    event.preventDefault();

    let id = document.querySelector("#character-id-update")

    let updatedCharacter = {
      "name": document.querySelector("#edit-character-form input[name=name]").value,
      "occupation": document.querySelector("#edit-character-form input[name=occupation]").value,
      "weapon": document.querySelector("#edit-character-form input[name=weapon]").value,
      "cartoon": document.querySelector("#edit-character-form input[name=cartoon]").value,
    }

    charactersAPI.updateOneRegister(id.value, updatedCharacter)
    document.querySelector("#edit-character-form input[name=name]").value = ""
    document.querySelector("#edit-character-form input[name=occupation]").value = ""
    document.querySelector("#edit-character-form input[name=weapon]").value = ""
    id.value = ""
  }
  
  document.getElementById('new-character-form').onsubmit = (event) => {

    event.preventDefault();
    
    let newCharacter = {
      "name": document.querySelector("#new-character-form input[name=name]").value,
      "occupation": document.querySelector("#new-character-form input[name=occupation]").value,
      "weapon": document.querySelector("#new-character-form input[name=weapon]").value,
      "cartoon": document.querySelector("#new-character-form input[name=cartoon]").value,
    }
    
    charactersAPI.createOneRegister(newCharacter)
     document.querySelector("#new-character-form input[name=name]").value = "" 
     document.querySelector("#new-character-form input[name=occupation]").value = ""
     document.querySelector("#new-character-form input[name=weapon]").value = ""
     document.querySelector("#new-character-form input[name=cartoon]").value = ""
  }
})
