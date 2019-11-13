const charactersAPI = new APIHandler("http://localhost:8000");

function plug(char) {
  return (tpl = `<div class="character-info">
    <div class="name">${char.name}</div>
    <div class="occupation">${char.occupation}</div>
    <div class="cartoon">${char.cartoon}</div>
    <div class="weapon">${char.weapon}</div>
  </div>`);
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      charactersAPI
        .getFullList()
        .then(dbRes => {
          const characters = dbRes.data;
          var tpl = "";
          characters.forEach(char => {
            tpl += plug(char);
          });
          const container = document.querySelector(".characters-container");
          container.innerHTML = tpl;
        })
        .catch(dbErr => console.log(dbErr));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      const containerId = document.querySelector("#container-id");
      var id = containerId.value;
      charactersAPI
        .getOneRegister(id)
        .then(dbRes => {
          var character = dbRes.data;
          var tpl = "";
          const container = document.querySelector(".characters-container");
          container.innerHTML = plug(character);
        })
        .catch(dbErr => console.log(dbErr));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      const containerId = document.querySelector("#container-delete-id");
      var id = containerId.value;

      const btnDelete = document.querySelector("#delete-one");

      charactersAPI
        .deleteOneRegister(id)
        .then((btnDelete.style.backgroundColor = "green"))
        .catch(dbErr => {
          btnDelete.style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const btnEdit = document.querySelector("#send-data-edit");
      const id = document.querySelector("#edit-id").value;

      const name = {
        dom: document.querySelector("#edit-name").value,
        str: "name"
      };
      const occupation = {
        dom: document.querySelector("#edit-occupation").value,
        str: "occupation"
      };
      const weapon = {
        dom: document.querySelector("#edit-weapon").value,
        str: "weapon"
      };
      const cartoon = {
        dom: document.querySelector("#edit-cartoon").checked,
        str: "cartoon"
      };

      function findValue(element) {
        if (element.dom === "") {
          charactersAPI.getOneRegister(id).then(apiRes => {
            return apiRes.data.element.str;
          });
        } else {
          return element.dom;
        }
      }
      var updateCharacter = {
        name: findValue(name),
        occupation: findValue(occupation),
        weapon: findValue(weapon),
        cartoon: findValue(cartoon)
      };
      charactersAPI
        .updateOneRegister(updateCharacter, id)
        .then((btnEdit.style.backgroundColor = "green"))
        .catch(dbErr => {
          btnEdit.style.backgroundColor = "red";
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const btnCreate = document.querySelector("#send-data-create");
      const name = document.querySelector("#new-name").value;
      const occupation = document.querySelector("#new-occupation").value;
      const weapon = document.querySelector("#new-weapon").value;
      const cartoon = document.querySelector("#new-cartoon").value;

      var newCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      charactersAPI
        .createOneRegister(newCharacter)
        .then((btnCreate.style.backgroundColor = "green"))
        .catch(dbErr => {
          btnCreate.style.backgroundColor = "red";
        });
    });
});
