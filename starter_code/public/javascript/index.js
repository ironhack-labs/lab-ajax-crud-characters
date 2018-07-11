const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    var data = charactersAPI.getFullList();
    data.then(characters => {
      console.log(characters.data);
      var el = $(".characters-container").empty()
      characters.data.forEach(function(e) {
        let el2 = $("<div>").addClass("character-info");
        let name = $("<div>").addClass("name").text("Name: " + e.name);
        let occupation = $("<div>").addClass("occupation").text("Occupation: " + e.occupation);
        let cartoon = $("<div>").addClass("cartoon").text("Is a Carton?: " + e.cartoon);
        let weapon = $("<div>").addClass("weapon").text("Occupation: " + e.weapon);
        el.append(el2)
        el2.append(name)
        el2.append(occupation)
        el2.append(cartoon)
        el2.append(weapon)
      });
    });
    // <div class="characters-container">
    //   <div class="character-info">
    //     <div class="name">Character Name</div>
    //     <div class="occupation">Character Occupation</div>
    //     <div class="cartoon">Is a Cartoon?</div>
    //     <div class="weapon">Character Weapon</div>
    //   </div>
    // </div>
  };

  document.getElementById("fetch-one").onclick = function() {
    var data = charactersAPI.getOneRegister($('input[name="character-id"]').val())
    data.then(character=> {
      console.log(character.data)
      var el = $(".characters-container").empty()
    
        let el2 = $("<div>").addClass("character-info");
        let name = $("<div>").addClass("name").text("Name: " + character.data.name);
        let occupation = $("<div>").addClass("occupation").text("Occupation: " + character.data.occupation);
        let cartoon = $("<div>").addClass("cartoon").text("Is a Carton?: " + character.data.cartoon);
        let weapon = $("<div>").addClass("weapon").text("Occupation: " + character.data.weapon);
        el.append(el2)
        el2.append(name)
        el2.append(occupation)
        el2.append(cartoon)
        el2.append(weapon)
      
    })
    data.catch(() => $(".characters-container").empty().text("this character doesn't exist"))
  };

  document.getElementById("delete-one").onclick = function() {
    var data = charactersAPI.deleteOneRegister($('input[name="character-id-delete"]').val())
    data.then(() => {$(".characters-container").empty().text("Character deleted")
      console.log("borrado")})
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    var arr = $("#edit-character-form").serializeArray()
    console.log(arr)
    var id = arr[0].value
    var crt = "false";
    if(arr[4].value == "on") ctr = "true";
    const characterInfo = {
      name: arr[1].value,
      occupation: arr[2].value,
      weapon: arr[3].value, 
      cartoon: ctr
    }
    var data = charactersAPI.updateOneRegister(id, characterInfo)
    data.then(console.log("Character edited"))
  };

  document.getElementById("new-character-form").onsubmit = function() {
    var arr = $("#new-character-form").serializeArray()
    console.log(arr)
    var crt = "false";
    if(arr[3].value == "on") ctr = "true";
    const characterInfo = {
      name: arr[0].value,
      occupation: arr[1].value,
      weapon: arr[2].value, 
      cartoon: ctr
    }
    var data = charactersAPI.createOneRegister(characterInfo)
    data.then(console.log("Character edited"))
  };
});
