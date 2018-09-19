const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(result => {
      result.forEach(each => {
        console.log(each.name);
        printCharacter(each);
      });
    });
  };
  
  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("character-id").value;

    charactersAPI.getOneRegister(id);
  };
  
  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("character-id-delete").value;

    charactersAPI.deleteOneRegister(id);
  };
  
  document.getElementById("edit-character-form").onsubmit = function() {
    /*Aquí tengo que acceder a los input del html añadiendo un id 
    const prop = {
      name: $(".name").value,
      occupation: "Waste Allocation Robot",
      weapon: "Head laser",
      cartoon: "pepe"
    };
    charactersAPI.createOneRegister();*/
  };
  
  document.getElementById("new-character-form").onsubmit = function() {
    /*Aquí tengo que acceder a los input del html añadiendo un id 
    const prop = {
      name: $("").value,
      occupation: "Waste Allocation Robot",
      weapon: "Head laser",
      cartoon: "pepe"
    };
    charactersAPI.updateOneRegister(prop);*/
  };
  
  const printCharacter = char => {
    let charDiv = `<div class="character-info">
    <div class="id">ID: <span>${char._id}</span></div>
      <div class="name">Name: <span>${char.name}</span></div>
      <div class="occupation">Occupation: <span>${char.occupation}</span></div>
      <div class="weapon">Weapon: <span>${char.weapon}</span></div>
      <div class="cartoon">Cartoon: <span>${char.cartoon}</span></div>
    </div>`;
    document.getElementById("characters-container").insertAdjacentHTML('afterend', charDiv);
  };
});