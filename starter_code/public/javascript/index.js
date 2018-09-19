const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(data => {
        paintList(data)
      })
      .catch(e => console.log(e))
  }

  document.getElementById('fetch-one').onclick = function () {
    let id = document.getElementsByName("character-id")[0].value;
    charactersAPI.getOneRegister(id)
      .then(data => {
        paintOne(data)
      })
      .catch(e => console.log(e))
  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI.deleteOneRegister(id)
    .then(() => console.log("Character has been successfully deleted"))
  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }



  function paintList(data) {
    let frame = document.getElementsByClassName("characters-container")[0];
    let divParent;
    let divChild;

    for (let character of data) {
      divParent = document.createElement("div")
      divParent.className = "character-info";
      frame.appendChild(divParent);

      for (let key of Object.keys(character)) {
        divChild = document.createElement("div");
        divChild.innerHTML = (`${key}: ${character[key]}`)
        divParent.appendChild(divChild);
      }
    }
  }

  function paintOne(character) {
    
    let frame = document.getElementsByClassName("characters-container")[0];
    let divParent = document.createElement("div")
    divParent.className = "character-info";
    frame.appendChild(divParent);
    
    for (let key of Object.keys(character)) {
      divChild = document.createElement("div");
      divChild.innerHTML = (`${key}: ${character[key]}`)
      divParent.appendChild(divChild);
    }
    
  }
})

