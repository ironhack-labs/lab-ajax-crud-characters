const charactersAPI = new APIHandler("http://localhost:3000");
const characterContainer = document.getElementById("characters-container");
const characterToSearch = document.getElementById("character-id");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(APIRes => {
        console.log("character found");
        console.log(APIRes);
        const characters = Object.values(APIRes.data);
        fetchAll(characters);
      })
      .catch(APIErr => console.error("error in getting one character", APIErr));
  };

  document.getElementById("fetch-one").onclick = function() {
    let characterId= document.getElementById("character-id");
    charactersAPI
    .getOneRegister(characterId.value)
    .then(APIRes =>{
      console.log("character found", APIRes);
      // console.log(APIRes.data);
      fetchOne(APIRes.data);
    })
    .catch(APIErr => console.error("error in getting one character",APIErr))
  };

  document.getElementById("delete-one").onclick = function() {
    // e.preventDefault();
    let characterId= document.getElementById("character-id-delete");
    charactersAPI
    .deleteOneRegister(characterId.value)
    .then (APIRes=>{
      console.log("character deleted", APIRes);
      charactersAPI
      .getFullList()
      .then(APIRes2 => {
        console.log("character found");
        console.log(APIRes2);
        const characters = Object.values(APIRes2.data);
        fetchAll(characters); 
      })
      .catch(APIErr2 => console.error("error in getting one character", APIErr2));
    })
    .catch(APIErr=> console.error(APIErr))
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();
    console.log("character edited");
    const form = document.getElementById("edit-character-form").elements;
    let id = form["chr-id"].value;
    let name = form["name"].value;
    let occupation = form["occupation"].value;
    let weapon = form["weapon"].value;
    let cartoon = form["cartoon"].checked;
    let charachterToUpdate = {};
    
    if(name)charachterToUpdate.name = name;
    if(occupation)charachterToUpdate.occupation = occupation;
    if(weapon)charachterToUpdate.weapon = weapon;
    if(cartoon)charachterToUpdate.cartoon = cartoon;
    charactersAPI
      .updateOneRegister(id, charachterToUpdate)
      .then(APIRes => {
        console.log("character successfully updated", APIRes);
        charactersAPI
        .getFullList()
        .then(APIRes2 => {
          console.log("character found");
          console.log(APIRes2);
          const characters = Object.values(APIRes2.data);
          fetchAll(characters); 
        })
        .catch(APIErr2 => console.error("error in getting one character", APIErr2));
      })
      .catch(APIErr => {
        console.log("error in update", APIErr);
      });
    

  };

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault(); // to avoid automatic refresh
    const form = document.getElementById("new-character-form").elements;
    let name = form["name"].value;
    let occupation = form["occupation"].value;
    let weapon = form["weapon"].value;
    let checkbox = form["cartoon"].checked;
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: checkbox
    };
    charactersAPI
      .createOneRegister(newCharacter)
      .then(APIRes => {
        console.log("character successfully created",APIRes);
        charactersAPI
        .getFullList()
        .then(APIRes2 => {
          console.log("character found");
          console.log(APIRes2);
          const characters = Object.values(APIRes2.data);
          fetchAll(characters); 
        })
        .catch(APIErr2 => console.error("error in getting one character", APIErr2));
      })
      .catch(APIErr => {
        console.log("following error during posting:", APIErr);
      });
    };
});

function fetchAll(charactersArray) {
  characterContainer.innerHTML = "";
  charactersArray.forEach(character => {
    characterContainer.innerHTML += `
      <div class="character-info">
        <div class="name"> Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`;
  });
}
function fetchOne(characterFetched){
  characterContainer.innerHTML = "";
  characterContainer.innerHTML += `
      <div class="character-info">
      <div class="name"> Character Name: ${characterFetched.name}</div>
        <div class="occupation">Character Occupation:  ${characterFetched.occupation}</div>
        <div class="cartoon">Is a Cartoon:  ${characterFetched.cartoon}</div>
        <div class="weapon">Character Weapon: ${characterFetched.weapon}</div>
      </div>`;
}





