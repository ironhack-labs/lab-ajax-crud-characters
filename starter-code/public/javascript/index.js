const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  const char = document.getElementById("pepe");
  document.getElementById("fetch-all").onclick = function() {

    charactersAPI.getFullList().then(data =>
      data.forEach(e => {
char.innerHTML+=
        `<div class='character-info'>
        <div class="name">Character Name: ${e.name}</div>
        <div class="occupation">Character Occupation: ${
          e.occupation
        }</div>
        <div class="cartoon">Is a Cartoon? ${e.cartoon}</div>
        <div class="weapon">Character Weapon: ${e.weapon}</div>
        `
      })
    );
  };
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI
      .getOneRegister(document.getElementById("character-id").value)
      .then(data => {
        char.innerHTML+=
        `<div class='character-info'>
        <div class="name">Character Name: ${data.name}</div>
        <div class="occupation">Character Occupation: ${
          data.occupation
        }</div>
        <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
        <div class="weapon">Character Weapon: ${data.weapon}</div>
        `
      });
  };
  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister(
      document.getElementById("character-id-delete").value
    );
  };   
  
  
  document.getElementById("edit-character-form").onsubmit = function() {
    let id = document.getElementById("chr-id").value;
    let name = document.getElementById("name").value;
    let occupation = document.getElementById("occupation").value;
    let weapon = document.getElementById("weapon").value;
    charactersAPI.updateOneRegister(id, { name, occupation, weapon });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementById("new-name").value;
    let occupation = document.getElementById("new-occupation").value;
    let weapon = document.getElementById("new-weapon").value;
    let cartoon = document.getElementById("cartoon").value;
    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
  };
});