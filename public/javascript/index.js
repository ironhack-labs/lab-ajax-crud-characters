const charactersAPI = new APIHandler("http://localhost:8000");
const charactersContainerElement = document.querySelector(".characters-container");
const characterInfoTemplateElement = document.querySelector("#character-info-template");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function (event) {
    charactersAPI
      .getFullList()
      .then((response) => {
        const characters = response.data;
        charactersContainerElement.innerHTML = "";

        characters.forEach((character) => {
          const characterInfoElement = characterInfoTemplateElement.content.cloneNode(true);
          characterInfoElement.querySelector(".character-info .id-value").innerHTML = character.id;
          characterInfoElement.querySelector(".character-info .name-value").innerHTML =
            character.name;
          characterInfoElement.querySelector(".character-info .occupation-value").innerHTML =
            character.occupation;
          characterInfoElement.querySelector(".character-info .cartoon-value").innerHTML =
            character.cartoon;
          characterInfoElement.querySelector(".character-info .weapon-value").innerHTML =
            character.weapon;

          charactersContainerElement.appendChild(characterInfoElement);
        });
      })
      .catch((error) => console.log("error when fetching list of characters", error));
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {
    const idToSearchElement = document.querySelector(".operation input[name='character-id']");

    if (idToSearchElement && idToSearchElement.value)
      charactersAPI
        .getOneRegister(idToSearchElement.value)
        .then((response) => {
          const character = response.data;
          charactersContainerElement.innerHTML = "";
          const characterInfoElement = characterInfoTemplateElement.content.cloneNode(true);
          characterInfoElement.querySelector(".character-info .id-value").innerHTML = character.id;
          characterInfoElement.querySelector(".character-info .name-value").innerHTML =
            character.name;
          characterInfoElement.querySelector(".character-info .occupation-value").innerHTML =
            character.occupation;
          characterInfoElement.querySelector(".character-info .cartoon-value").innerHTML =
            character.cartoon;
          characterInfoElement.querySelector(".character-info .weapon-value").innerHTML =
            character.weapon;

          idToSearchElement.innerHTML = "";
          charactersContainerElement.appendChild(characterInfoElement);
        })
        .catch((error) => console.log("error when fetching one element by id", error));
  });

  document.getElementById("delete-one").addEventListener("click", function (event) {
    event.preventDefault;
    const idToDelete = document.querySelector(".operation input[name='character-id-delete']");
    if (idToDelete && idToDelete.value)
      charactersAPI
        .deleteOneRegister(idToDelete.value)
        .then(() => console.log("delete success"))
        .catch((error) => console.log("error when deleting", error));
  });

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const idToUpdate = document.querySelector("#edit-character-form input[name='chr-id']");
    const updateForm = document.querySelector("#edit-character-form");

    if (idToUpdate && idToUpdate.value) {
      charactersAPI
        .updateOneRegister(idToUpdate.value, {
          name: updateForm.elements["name"].value,
          occupation: updateForm.elements["occupation"].value,
          weapon: updateForm.elements["weapon"].value,
          cartoon: updateForm.elements["cartoon"].checked,
        })
        .then(() => {
          updateForm.reset();
          updateForm.elements["send-data"].style.backgroundColor = "green";
        })
        .catch((error) => {
          updateForm.elements["send-data"].style.backgroundColor = "red";
          console.log("error when updating", error);
        });
    }
  });

  document.getElementById("new-character-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const newForm = document.querySelector("#new-character-form");

    charactersAPI
      .createOneRegister({
        name: newForm.elements["name"].value,
        occupation: newForm.elements["occupation"].value,
        weapon: newForm.elements["weapon"].value,
        cartoon: newForm.elements["cartoon"].checked,
      })
      .then(() => {
        newForm.reset();
        newForm.elements["send-data"].style.backgroundColor = "green";
      })
      .catch((error) => {
        updateForm.elements["send-data"].style.backgroundColor = "red";
        console.log("error when updating", error);
      });
  });
});
