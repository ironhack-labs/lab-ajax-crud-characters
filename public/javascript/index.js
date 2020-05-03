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

function addEditId(add) {
  let id = document.querySelector('#edit-id').value;
  let name = document.querySelector('#edit-name').value;
  let occupation = document.querySelector('#edit-occupation').value;
  let weapon = document.querySelector('#edit-weapon').value;
  let cartoon = document.querySelector('#edit-cartoon').value;
  console.log({
    id,
    name,
    occupation,
    weapon,
    cartoon
  })
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

  // document.querySelector(".characters-container").innerHTML = ""

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

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addEditId()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});


// let id = document.querySelector('#change-id').value;
// let name = document.querySelector('#change-name').value;
// let occupation = document.querySelector('#change-occupation').value;
// let weapon = document.querySelector('#change-weapon').value;
// let cartoon = document.querySelector('#isCartoon').value;