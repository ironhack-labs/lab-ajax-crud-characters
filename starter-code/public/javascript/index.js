import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8000");

function cleanTheContainer() {
  document.getElementById("characters-container-id").innerHTML = "";
  
}
function createAnHtmlChar(newChar) {
  const newCharacterHtml = `
          <div class="character-info">
          <div class="name">${newChar.id}</div>
          <div class="name">${newChar.name}</div>
          <div class="occupation">${newChar.occupation}</div>
          <div class="cartoon">${newChar.cartoon}</div>
          <div class="weapon">${newChar.weapon}</div>
        </div>
          `;
  document.getElementById(
    "characters-container-id"
  ).innerHTML += newCharacterHtml;
}

function printanHtmlMessage(message) {
  const newCharacterHtml = `
        <div class="character-info">
        <div class="name">${message}</div>
      </div>
        `;
  document.getElementById(
    "characters-container-id"
  ).innerHTML += newCharacterHtml;
}
function changeButtonStyle(buttonId, state) {
  if (state == "suceeded") {
    document.getElementById(buttonId).style.backgroundColor = "green";
  } else {
    document.getElementById(buttonId).style.backgroundColor = "red";
  }
}

window.addEventListener("load", () => {
  event.preventDefault();

  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      cleanTheContainer();
      charactersAPI
        .getFullList()
        .then(dbRes => {
          for (let i = 0; i < dbRes.data.length; i++) {
            createAnHtmlChar(dbRes.data[i]);
          }
        })
        .catch(dbErr => {
          console.log(dbErr);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      cleanTheContainer();
      const theId = document.getElementById("theCharId").value;
      charactersAPI
        .getOneRegister(theId)
        .then(dbRes => {
          createAnHtmlChar(dbRes.data);
        })
        .catch(dbErr => {
          console.log(dbErr);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      cleanTheContainer();
      const theId = document.getElementById("theCharIdDelete").value;
      charactersAPI
        .deleteOneRegister(theId)
        .then(dbRes => {
          printanHtmlMessage("Character has been successfully deleted");
          changeButtonStyle("delete-one", "suceeded");
        })
        .catch(dbErr => {
          printanHtmlMessage("Character not found");
          changeButtonStyle("delete-one", "failed");
          console.log(dbErr);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      cleanTheContainer();
      event.preventDefault();
      var checkedValue = false;
      if (document.getElementById("cartoon-update").checked)
        checkedValue = true;
      const updateChar = {
        name: document.getElementById("name-update").value,
        occupation: document.getElementById("occupation-update").value,
        cartoon: checkedValue,
        weapon: document.getElementById("weapon-update").value
      };
      const theId = document.getElementById("id-update").value;
      charactersAPI
        .updateOneRegister(theId, updateChar)
        .then(dbRes => {
          createAnHtmlChar(dbRes.data);
          changeButtonStyle("update-data", "suceeded");
        })
        .catch(dbErr => {
          printanHtmlMessage(dbErr);
          changeButtonStyle("update-data", "failed");

          console.log(dbErr);
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      cleanTheContainer();
      var checkedValue = false;
      if (document.getElementById("cartoon").checked) checkedValue = true;
      const newChar = {
        name: document.getElementById("name").value,
        occupation: document.getElementById("occupation").value,
        cartoon: checkedValue,
        weapon: document.getElementById("weapon").value
      };
      charactersAPI
        .createOneRegister(newChar)
        .then(dbRes => {
          createAnHtmlChar(dbRes.data);
          changeButtonStyle("send-data", "suceeded");
        })
        .catch(dbErr => {
          printanHtmlMessage(dbErr);
          changeButtonStyle("send-data", "failed");

          console.log(dbErr);
        });
    });
});
