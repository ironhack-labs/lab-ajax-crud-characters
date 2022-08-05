const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((response) => {
    const characters = response.data;
characters.forEach((character) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">occupation name: ${character.occupation} </div>
        <div class="cartoon">cartoon name: ${character.cartoon}</div>
        <div class="weapon">weapon name ${character.weapon}</div>
  `
 let query = document.querySelector(".characters-container")

 query.appendChild(div)
})});
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
  
    charactersAPI.getOneRegister()
    .then((response) => {
    const character = response.data;
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">occupation name: ${occupation.name} </div>
        <div class="cartoon">cartoon name: ${cartoon.name}</div>
        <div class="weapon">weapon name ${weapon.name}</div>
  `
 let query = document.querySelector("edit")

 query.appendChild(div)

})

  document.getElementById('delete-one').addEventListener('click', function (event) {


  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
 
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
   
    
  });
})})