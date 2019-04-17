const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    document.querySelector(".characters-container").innerHTML = ""
    charactersAPI.getFullList().then(data => {
      console.log(data);
      data.forEach(elem => {
        
        document.querySelector(".characters-container").innerHTML += `
      <div class="character-info">
      <div class="name">Name: ${elem.name}</div>
      <div class="occupation">Character Occupation ${elem.occupation}</div>
      <div class="cartoon">Is a Cartoon: ${elem.cartoon}</div>
      <div class="weapon">Character Weapon: ${elem.weapon}</div>
    </div>`;
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    document.querySelector(".characters-container").innerHTML = ""
    let value = document.querySelector("#character-id").value;
    console.log(value);
    charactersAPI.getOneRegister(value).then(elem => {
        
        document.querySelector(".characters-container").innerHTML += `
      <div class="character-info">
      <div class="name">Name: ${elem.name}</div>
      <div class="occupation">Character Occupation ${elem.occupation}</div>
      <div class="cartoon">Is a Cartoon: ${elem.cartoon}</div>
      <div class="weapon">Character Weapon: ${elem.weapon}</div>
    </div>`;
      });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id).then(document.querySelector("#delete-one").style.color = "#ff0000").catch()
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();
    let id = document.getElementById("edit-character-form-id").value;
    let name = document.getElementById("edit-character-form-name").value;
    let occupation = document.getElementById("edit-character-form-occupation")
      .value;
    let weapon = document.getElementById("edit-character-form-weapon").value;
    let firstcartoon = document.getElementById("edit-character-form-cartoon")
      .value;
    let cartoon = `${firstcartoon}`;
    console.log(cartoon);
    cartoon = "on" ? true : false;

    var test = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    charactersAPI.updateOneRegister(test, id);
  };

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("new-character-form-name").value;
    let occupation = document.getElementById("new-character-form-occupation")
      .value;
    let weapon = document.getElementById("new-character-form-weapon").value;
    let firstcartoon = document.getElementById("new-character-form-cartoon")
      .value;
    let cartoon = `${firstcartoon}`;
    console.log(cartoon);
    cartoon = "on" ? true : false;
    // var test = `{"name": "${name}", "occupation": "${occupation}", "weapon": "${weapon}", "cartoon": ${cartoon} }`

    var test = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    console.log(test);
    charactersAPI.createOneRegister(test);
  };
});
