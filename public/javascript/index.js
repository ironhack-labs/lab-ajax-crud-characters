const charactersAPI = new APIHandler('http://localhost:8000');

const characterContainer = document.getElementsByClassName("characters-container")[0];

function createCard(character) {
  const newCard = characterContainer.firstElementChild.cloneNode(true);
  newCard.childNodes.forEach(child => {
    switch(child.className) {
      case "id":
        child.innerHTML = `Id: <span>${character.id}</span>`;
        break;
      case "name":
        child.innerHTML = `Name: <span>${character.name}</span>`;
        break;
      case "occupation":
        child.innerHTML = `Occupations: <span>${character.occupation}</span>`;
        break;
      case "cartoon":
        child.innerHTML = `Is a Cartoon?: <span>${character.cartoon}</span>`;
        break;
      case "weapon":
        child.innerHTML = `Weapon: <span>${character.weapon}</span>`;
        break;
    }
  });
  return newCard;
}


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        response.data.forEach(character => {
          characterContainer.appendChild(createCard(character));
        })
        characterContainer.removeChild(characterContainer.firstElementChild);
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const searchID = document.getElementsByName("character-id")[0].value;
    charactersAPI
      .getOneRegister(searchID)
      .then(response => {
        characterContainer.appendChild(createCard(response.data));
        characterContainer.removeChild(characterContainer.firstElementChild);
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const searchID = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI
      .deleteOneRegister(searchID)
      .then(() => {
        document.getElementById("delete-one").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("delete-one").style.backgroundColor = "red";
      });
  });
  

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const charID = document.getElementsByName("chr-id")[0].value;
    const newInfo = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      weapon: document.getElementsByName("weapon")[1].value,
      cartoon: document.getElementsByName("cartoon")[1].checked
    }

    charactersAPI
      .updateOneRegister(charID, newInfo)
      .then(() => {
        document.getElementById("send-edit-data").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("send-edit-data").style.backgroundColor = "red";
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newChar = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      weapon: document.getElementsByName("weapon")[0].value,
      cartoon: document.getElementsByName("cartoon")[0].checked
    }
    
    charactersAPI
      .createOneRegister(newChar)
      .then(() => {
        document.getElementById("send-data").style.backgroundColor = "green";
      })
      .catch(() => {
        document.getElementById("send-data").style.backgroundColor = "red";
      })
  });
});
