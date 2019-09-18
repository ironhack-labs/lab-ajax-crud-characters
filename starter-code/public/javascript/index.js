const charactersAPI = new APIHandler('http://localhost:8000/characters');
const characterContainer = document.querySelector(".characters-container");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    printAllCharacters ()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id).then( (res) => {
      const { data } = res;
      characterContainer.innerHTML = "";
        characterContainer.innerHTML += `
        <div class="character-info">
           <div class="name">name: ${data.name}</div>
           <div class="occupation">occupation: ${data.occupation}</div>
           <div class="cartoon">cartoon: ${data.cartoon}</div>
           <div class="weapon">weapon: ${data.weapon}</div>
         </div>
        `;
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id).then( () => {
      printAllCharacters ()
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;
    console.log(name, occupation, weapon, cartoon)
    charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon})
  
    .then(() => {
      printAllCharacters ()
    })
    .catch(error => console.error(error))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then(() => {
      printAllCharacters ()
    })
    .catch(error => console.error(error))
  });
});

const printAllCharacters = () => {
  charactersAPI.getFullList().then( (res) => {
   const { data } = res;
   characterContainer.innerHTML = "";
   data.forEach((character) => {
     characterContainer.innerHTML += `
     <div class="character-info">
        <div class="name">name: ${character.name}</div>
        <div class="occupation">occupation: ${character.occupation}</div>
        <div class="cartoon">cartoon: ${character.cartoon}</div>
        <div class="weapon">weapon: ${character.weapon}</div>
      </div>
     `;
   })
 })
}