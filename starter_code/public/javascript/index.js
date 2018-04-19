const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    let container = document.getElementsByClassName('characters-container')
    charactersAPI.getFullList().then( data => {
      container[0].innerHTML = '';
      data.forEach(e => {
      container[0].innerHTML += `<div class="character-info col-sm-4"><div class="id">Id: <span>${e.id}</span></div><div class="name">Name: <span>${e.name}</span></div><div class="occupation">Occupation: <span>${e.occupation}</span></div><div class="cartoon">Is a cartoon?: <span>${e.cartoon}</span></div><div class="weapon">Weapon: <span>${e.weapon}</span></div></div>`;
    })
  })
  }
  
  document.getElementById('fetch-one').onclick = function(){
      let container = document.getElementsByClassName('characters-container')
      let id = document.getElementById("character-id").value;
      charactersAPI.getOneRegister(id).then( data => {
        container[0].innerHTML = '';
        container[0].innerHTML = `<div class="character-info col-sm-4"><div class="id">Id: <span>${data.id}</span></div><div class="name">Name: <span>${data.name}</span></div><div class="occupation">Occupation: <span>${data.occupation}</span></div><div class="cartoon">Is a cartoon?: <span>${data.cartoon}</span></div><div class="weapon">Weapon: <span>${data.weapon}</span></div></div>`;
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let button = document.getElementById("delete-one");
    let id = document.getElementById("character-id-delete").value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        button.setAttribute("class", "success");
      })
      .catch(() => {
        button.setAttribute("class", "error");
      });
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let button = document.getElementById("update-data");
    let id = document.getElementById("edit-id").value;
    let name = document.getElementById("edit-name").value;
    let occupation = document.getElementById("edit-occupation").value;
    let weapon = document.getElementById("edit-weapon").value;
    let cartoon = document.querySelector("#edit-cartoon").checked;
    let character = { id, name, occupation, weapon, cartoon };
    charactersAPI
      .updateOneRegister(id, character)
      .then(() => {
        button.setAttribute("class", "success");
      })
      .catch(() => {
        button.setAttribute("class", "error");
      });
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
