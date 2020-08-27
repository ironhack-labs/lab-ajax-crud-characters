const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((characters) => {
      let characterInfo = ''
      characters.data.forEach(character => {
        characterInfo += `
        <div class="character-info">
        <div class="name">Character ID: ${character.id}</div>
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>
      `
      });

      document.querySelector('.characters-container').innerHTML = characterInfo;
    })  

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.querySelector('input[name=character-id]').value).then((character) => {
      const { id, name, occupation, cartoon, weapon } = character.data;
      document.querySelector('.characters-container').innerHTML = `
      <div class="character-info">
        <div class="name">Character ID: ${id}</div>
        <div class="name">Character Name: ${name}</div>
        <div class="occupation">Character Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
        <div class="weapon">Character Weapon: ${weapon}</div>
      </div>
      `
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.querySelector('input[name=character-id-delete]').value)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
