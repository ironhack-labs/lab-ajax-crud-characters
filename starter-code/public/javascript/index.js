const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      let container = document.querySelector(".characters-container"); 
      charactersAPI.getFullList()
      .then(data => {
        data.forEach(char => {
          let divDOMEL = document.createElement("div");
          divDOMEL.className = "character-info";
          divDOMEL.innerHTML = 
          `<div class="name">${char.name}</div>
          <div class="occupation">${char.occupation}</div>
          <div class="cartoon">${char.cartoon}</div>
          <div class="weapon">${char.weapon}</div>`;
          container.appendChild(divDOMEL);
        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let container = document.querySelector(".characters-container"); 
    charactersAPI.getOneRegister(document.querySelector(`.operation>input[name ="character-id"]`).value)
    .then(data => {
      let divDOMEL = document.createElement("div");
          divDOMEL.className = "character-info";
          divDOMEL.innerHTML = 
          `<div class="name">${data.name}</div>
          <div class="occupation">${data.occupation}</div>
          <div class="cartoon">${data.cartoon}</div>
          <div class="weapon">${data.weapon}</div>`;
          container.appendChild(divDOMEL);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.querySelector(`.operation>input[name ="character-id-delete"]`).value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let newCharacter= {
      "id": +document.querySelector(`#edit-character-form input[name ="chr-id"]`).value,
      "name": document.querySelector(`#edit-character-form input[name ="name"]`).value,
      "occupation": document.querySelector(`#edit-character-form input[name ="occupation"]`).value,
      "weapon": document.querySelector(`#edit-character-form input[name ="weapon"]`).value,
      "cartoon": document.querySelector(`#edit-character-form input[name ="cartoon"]`).checked,
  }
   charactersAPI.updateOneRegister(newCharacter);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});




