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
      const id = document.getElementsByClassName("delete-one-id").value; // input id of item to be deleted

      charactersAPI
        .deleteOneRegister(id)
        .then((response) => {
          const toDelete = confirm("Are you sure you want to delete?");
          if (toDelete) {
            alert(response.data);
            document.getElementById("delete-one").style.backgroundColor =
              "green";
          }
        })
        .catch((err) => {
          document.getElementById("delete-one").style.backgroundColor = "red";
          console.log(`Err while deleting character: ${err}`);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI
        .updateOneRegister()
        .then(() => {
          this.getFullList(); // get the array of all characters
        })
        .catch((err) => {
          console.log("Unable to update the character", err);
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
