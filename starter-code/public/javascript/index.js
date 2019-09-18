const charactersAPI = new APIHandler("http://localhost:8000/characters");
// const apiHandler = new APIHandler('https://ih-crud-api.herokuapp.com/characters');
const charactersContainer = document.querySelector(".characters-container");
// const id = document.querySelector("#character-id").value;

window.addEventListener("load", () => {
  document.getElementById("fetch-all").onclick = function(event) {
    printAllCharacters();
  };
  document.getElementById("fetch-one").addEventListener('click',function(event){
      const id = document.querySelector("#idFind").value;
      charactersAPI.getOneRegister(id).then((res => {
        const { data } = res;
        charactersContainer.innerHTML = "";
        charactersContainer.innerHTML += `
    <div class="character-info">
    <div class="name">Character Name:${data.name}</div>
    <div class="occupation">Character Occupation:${data.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
    <div class="weapon">Character Weapon: ${data.weapon}</div>
    </div>`;
      }));
      });
  
  document.getElementById("delete-one").addEventListener("click", function(event) {
    const id = document.querySelector('#idDelete').value;
    charactersAPI.deleteOneRegister(id).then(() => {
    printAllCharacters();
  })
  });


  document.getElementById("edit-character-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const id = document.querySelector('#idEdit').value;
  const name = document.querySelector('#nameEdit').value;
  const occupation = document.querySelector('#occupationEdit').value;
  const cartoon = document.querySelector('#cartoonEdit').value;
  const weapon = document.querySelector('#weaponEdit').value;
  charactersAPI.updateOneRegister (id, { name, occupation, weapon, cartoon })
    .then(() => {
      printAllCharacters();
    })
    .catch(error => console.error(error));

  });

  document.getElementById("new-character-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector('#newCharacterName').value;
    const occupation = document.querySelector('#newCharacterOccupation').value;
    const cartoon = document.querySelector('#newCharacterCartoon').value;
    const weapon = document.querySelector('#newCharacterWeapon').value;
    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
      .then(() => {
        printAllCharacters();
      })
      .catch(error => console.error(error));
  });
});

const printAllCharacters = () => {
  charactersAPI.getFullList().then(res => {
    const { data } = res;
    charactersContainer.innerHTML = "";
    data.forEach(character => {
      charactersContainer.innerHTML += `
      <div class="character-info">
      <div class="name">Character Name:${character.name}</div>
      <div class="occupation">Character Occupation:${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`;
    });
  });
};
