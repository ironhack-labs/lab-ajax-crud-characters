const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(res =>{
      let str = '';
      res.forEach(character => {
        str += 
        `
        <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
        `;
      });
      document.getElementsByClassName('characters-container')[0].innerHTML = str; 
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI
    .getOneRegister(parseInt(document.getElementById('character-id').value))
    .then(character => {
      let str =  
        `
        <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
        `;
      document.getElementsByClassName('characters-container')[0].innerHTML = str;
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI
    .deleteOneRegister(parseInt(document.getElementById('character-id-delete').value))
    .then(() => document.getElementById("delete-one").style.backgroundColor = "green")
    .catch(e =>{
      console.log(`There was an error when deleting a character: ${e}`);
      document.getElementById("delete-one").style.backgroundColor = "red";
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newInfo = {
      id: document.getElementsByName('chr-id')[0].value,
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      weapon: document.getElementsByName('weapon')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].checked
    }
    charactersAPI
    .updateOneRegister(document.getElementsByName('chr-id')[0].value, newInfo)
    .then(() => document.getElementById('update').style.backgroundColor = "green")
    .catch(e => {
      console.log(`There was an error when editing a character: ${e}`);
      document.getElementById('update').style.backgroundColor = "red"
    })
    document.getElementById('edit-character-form').reset();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newChar = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].checked
    }
    charactersAPI
    .createOneRegister(newChar)
    .then(() => document.getElementById('create').style.backgroundColor = "green")
    .catch(e => {
      console.log(`There was an error when creating a character: ${e}`);
      document.getElementById('create').style.backgroundColor = "red"
    })
    document.getElementById('new-character-form').reset();
  });
});
