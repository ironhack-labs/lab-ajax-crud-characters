const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(allCharacters => {
     
      allCharacters.forEach(character => {
       
        document.getElementsByClassName("name")[0].textContent= `${character.name}`;
        document.getElementsByClassName("occupation")[0].textContent= `${character.occupation}`;
        document.getElementsByClassName("cartoon")[0].textContent= `${character.cartoon}`;
        document.getElementsByClassName("weapon")[0].textContent= `${character.weapon}`;



      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {};

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
