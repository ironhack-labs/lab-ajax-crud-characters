const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    $(".characters-container").empty();
    charactersAPI.getFullList()
    .then(data => {
      data.forEach(character => {
        let infoBox = $("<div class='character-info'>");
        let name = `<div class="name">Character Name: ${character.name}</div>`;
        let occupation = `<div class="occupation">Character Occupation: ${character.occupation}</div>`;
        let cartoon = `<div class="cartoon">Is a Cartoon? ${character.cartoon}</div>`;
        let weapon = `<div class="weapon">Character Weapon: ${character.weapon}</div>`;
        infoBox.append(name);
        infoBox.append(occupation);
        infoBox.append(cartoon);
        infoBox.append(weapon);
        $(".characters-container").append(infoBox);
      });
    })
  }
 
  document.getElementById('fetch-one').onclick = function(){
    $(".characters-container").empty();
    let id = $("#character-id").val();

    charactersAPI.getOneRegister(id)
    .then(data => {
      let infoBox = $("<div class='character-info'>");
      let name = `<div class="name">Character Name: ${data.name}</div>`;
      let occupation = `<div class="occupation">Character Occupation: ${data.occupation}</div>`;
      let cartoon = `<div class="cartoon">Is a Cartoon? ${data.cartoon}</div>`;
      let weapon = `<div class="weapon">Character Weapon: ${data.weapon}</div>`;
      infoBox.append(name);
      infoBox.append(occupation);
      infoBox.append(cartoon);
      infoBox.append(weapon);
      $(".characters-container").append(infoBox);
    });
  };
  
  document.getElementById('delete-one').onclick = function(){
    let id = $("#character-id-delete").val();

    charactersAPI.deleteOneRegister(id)
      .then(() => {
        $(".characters-container").empty();
      })
      .catch(() => console.log("Deleting error!"));
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    
  };
});