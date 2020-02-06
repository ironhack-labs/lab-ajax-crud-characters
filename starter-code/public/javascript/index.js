const charactersAPI = new APIHandler("http://localhost:8000");
let card = document.querySelector(".character-info");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      charactersAPI.getFullList().then(response => {
        console.log(response.data);
        let result = response.data;

        let generateNewCard = result.forEach((charObj, index) => {
          document.querySelector(".character-info .id span").innerText =
            charObj.id;
          document.querySelector(".character-info .name span").innerText =
            charObj.name;
          document.querySelector(".character-info .occupation span").innerText =
            charObj.occupation;
          document.querySelector(".character-info .cartoon span").innerText =
            charObj.cartoon;
          document.querySelector(".character-info .weapon span").innerText =
            charObj.weapon;

          let newCard = card.cloneNode(true);
          if (index < result.length - 1) {
            document.querySelector(".characters-container").prepend(newCard);
          }
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      let characterId = document.querySelector("#character-id").value;
      charactersAPI.getOneRegister(characterId).then(charObj => {
        document.querySelector(".characters-container").innerHTML = "";
        let newCard = card.cloneNode(true);

        document.querySelector(".characters-container").prepend(newCard);

        document.querySelector(".character-info .id span").innerText =
          charObj.data.id;
        document.querySelector(".character-info .name span").innerText =
          charObj.data.name;
        document.querySelector(".character-info .occupation span").innerText =
          charObj.data.occupation;
        document.querySelector(".character-info .cartoon span").innerText =
          charObj.data.cartoon;
        document.querySelector(".character-info .weapon span").innerText =
          charObj.data.weapon;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      let id = document.querySelector("#character-id-delete").value;
      charactersAPI
        .deleteOneRegister(id)
        .then(() => {
          document.querySelector("#delete-one").style.background = "green";
        })
        .catch(() => {
          // Wasn't sure how to check for invalid id?
          document.querySelector("#delete-one").style.background = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      let testBoolean = true;
      let id = document.querySelector("#edit-character-form .id").value;
      let obj;

      charactersAPI
        .getOneRegister(id)
        .then(charObj => {
          //
          return (obj = {
            name: document.querySelector("#edit-character-form .name").value
              ? document.querySelector("#edit-character-form .name").value
              : charObj.data.name,
            occupation: document.querySelector(
              "#edit-character-form .occupation"
            ).value
              ? document.querySelector("#edit-character-form .occupation").value
              : charObj.data.occupation,
            weapon: document.querySelector("#edit-character-form .weapon").value
              ? document.querySelector("#edit-character-form .weapon").value
              : charObj.data.weapon,
            cartoon: Boolean(
              document.querySelector("#edit-character-form .cartoon").checked
            )
          });
        })
        .then(() => {
          charactersAPI
            .updateOneRegister(id, obj)
            .then(() => {
              document.querySelector("#send-data-update").style.background =
                "green";
            })
            .catch(() => {
              document.querySelector("send-data-update").style.background =
                "red";
            });
        });

      // let editedCharacterForm = document.querySelectorAll(
      //   "#edit-character-form input"
      // );

      // let object = {};

      // editedCharacterForm.forEach(el => {
      //   if (el.name === "chr-id") {
      //     el.name = "id";
      //   }
      //   if (el.type === "checkbox") {
      //     el.value = Boolean(el.checked);
      //   }
      //   object[el.name] = el.value;
      // });

      // charactersAPI.updateOneRegister(object.id, object).then(response => {
      //   console.log(response);
      // });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      let obj = {
        name: document.querySelector("#new-character-form .name").value,
        occupation: document.querySelector("#new-character-form .occupation")
          .value,
        weapon: document.querySelector("#new-character-form .weapon").value,
        cartoon: Boolean(
          document.querySelector("#new-character-form .cartoon").checked
        )
      };

      charactersAPI
        .createOneRegister(obj)
        .then(() => {
          document.querySelector("#send-data-create").style.background =
            "green";
        })
        .catch(() => {
          document.querySelector("send-data-create").style.background = "red";
        });
    });
});
