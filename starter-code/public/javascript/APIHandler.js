const baseUrl = "http://localhost:8000/characters";
let charactersContainer = document.getElementsByClassName(
  "characters-container"
)[0];
let characterInfo = document.getElementsByClassName("character-info")[0];
let charaName = document.getElementsByClassName("name");

//inputs
let charaId = document.getElementById("character-id").value;

//Buttons
let getAllBtn = document.getElementById("fetch-all");
let getOneBtn = document.getElementById("fetch-one");
let deleteOneBtn = document.getElementById("delete-one");

//Forms
let createForm = document.getElementById("new-character-form");
let createFormBtn = document.getElementById("send-data");
let editForm = document.getElementById("edit-character-form");
let editFormBtn = document.getElementById("update-data");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(baseUrl)
      .then(response => {
        let data = response.data;
        console.log(data.length);
        charactersContainer.innerHTML = "";
        data.forEach(function(chara) {
          var characterInfo = document.createElement("DIV");
          characterInfo.classList.add("character-info");

          var name = document.createTextNode(chara.name);
          var characterName = document.createElement("DIV");
          characterName.classList.add("name");
          characterName.appendChild(name);

          var occupation = document.createTextNode(chara.occupation);
          var characterOccupation = document.createElement("DIV");
          characterOccupation.classList.add("occupation");
          characterOccupation.appendChild(occupation);

          var isCartoon = document.createTextNode(chara.cartoon);
          var characterIsCartoon = document.createElement("DIV");
          characterIsCartoon.classList.add("cartoon");
          characterIsCartoon.appendChild(isCartoon);

          var weapon = document.createTextNode(chara.weapon);
          var characterWeapon = document.createElement("DIV");
          characterWeapon.classList.add("weapon");
          characterWeapon.appendChild(weapon);

          characterInfo.appendChild(characterName);
          characterInfo.appendChild(characterOccupation);
          characterInfo.appendChild(characterIsCartoon);
          characterInfo.appendChild(characterWeapon);
          charactersContainer.appendChild(characterInfo);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getOneRegister() {
    if (charaId === "") {
      console.log(null);
    } else {
      axios
        .get(`http://localhost:8000/characters/${charaId}`)
        .then(response => {
          let chara = response.data;
          let keys = Object.keys(chara);
          let values = Object.values(chara);
          let characterInfo = document.getElementsByClassName(
            "character-info"
          )[0];
          characterInfo.style.width = "50%";
          charactersContainer.innerHTML = `
      <div class="character-info">
      <div class="list-container">
        <ul>
        <li>${keys[0]}: </li>
        <li>${keys[1]}: </li>
        <li>${keys[2]}: </li>
        <li>${keys[3]}: </li>
        <li>${keys[4]}: </li>
        </ul>

        <ul>
        <li>${values[0]}</li>
        <li>${values[1]}</li>
        <li>${values[2]}</li>
        <li>${values[3]}</li>
        <li>${values[4]}</li>
        </ul>
      </div>
      </div>
    `;
        })
        .catch(error => {
          console.log(error);
          getOneBtn.style.backgroundColor = "red";
          charactersContainer.innerHTML = `
      <div class="character-info">
      <p>Character not found</p>
      </div>
      `;
        });
    }
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {
    let charaId = document.getElementById("character-id-delete").value;
    axios
      .delete(`http://localhost:8000/characters/${charaId}`)
      .then(response => {
        deleteOneBtn.style.backgroundColor = "green";
        charactersContainer.innerHTML = `
      <div class="character-info">
      <div class="list-container">
       <p><strong>Character #${charaId} deleted</strong></p>
      </div>
      </div>
    `;
      })
      .catch(error => {
        console.log(error);
        deleteOneBtn.style.backgroundColor = "red";
        charactersContainer.innerHTML = `
      <div class="character-info">
      <p>Character not found</p>
      </div>
      `;
      });
  }
}

let handler1 = new APIHandler();

let allCharacter = handler1;
//console.log(allCharacter)
/*
.forEach(character, function(){
  console.log("character here")
})
*/
getAllBtn.addEventListener("click", function() {
  allCharacter.getFullList();
});

getOneBtn.addEventListener("click", function() {
  allCharacter.getOneRegister();
});

deleteOneBtn.addEventListener("click", function() {
  allCharacter.deleteOneRegister();
});

createForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const characterInfo = {
    name: event.srcElement[0].value,
    occupation: event.srcElement[1].value,
    weapon: event.srcElement[2].value,
    cartoon: event.srcElement[3].checked
  };
  axios
    .post("http://localhost:8000/characters", characterInfo)
    .then(response => {
      console.log("You just created this character: ", response.data);
      createFormBtn.style.backgroundColor = "green";
    })
    .catch(error => {
      console.log("Error is: ", error);
      createFormBtn.style.backgroundColor = "red";
    });
});

editForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const theId = document.getElementById("chr-id").value;
  console.log(theId);
  const editedCharacter = {
    id: event.srcElement[0].value,
    name: event.srcElement[1].value,
    occupation: event.srcElement[2].value,
    weapon: event.srcElement[3].value,
    cartoon: event.srcElement[4].checked
  };

  if (editedCharacter.name === "") {
    delete editedCharacter.name;
  }
  if (editedCharacter.occupation === "") {
    delete editedCharacter.occupation;
  }
  if (editedCharacter.weapon === "") {
    delete editedCharacter.weapon;
  }
  if (editedCharacter.cartoon === "") {
    delete editedCharacter.cartoon;
  }

  axios
    .patch(`http://localhost:8000/characters/${theId}`, editedCharacter)
    .then(response => {
      console.log("Edited this character: ", response.data);
      editFormBtn.style.backgroundColor = "green";
    })
    .catch(error => {
      console.log("Error is: ", error);
      editFormBtn.style.backgroundColor = "red";
    });
});
