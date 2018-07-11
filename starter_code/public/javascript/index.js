const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com/characters"
);

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    $(section1).empty();
    charactersAPI.getFullList()
    .then(data => {
      console.log(data);
      data.forEach(data => {
        let isCartoon = true;
        if (data.debt == true) {
          isCartoon = "Yes";
        } else if (data.debt == false) {
          isCartoon = "No";
        }
        let section = $("#section1");
        let info = $("<div>").addClass("character-info");
        let id = $("<div>").addClass("id").text(`Id: ${data.id}`);
        let name = $("<div>").addClass("name").text(`Character Name: ${data.name}`);
        let occupation = $("<div>").addClass("occupation").text(`Character Occupation ${data.occupation}`);
        let cartoon = $("<div>").addClass("cartoon").text(`Is a Cartoon? ${isCartoon}`);
        let weapon = $("<div>").addClass("weapon").text(`Character Weapon ${data.weapon}`);
        section.prepend(info)
        info.append(id).append(name).append(occupation).append(cartoon).append(weapon);
      });
    });
  };


  document.getElementById("fetch-one").onclick = function() {
    console.log($("#character-id").val());
    $(section1).empty();
    charactersAPI.getOneRegister($("#character-id").val())
      .then(char => {
        console.log(char);
        let isCartoon = true;
        if (char.debt == true) {
          isCartoon = "Yes";
        } else if (char.debt == false) {
          isCartoon = "No";
        }
        let section = $("#section1");
        let info = $("<div>").addClass("character-info");
        let id = $("<div>").addClass("id").text(`Id: ${char.id}`);
        let name = $("<div>").addClass("name").text(`Character Name: ${char.name}`);
        let occupation = $("<div>").addClass("occupation").text(`Character Occupation ${char.occupation}`);
        let cartoon = $("<div>").addClass("cartoon").text(`Is a Cartoon? ${isCartoon}`);
        let weapon = $("<div>").addClass("weapon").text(`Character Weapon ${char.weapon}`);
        section.prepend(info);
        info.append(id).append(name).append(occupation).append(cartoon).append(weapon);
      });
  };


  document.getElementById("delete-one").onclick = function() {
    $(section1).empty();
    console.log($("#character-id-delete").val());
    let id = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(id)
      .then(() => {console.log("Character deleted");})
      .catch(() => {console.log("Error");});
  };


  document.getElementById("edit-character-form").onsubmit = function() {
    let name = $("#editName").val();
    let occupation = $("#editOccupation").val();
    let weapon = $("#editWeapon").val();
    let id = $("#editId").val();

    let isCartoon = true;
    if ($("#editCartoon").val() == "on") {
      isCartoon = true;
    } else if ($("editCartoon").val() == "off") {
      isCartoon = false;
    }
    let char = {
      name: name,
      occupation: occupation,
      debt: isCartoon,
      weapon: weapon
    };

    console.log(char);

    charactersAPI.updateOneRegister(id,char)
      .then(() => {console.log("Character Edited")})
      .catch(() => {console.log("Error")});
      return false;
  };


  document.getElementById("new-character-form").onsubmit = function() {
    let name = $("#newName").val();
    let occupation = $("#newOccupation").val();
    let weapon = $("#newWeapon").val();

    let isCartoon = true;
    if ($("#newCartoon").val() == "on") {
      isCartoon = true;
    } else if ($("#newCartoon").val() == "off") {
      isCartoon = false;
    }

    let char = {
      name: name,
      occupation: occupation,
      debt: isCartoon,
      weapon: weapon
    };

    // console.log(char);

    charactersAPI.createOneRegister(char)
      .then(() => {console.log("Character created")})
      .catch(() => {console.log("Error")});
      return false;
  };


});

let crear = function() {
  let name = $("#newName").val();
  let occupation = $("#newOccupation").val();
  let weapon = $("#newWeapon").val();
  
  let isCartoon = true;
  if ($("#newCartoon").val() == "on") {
    isCartoon = true;
  } else if ($("#newCartoon").val() == "off") {
    isCartoon = false;
  }
  
  let char = {
    name: name,
    occupation: occupation,
    debt: isCartoon,
    weapon: weapon
  };
    
  // for( i = 0; i < 10; i++ ){
    charactersAPI.createOneRegister(char)
    .then(() => {console.log("Character created")})
    .catch(() => {console.log("Error")});
  // }
    return false;
}