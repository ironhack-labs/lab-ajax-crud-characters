import APIHandler from "./APIHandler.js"
const charactersAPI = new APIHandler('http://localhost:8000');


function displayAll(characters) {
  for (var char in characters) {
    displayCharacter(characters[char])
  }
}

function displayCharacter(char) {

  const charContainer=document.querySelector(".characters-container")
  
  const charElem=document.createElement("div")
  charElem.classList.add("character-info")

  const charName=document.createElement("div")
  charName.classList.add("name")
  charName.innerHTML="Character Name: " + char.name ;

  const charOccupation=document.createElement("div")
  charOccupation.classList.add("occupation")
  charOccupation.innerHTML="Character Occupation: " + char.occupation

  const charCartoon=document.createElement("div")
  charCartoon.classList.add("cartoon")
  charCartoon.innerHTML="Is a Cartoon? " + char.cartoon

  const charWeapon=document.createElement("div")
  charWeapon.classList.add("weapon")
  charWeapon.innerHTML="Character Weapon: " + char.weapon

  charElem.appendChild(charName);
  charElem.appendChild(charOccupation);
  charElem.appendChild(charCartoon);
  charElem.appendChild(charWeapon);

  charContainer.appendChild(charElem)

}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(apiRes => {
      document.querySelector(".characters-container").innerHTML="";
      displayAll(apiRes.data)
    })
    .catch(apiErr => console.log(apiErr));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id").value
    charactersAPI
    .getOneRegister(id)
    .then(apiRes => {
      document.querySelector(".characters-container").innerHTML="";
      displayCharacter(apiRes.data)
    })
    .catch(apiErr => console.log(apiErr))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id-delete").value
    charactersAPI
    .deleteOneRegister(id)
    .then(apiRes => {
      console.log(apiRes + ": deleted")
    })
    .catch(apiErr => console.log(apiErr))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    
    const id = document.getElementById("edit-id").value;

    const character= {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      weapon: document.getElementById("edit-weapon").value,
      cartoon: document.getElementById("edit-cartoon").checked ? true : false
    }
    console.log("to create", character)

    charactersAPI
    .updateOneRegister(id, character)
    .then(apiRes => {
      console.log(apiRes, "UPDATED");
      document.getElementById("edit-data").style.backgroundColor="green";
    })
    .catch(apiErr => {
      console.log(apiErr, "UPDATE ERROR");
      document.getElementById("edit-data").style.backgroundColor="red";
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const character= {
      name: document.getElementById("new-name").value,
      occupation: document.getElementById("new-occupation").value,
      weapon: document.getElementById("new-weapon").value,
      cartoon: document.getElementById("new-cartoon").checked ? true : false
    }
    console.log("to create", character)

    charactersAPI
    .createOneRegister(character)
    .then(apiRes => {
      console.log(apiRes, "CREATED");
      document.getElementById("new-data").style.backgroundColor="green";
    })
    .catch(apiErr => {
      console.log(apiErr, "CREATION ERROR");
      document.getElementById("new-data").style.backgroundColor="red";
    });
  });
});
