const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  // retrieve list of characters
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          const data = response.data;

          // DOM manupulation
          let item = "";

          data.forEach((character) => {
            const { id, name, occupation, weapon, cartoon } = character;

            item += `
              <li class="character-info">
              <div class="ID" >ID: <span class="value">${id}</span></div>
              <div class="name" >Name: <span class="value">${name}</span></div>
              <div class="occupation" >Occupation: <span class="value">${occupation}</span></div>
              <div class="cartoon" >Is cartoon: <span class="value">${cartoon}</span></div>
              <div class="weapon" >Weapon: <span class="value">${weapon}</span></div>
              </li>`;
          });

          document.querySelector(".characters-container").innerHTML = item;
        })
        .catch((err) => {
          console.log("Unable to retrieve the list of characters", err);
        });
    });

  // retrieve character by ID
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const id = document.getElementById("fetch-one-id").value; // input id of item to be retrived

      charactersAPI
        .getOneRegister(id)
        .then((response) => {
          const character = response.data;
          const { id, name, occupation, weapon, cartoon } = character;
          let item = "";

          // DOM manupulation
          item += `
          <li class="character-info">
          <div class="ID" >ID: <span class="value">${id}</span></div>
          <div class="name" >Name: <span class="value">${name}</span></div>
          <div class="occupation" >Occupation: <span class="value">${occupation}</span></div>
          <div class="cartoon" >Is cartoon: <span class="value">${cartoon}</span></div>
          <div class="weapon" >Weapon: <span class="value">${weapon}</span></div>
          </li>`;
          document.querySelector(".characters-container").innerHTML = item;
        })
        .catch((err) => {
          console.log("Unable to retrieve the selected character", err);
        });
    });

  //delete character
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const id = document.getElementById("delete-one-id").value; // input id of item to be deleted

      charactersAPI
        .deleteOneRegister(id)
        .then((response) => {
          const toDelete = confirm("Are you sure you want to delete?");
          if (toDelete) {
            // button goes green to confirm visually
            document.getElementById("delete-one").style.backgroundColor =
              "green";
          }
        })
        .catch((err) => {
          // button goes red to flag error visually
          document.getElementById("delete-one").style.backgroundColor = "red";
          console.log(`Err while deleting character: ${err}`);
        });
    });

  // edit character
  //1. get all the inputs on the form
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementById("update-id").value;
      const name = document.getElementById("update-name").value;
      const occupation = document.getElementById("update-occupation").value;
      const weapon = document.getElementById("update-weapon").value;
      let cartoonTick;

      if (document.getElementById("update-cartoon").value === "on") {
        carcartoonTickoon = true;
      } else {
        cartoonTick = false;
      }

      //save new values in a variable
      const updatedCharInfo = {
        id,
        name,
        occupation,
        weapon,
        cartoonTick,
      };

      // Actual update
      charactersAPI
        .updateOneRegister(id, updatedCharInfo) //update
        .then(() => {
          //send button goes green to confirm visually
          document.getElementById("update-data").style.backgroundColor =
            "green";
        })
        .catch((err) => {
          console.log("Unable to update the character", err);
          // button goes red to flag error visually
          document.getElementById("update-data").style.backgroundColor = "red";
        });
    });

  // Add new character
  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name-input").value;
      const occupation = document.getElementById("occupation-input").value;
      const weapon = document.getElementById("weapon-input").value;
      let cartoon;

      if (document.getElementById("cartoon-input").value === "on") {
        cartoon = true;
      } else {
        cartoon = false;
      }

      const newCharInfo = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .createOneRegister(newCharInfo)
        .then(() => {
          getFullList();
          const { name, id } = response.data;
          const newCharHtml = `
            <li class="character-info">
            <div class="ID" >ID: <span class="value">${id}</span></div>
            <div class="name" >Name: <span class="value">${name}</span></div>
            <div class="occupation" >Occupation: <span class="value">${occupation}</span></div>
            <div class="cartoon" >Is cartoon: <span class="value">${cartoon}</span></div>
            <div class="weapon" >Weapon: <span class="value">${weapon}</span></div>
            </li>`;

          document.getElementById("characters-list").innerHTML += newCharHtml;

          // Clear the form after submitting:
          document.getElementById("new-character-form").reset();
          //send button goes green to confirm visually
          document.getElementById("create-data").style.backgroundColor =
            "green";
        })
        .catch((err) => {
          console.log("Could not create character!", err);
          // button goes red to flag error visually
          document.getElementById("send-data").style.backgroundColor = "red";
        });
    });
});
