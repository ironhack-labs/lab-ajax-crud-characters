import { APIHandler } from "./APIHandler.js";
const characterContainer = document.querySelector(".characters-container");
const characterInfo = document.querySelector(".character-info");
const fetchOneid = document.getElementById("fetch-one-id");
const deleteInput = document.getElementById("delete");
const deleteBtn = document.getElementById("delete-one");
const sendBtn = document.getElementById("send-data");
const editBtn = document.getElementById("send-datas");

function printCharacterInfo(character) {
  characterInfo.style.display = "none";
  characterContainer.innerHTML += `<div class="character-real-info"><div class="name">Id: ${character.id} </div>
<div class="name">Name: ${character.name} </div>
<div class="occupation">Occupation:  ${character.occupation} </div>
<div class="cartoon">Is a Cartoon?: ${character.cartoon} </div>
<div class="weapon">Weapon: ${character.weapon} </div></div>`;
}

function replaceCharacters() {
  charactersAPI
    .getFullList()
    .then(APIRes => {
      document.querySelector(".characters-container").innerHTML = "";
      APIRes.data.forEach(character => {
        printCharacterInfo(character);
      });
    })
    .catch(APIErr => {
      console.log(APIErr);
    });
}

console.log(name);

const charactersAPI = new APIHandler("http://localhost:8000/characters");

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
    .getFullList()
    .then(APIRes => {
      APIRes.data.forEach(character => {
        printCharacterInfo(character);
      });
    })
    .catch(APIErr => {
      console.log(APIErr);
    });
};

document.getElementById("fetch-one").onclick = function() {
  charactersAPI
    .getOneRegister(fetchOneid.value)
    .then(APIRes => {
      characterInfo.style.display = "none";
      const div = document.createElement("div");
      document.getElementById("fetchOneContainer").appendChild(div);
      div.classList.add("character-real-info");
      div.innerHTML = `<div class="name">Id: ${APIRes.data.id} </div>
      <div class="name">Name: ${APIRes.data.name} </div>
      <div class="occupation">Occupation:  ${APIRes.data.occupation} </div>
      <div class="cartoon">Is a Cartoon?: ${APIRes.data.cartoon} </div>
      <div class="weapon">Weapon: ${APIRes.data.weapon} </div>`;
    })
    .catch();
};

document.getElementById("delete-one").onclick = function(event) {
  event.preventDefault();
  charactersAPI
    .deleteOneRegister(deleteInput.value)
    .then(APIRes => {
      deleteBtn.style.backgroundColor = "green";
      replaceCharacters();
    })
    .catch(Err => {
      deleteBtn.style.backgroundColor = "red";
    });
};

document.getElementById("edit-character-form").onsubmit = function(event) {
  event.preventDefault();
  const form = document.getElementById("edit-character-form").elements;
  var id = form["chr-id"].value;
  var name = form["name"].value;
  var occupation = form["occupation"].value;
  var weapon = form["weapon"].value;
  var cartoon = form["cartoon"].checked;

  if (name !== "") {
    charactersAPI
      .updateOneRegister(id, { name: name })
      .then(APIRes => {
        editBtn.style.backgroundColor = "green";
      })
      .catch(Err => {
        editBtn.style.backgroundColor = "red";
      });
  }
  if (occupation !== "") {
    charactersAPI
      .updateOneRegister(id, { occupation: occupation })
      .then(APIRes => {
        editBtn.style.backgroundColor = "green";
      })
      .catch(Err => {
        editBtn.style.backgroundColor = "red";
      });
  }
  if (weapon !== "") {
    charactersAPI
      .updateOneRegister(id, { weapon: weapon })
      .then(APIRes => {
        editBtn.style.backgroundColor = "green";
      })
      .catch(Err => {
        editBtn.style.backgroundColor = "red";
      });
  }

  charactersAPI.updateOneRegister(id, { cartoon: cartoon }).then(APIRes => {
    editBtn.style.backgroundColor = "green";
    replaceCharacters();
  });
};

document.getElementById("new-character-form").onsubmit = function(event) {
  event.preventDefault();
  const form = document.getElementById("new-character-form").elements;
  var name = form["name"].value;
  var occupation = form["occupation"].value;
  var weapon = form["weapon"].value;
  var cartoon = form["cartoon"].checked;
  const model = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon
  };
  charactersAPI
    .createOneRegister(model)
    .then(APIRes => {
      sendBtn.style.backgroundColor = "green";
      replaceCharacters();
    })
    .catch(Err => {
      sendBtn.style.backgroundColor = "red";
      console.log(Err);
    });
};
