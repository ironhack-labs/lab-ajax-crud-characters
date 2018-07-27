$(document).ready( () => {
  const charactersAPI = new APIHandler("http://localhost:8000");
  document.getElementById('fetch-all').onclick = function(){
    let cont = document.getElementById("characters");
    cont.innerHTML = "";
    charactersAPI.getFullList()
      .then(data => {
        data.forEach(element => {
          cont.innerHTML += `<div class="character-info">
          <div class="name">Name : ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Cartoon : ${element.cartoon}</div>
          <div class="weapon">Name : ${element.weapon}</div> `
        });
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let cont = document.getElementById("characters");
    let intput = document.getElementById("fetch-one-input");
    let id = input.value;

    cont.innerHTML = "";
    charactersAPI.getOneRegister(id)
      .then(element => {
        cont.innerHTML += `<div class="character-info">
        <div class="name">Name : ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Cartoon : ${element.cartoon}</div>
        <div class="weapon">Name : ${element.weapon}</div>`
      })
  }
  
  document.getElementById('delete-one').onclick = function(){
        let bot = document.getElementById("delete-one");
        let id = document.getElementById("delete-one-input").value;

        charactersAPI.deleteOneRegister(id)
          .then( () => {
            bot.setAttribute("class", "btn-success");
          })
          .catch( () => {
            bot.setAttribute("class", "btn-danger");
          })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
        let bot = document.getElementById("edit-one");
        let id = document.getElementById("editCharId").value;
        let name = document.getElementById("editCharName").calue;
        let occupation = document.getElementById("editCharOccupation").value;
        let cartoon = document.getElementById("editCharCartoon").checked;
        let weapon = document.getElementById("editCharWeapon").value;
        let character = { id, name, occupation, cartoon, weapon};
          charactersAPI.updateOneRegister(character)
            .then( () => {
              bot.setAttribute("class", "btn-success");
            })
            .catch( () => {
              bot.setAttribute("class", "btn-danger");
            })
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
        let bot = document.getElementById("new-one");
        let name = document.getElementById("newCharName").value;
        let occupation = document.getElementById("newCharOccupation").value;
        let cartoon = document.getElementById("newCharCartoon").checked;
        let weapon = document.getElementById("newCharWeapon").value;
        let character = { name, occupation, cartoon, weapon};
          charactersAPI.createOneRegister(character)
            .then( () => {
              bot.setAttribute("class", "btn-success");
            })
            .catch( () => {
              bot.setAttribute("class", "btn-danger");
            })        
  }
})
