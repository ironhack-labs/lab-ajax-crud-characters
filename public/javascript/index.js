const charactersAPI = new APIHandler("http://localhost:8000/characters");
// DOM VARIABLES
const charContainerElt = document.querySelector(".characters-container");

function displayNewChar(char) {
  charContainerElt.innerHTML += `<div class="character-info">
  ${char.id}
  <div class="name"> Character Name : ${char.name}</div> 
  <div class="occupation"> Character Occupation : ${char.occupation}</div> 
  <div class="cartoon"> Is a Cartoon? - ${char.cartoon}</div> 
  <div class="weapon"> Character Weapon : ${char.weapon} </div>
</div>`;
}

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
      console.log(charId);
      try {
        console.log("in try");
        const char = await charactersAPI.getOneRegister(charId);
        console.log(char.data);
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

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      const updateForm = document.getElementById("edit-character-form");
      const newObj = charObj(updateForm)
      console.log(newObj)
      var id = updateForm.querySelector(".id").value
      console.log(id)
      try {
        await charactersAPI.updateOneRegister(id,newObj);
        consolelog("character updated");
      } catch (err) {
        console.error(err);
      }
    });

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
