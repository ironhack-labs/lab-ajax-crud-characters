const charactersAPI = new APIHandler("http://localhost:8000/characters");
// DOM VARIABLES
const charContainerElt = document.querySelector(".characters-container");

// CREATES A NEW DIV WITH THE CHARACTER INFORMATIONS
function displayNewChar(char) {
  charContainerElt.innerHTML += `<div class="character-info">
  <div class="data_id"> ${char.id} </div>
  <div class="name"> Character Name : <span class="data"> ${char.name} </span></div> 
  <div class="occupation"> Character Occupation : <span class="data"> ${char.occupation} </span></div> 
  <div class="cartoon"> Is a Cartoon? - <span class="data"> ${char.cartoon} </span></div> 
  <div class="weapon"> Character Weapon : <span class="data"> ${char.weapon} </span> </div>
</div>`;
}

// CREATES A FORMATED OBJECT THAT SUITS THE charactersAPI MODEL
function charObj(Elt) {
  const name = Elt.querySelector(".name").value;
  const occupation = Elt.querySelector(".occupation").value;
  const weapon = Elt.querySelector(".weapon").value;
  var cartoon;
  Elt.querySelector(".cartoon").checked ? (cartoon = true) : (cartoon = false);
  const newObj = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon,
  };
  console.log(newObj);
  return newObj;
}

// RETRIVES THE ID INPUT VALUE IN "SEARCH BY ID" AND "DELETE BY ID" - in this case, cannot be used with the multiple inputs forms, could be optimized by applying an .id class to the input so it can be used in all document
function retrieveId(event) {
  const input = event.target.parentElement.querySelector("input");
  const charId = input.value;
  return charId;
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const allCharDb = await charactersAPI.getFullList();
        const allChar = allCharDb.data;
        console.log(allChar);
        charContainerElt.innerHTML = "";
        allChar.forEach((char) => {
          displayNewChar(char);
        });
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const charId = retrieveId(event);
      //console.log(charId);
      try {
        //console.log("in try");
        const char = await charactersAPI.getOneRegister(charId);
        //console.log(char.data);
        charContainerElt.innerHTML = "";
        displayNewChar(char.data);
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      const charId = retrieveId(event);
      //console.log(charId);
      try {
        await charactersAPI.deleteOneRegister(charId);
        //console.log("character deleted");
      } catch (err) {
        //console.error(err);
      }
    });


    // at the moment, the edit form takes all inputs as are, so if some are blanks, the original data keys will be linked to empty string values. an optimization would be to check if the input has a value and if not : ignore the key/value  OR replace the value with the original data value.  Sorry i was a bit tired and didn't go through with this implementation because it requires to change the charObj function.
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      const updateForm = document.getElementById("edit-character-form");
      const newObj = charObj(updateForm);
      console.log(newObj);
      var id = updateForm.querySelector(".id").value;
      console.log(id);
      try {
        await charactersAPI.updateOneRegister(id, newObj);

        consolelog("character updated");
      } catch (err) {
        console.error(err);
      }
    });


    // same goes for empty input for this form, but it seems a bit less sensitive if the new data has some falsy values
  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      const createForm = document.getElementById("new-character-form");
      const newObj = charObj(createForm);
      //console.log(newObj);

      try {
        //console.log("in try");
        const newChar = await charactersAPI.createOneRegister(newObj);
        //console.log("new char created!");
        console.log(newChar);
      } catch (err) {
        //console.error(err);
      }
    });
});
