const charactersAPI = new APIHandler('http://localhost:8000');
const charInfoDiv = document.querySelector(".characters-container");

function addCharInfo(data) {
  charInfoDiv.innerHTML = "";
  charInfoDiv.innerHTML += `<div class="character-info">
  <div class="name">${data.name}</div>
  <div class="occupation">${data.occupation}</div>
  <div class="cartoon">${data.cartoon}</div>
  <div class="weapon">${data.weapon}</div>
  </div>
`
}

function addEditId() {
  let id = document.querySelector('#edit-id').value;
  let name = document.querySelector('#edit-name').value;
  let occupation = document.querySelector('#edit-occupation').value;
  let weapon = document.querySelector('#edit-weapon').value;
  let cartoon = document.querySelector('#edit-cartoon').value;
  cartoon.checked ? (cartoon = true) : (cartoon = false);
  return {
    id,
    name,
    occupation,
    weapon,
    cartoon
  }
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charInfoDiv.innerHTML = "";
    charactersAPI.getFullList()
      .then((result) => {
        result.data.forEach(data => {
          charInfoDiv.innerHTML += `<div class="character-info">
        <div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.cartoon}</div>
        <div class="weapon">${data.weapon}</div>
        </div>
      `
        })
      }).catch((error) => {
        console.log(error)
      })
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    let inputId = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(inputId).then((result) => {
      addCharInfo(result.data)
    }).catch((error) => {
      console.log(error)
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let inputId = document.getElementById("remove-character-id").value;
    charactersAPI.deleteOneRegister(inputId)
  });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let id = document.querySelector("#edit-id").value;
      let editedCharacter = addEditId();
      console.log(editedCharacter)
      debugger;
      charactersAPI
        .updateOneRegister(id, editedCharacter)
        .then((axiosResult) => {
          document.getElementById('edited-data-edit').style.backgroundColor =
            'green';
          console.log(axiosResult)
        })
        .catch((err) => {
          console.log(error)
          document.getElementById('edited-data-edit').style.backgroundColor = 'red';
        });
    });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    let cartoon = document.getElementById('new-cartoon');
    cartoon.checked ? (cartoon = true) : (cartoon = false);
    const character = {
      name,
      occupation,
      weapon,
      cartoon
    };
    charactersAPI
      .createOneRegister(character)
      .then((axiosResult) => {
        document.getElementById('send-data').style.backgroundColor = 'green';
        console.log(axiosResult)
      })
      .catch((err) => console.log(error));
    document.getElementById('send-data').style.backgroundColor = 'red';
  });
});