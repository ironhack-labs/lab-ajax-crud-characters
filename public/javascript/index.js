const charactersAPI = new APIHandler('http://localhost:8000');
const characterContainer = document.querySelector('.characters-container');
const characterId = document.querySelector('.operation input[name="character-id"]');
const characterIdDelete = document.querySelector('.operation.delete input[name="character-id-delete"]');

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(res => {
        
        let cHTML = '';
        res.data.forEach(character => {
          cHTML += `<div class="character-info">
          <div class="name">name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Cartoon: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon} Weapon</div>
        </div>`
        })
        characterContainer.innerHTML = cHTML;
    })
    .catch(err => console.log(err.message));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI
    .getOneRegister(characterId.value)
    .then(res => {
        let character = res.data;
        let cHTML = `<div class="character-info">
        <div class="name">name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon} Weapon</div>
      </div>`;
        characterContainer.innerHTML = cHTML;
    })
    .catch(err => console.log(err.message));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI
    .deleteOneRegister(characterIdDelete.value)
    .then(() => {
      charactersAPI
      .getFullList()
      .then(res => {
          
          let cHTML = '';
          res.data.forEach(character => {
            cHTML += `<div class="character-info">
            <div class="name">name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon} Weapon</div>
          </div>`
          })
          characterContainer.innerHTML = cHTML;
      })
      .catch(err => console.log(err.message));
    })
    .catch(err => console.log(err.message));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let characterObj = {};
    new FormData(event.target).forEach((value, key) => characterObj[key] = value);
    let { chrId,name, occupation, cartoon, weapon } = characterObj;
    charactersAPI
    .updateOneRegister(chrId, {name, occupation, cartoon, weapon})
    .then(res => {
      let character = res.data;
        let cHTML = `<div class="character-info">
        <div class="name">name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon} Weapon</div>
      </div>`;
        characterContainer.innerHTML = cHTML;
    })
    .catch(err => console.log(err.message));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let characterObj = {};
    new FormData(event.target).forEach((value, key) => characterObj[key] = value);
    let {name, occupation, cartoon, weapon } = characterObj;

    charactersAPI
    .createOneRegister({name, occupation, cartoon, weapon})
    .then(res => {
      let character = res.data;
        let cHTML = `<div class="character-info">
        <div class="name">name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon} Weapon</div>
      </div>`;
        characterContainer.innerHTML = cHTML;
    })
    .catch(err => console.log(err.message));

  });
});
