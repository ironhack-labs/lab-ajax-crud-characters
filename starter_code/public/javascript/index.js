/* jshint esversion: 6 */
const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {


  let createElement = function (character) {
    $(".characters-container").html("");
    $(".characters-container").append(`
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="weapon">Is a cartoon: ${character.cartoon}</div>
        <div class="cartoon">${character.weapon}</div>
      </div>
    `);
  };





  document.getElementById('fetch-all').onclick = function () {
    console.log("fetch-all");
    charactersAPI.getFullList().then(characters => {
      $(".characters-container").html("");
      for (let i = 0; i < characters.length; i++) {
        $(".characters-container").append(`
              <div class="character-info">
                <div class="name">${characters[i].name}</div>
                <div class="occupation">${characters[i].occupation}</div>
                <div class="weapon">Is a cartoon: ${characters[i].cartoon}</div>
                <div class="cartoon">${characters[i].weapon}</div>
              </div>
          `);
      }
    });
  };
  
  document.getElementById('fetch-one').onclick = () => {
    console.log("fetch one");
    charactersAPI.getOneRegister()
    .then(character => {createElement(character); //character here is the object with the link and what not i think. We need to add the stuff from the ID-input. 
    }); //This method takes a function that will be passed the resolved value of the Promise once it is fulfilled.
  };

  document.getElementById('delete-one').onclick = function () {
    console.log("delete one");

  };

  document.getElementById('edit-character-form').onsubmit = function () {
    console.log("edit char ")

  };

  document.getElementById('new-character-form').onsubmit = function () {
    console.log("new char ")
  };
});