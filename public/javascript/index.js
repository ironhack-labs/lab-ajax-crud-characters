const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const container=document.querySelector(".characters-container");
      charactersAPI
        .getFullList()
        .then((characters) => {
          characters.forEach(element => {
            container.innerHTML += `
            <div class="character-info">
            <div class="name">Character Name: ${element.name}</div>
            <div class="occupation">Character Occupation:${element.occupation}</div>
            <div class="cartoon">Is a Cartoon?${element.cartoon}</div>
            <div class="weapon">Character Weapon:${element.weapon}</div>
            </div>`;
            
          });
          console.log("All characters:", characters);
        })
        .catch((error) => {
          console.error("Error fetching all characters:", error);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
       const characterId = document.getElementById("getOne").value;
       const container=document.querySelector(".characters-container");
       container.innerHTML = "";
       console.log(characterId);
       
       charactersAPI
       .getOneRegister(characterId)
       .then((character) => {
        container.innerHTML=`
        <div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation:${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?${character.cartoon}</div>
        <div class="weapon">Character Weapon:${character.weapon}</div>
        </div>`
        ;
           console.log("One character:", character);
         })
         .catch((error) => {
          characterInfo.innerHTML = `<p>Error: ${error.message}</p>`;
          console.error("Error fetching one character:", error);
        });



    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      try {
        const characterId = document.getElementById("character-id").value;
        console.log(characterId);
        const response = await charactersAPI.deleteOneRegister(characterId);
        //console.log(response);

      } catch (error) {
        console.error("Error deleting character by ID:", error);
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const form = document.getElementById("edit-character-form");
      const id = form.querySelector('input[name="chr-id"]').value;
      const name = form.querySelector('input[name="name"]').value;
      const occ = form.querySelector('input[name="occupation"]').value;
      const weapon = form.querySelector('input[name="weapon"]').value;
      const check = form.querySelector('input[name="cartoon"]').checked;
      const data = {
        "name": name,
        "occupation": occ,
        'weapon': weapon,
        "check": check,
      };
      try {
        await charactersAPI.updateOneRegister(id, data);
      } catch (error) {
        console.error("Error editing character by ID:", error);
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const name = document.getElementById("add-name").value;
        console.log(name);
        const occ = document.getElementById("add-occ").value;
        const weapon = document.getElementById("add-weapon").value;
        const check = document.getElementById("add-check").checked;
        const data = {
          "name": name,
          "occupation": occ,
          "weapon": weapon,
          "check": check,
        };
        await charactersAPI.createOneRegister(data);
       
      } catch (error) {
        console.error("Error creating new character:", error);
      }
    });
});
