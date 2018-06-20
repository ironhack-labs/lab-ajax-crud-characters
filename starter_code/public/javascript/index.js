const charactersAPI = new APIHandler("http://localhost:8000");

function objectifyForm(formArray) {
  let returnArray = {};
  for (let i = 0; i < formArray.length; i++) {
    if (formArray[i]["name"] !== "chr-id")
      returnArray[formArray[i]["name"]] = formArray[i]["value"];
    else returnArray.id = formArray[i]["value"];
    if (formArray[i]["name"] === "cartoon") returnArray.cartoon = true;
    else returnArray.cartoon = false;
  }
  return returnArray;
}
// can't get this to work for both fetch all and fetch one
function showCharacter(chr) {
  console.log(typeof chr) 
  if (Array.isArray(chr)) {
    $(".characters-container").html("");
    let html = ""
    chr.forEach(elem => {
      html +=`<div class="character-info"><div class="name">Name: ${elem.name}</div>`;
      html += `<div class="occupation">Occupation: ${elem.occupation}</div>`;
      html += `<div class="cartoon">Cartoon: ${elem.cartoon}</div>`;
      html += `<div class="weapon">Weapon: ${elem.weapon}</div></div>`;
    });
    $(".characters-container").append(html);
  }
  else 
    $(".character-info").html(`<div class="name">Name: ${chr.name}</div>
    <div class="occupation">Occupation: ${chr.occupation}</div>
    <div class="cartoon">Cartoon: ${chr.cartoon}</div>
    <div class="weapon">Weapon: ${chr.weapon}</div>`);
}

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(characters => {
      showCharacter(characters);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI
      .getOneRegister(document.getElementById("chr_id").value)
      .then(characters => {
        showCharacter(characters);
      });
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister(document.getElementById("del_id").value);
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let chr = objectifyForm($(this).serializeArray());
    showCharacter(chr);
    charactersAPI.updateOneRegister(chr);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let chr = objectifyForm($(this).serializeArray());
    showCharacter(chr);
    charactersAPI.createOneRegister(chr);
  };
});
