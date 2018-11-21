const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  function drawCharacter(char) {
    var domDiv = document.createElement("div");
    domDiv.innerHTML = `
    <div class="character-info">
    <div class="id">Id: ${char.id}</div>
    <div class="name">Name: ${char.name}</div>
    <div class="occupation">Occupation: ${char.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
    <div class="weapon">Weapon: ${char.weapon}</div>
    </div>`;
    document.querySelector(".characters-container").append(domDiv);
  }

  function cleanDiv() {
    document.querySelector(".characters-container").innerHTML = " ";
  }


    document.getElementById("fetch-all").onclick = function() {
      cleanDiv();
      var characters = charactersAPI.getFullList();
       characters.then(characters => {
        characters.forEach(character => {
          drawCharacter(character)
        });
      });
    };
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(1)

  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: "qwe", occupation: "string", cartoon: true, weapon: "string" 
    }
    charactersAPI.createOneRegister(characterInfo)     
  }
})
