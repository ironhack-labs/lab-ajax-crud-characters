const charactersAPI = new APIHandler('http://localhost:8000');
// Iteration 3.1 Fetch all
window.addEventListener('load', () => {
  // Iteration 3.1 Fetch all elements
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
    .getFullList() // retrieving all Json data from our fake Api
    .then((characters) => {
    let allCharacter = ''
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
    // insert inside the HTML characters-container, information of all characters retrieve from the API handler
    document.querySelector('.characters-container').innerHTML = allCharacter;
    }) 

  });
 // Iteration 3.2 Fetch one
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
  // Iteration 3.3 Delete one
  document.getElementById('delete-one').addEventListener('click', function (event) {

    charactersAPI.deleteOneRegister(document.querySelector('input[name=character-id-delete]').value)

  });
  // Iteration 3.5 Edit a character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const id = document.querySelector('#edit-character-form input[name=chr-id]').value;
    const name = document.querySelector('#edit-character-form input[name=name]').value;
    const occupation = document.querySelector('#edit-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#edit-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked;

    const editCharacter = {
      id,
      name,
      occupation,
      weapon, 
      cartoon
    };
   
    console.log('Edited character: ', editCharacter );

    charactersAPI.updateOneRegister(id, editCharacter )

  });
  // Iteration 3.4 Update Character Values
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const name = document.querySelector('#new-character-form input[name=name]').value;
    const occupation = document.querySelector('#new-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#new-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked;

    const newCharacter = {
      name,
      occupation,
      weapon, 
      cartoon
    };
   
    console.log('New character: ', newCharacter);

    charactersAPI.createOneRegister(newCharacter)
  });


});
