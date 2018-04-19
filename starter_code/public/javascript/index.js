const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(chars => {
        let container = document.getElementsByClassName("characters-container");

        container[0].innerHTML = "";
        chars.data.forEach(e => {
          drawChar(e, container);
        });
      })
      .catch(err => console.log(err));
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementsByName("character-id")[0].value;
    charactersAPI
      .getOneRegister(id)
      .then(e => {
        let container = document.getElementsByClassName("characters-container");
        container[0].innerHTML = "";
        drawChar(e.data, container);
      })
      .catch(err => console.log(err));
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI
      .deleteOneRegister(id)
      .then(e => console.log(e))
      .catch(err => console.log(errs));
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();

    const update = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      weapon: document.getElementsByName("weapon")[1].value,
      cartoon: document.getElementsByName("cartoon")[1].value
    };
    let id = document.getElementsByName("chr-id")[0].value;
    charactersAPI
      .updateOneRegister(id, update)
      .then(e => console.log(e))
      .catch(err => console.log(err));
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();

    const newChar = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      weapon: document.getElementsByName("weapon")[0].value,
      cartoon: document.getElementsByName("cartoon")[0].checked
    };

    charactersAPI
      .createOneRegister(newChar)
      .then(e => console.log(e))
      .catch(err => console.log(err));
  };
});

const drawChar = (char, container) => {
  console.log(container);
  container[0].innerHTML += `
  <div class="character-info">
  <div class="id">Id: ${char.id}</div>
  <div class="name"> Name: ${char.name}</div>
  <div class="occupation"> Occupation: ${char.occupation}</div>
  <div class="cartoon">Is Cartoon?:  ${char.cartoon}</div>
  <div class="weapon"> Weapon: ${char.weapon}</div>`;
};
