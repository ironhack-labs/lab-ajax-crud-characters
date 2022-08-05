const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((response) => {
      console.log(response);
      const container = document.querySelector(".characters-container"); 
      response.data.forEach((character) => {
        const div = document.createElement("div"); 
        div.innerHTML = `<div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
        </div>`;
        container.appendChild(div);
      });
    });
  });
});


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister 
    .then((response) => {
      console.log(response);
      const container = document.querySelector("
      characters-container")
      const div = document.createElement('div');
      div.innerHTML = `<div class = "character-info>
      <div class = "name">${character.name}</div>
      <div class = "occupation">${character.occupation}</div>
      <div class = "cartoon">${character.cartoon}</div>
      <div class = "weapon">${character.weapon}</div>
      </div>`;
      container.appendChild(div);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

