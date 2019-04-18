const baseULR = 'http://localhost:3144/characters';
const charactersAPI = new APIHandler(baseULR);

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function() {
    charactersAPI
      .getFullList()
      .then(characters => {
        let html = '';
        characters.forEach(character => {
          const { id, name, occupation, weapon, cartoon } = character;
          html += `
                <div class="id">ID: ${id}</div>
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            <br> 
          `;
        });
        document.querySelector('.character-info').innerHTML = html;
      })
      .catch(err => console.error('ERROR: ', err));
  };

  document.getElementById('fetch-one').onclick = () => {
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id).then(character => {
      const { id, name, occupation, weapon, cartoon } = character;
      const html = `
            <div class="id">ID: ${id}</div>
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            <br> 
          `;
      document.querySelector('.character-info').innerHTML = html;
      document.getElementsByName('character-id')[0].value = '';
    });
  };

  document.getElementById('delete-one').onclick = () => {
    const input = document.getElementsByName('character-id-delete')[0];
    charactersAPI.deleteOneRegister(input.value);
    input.value = '';
    // TODO: Give feedback to user
  };

  // TODO: Retrieve character information after user type the ID
  document.getElementById('edit-character-form').onsubmit = evt => {
    evt.preventDefault();
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    const occupation = document.getElementById('update-occupation').value;
    const weapon = document.getElementById('update-weapon').value;
    const cartoon = document.getElementById('update-cartoon').checked;

    charactersAPI
      .updateOneRegister(id, name, occupation, weapon, cartoon)
      .then(character => {
        // display updated character
        const { id, name, occupation, weapon, cartoon } = character;
        const html = `
              <div class="id">ID: ${id}</div>
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <br>
          `;
        document.querySelector('.character-info').innerHTML = html;
        document.querySelector('#edit-character-form').reset();
      })
      .catch(err => console.error('ERROR: ', err));
  };

  document.getElementById('new-character-form').onsubmit = evt => {
    evt.preventDefault();
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const cartoon = document.getElementById('new-cartoon').checked;

    charactersAPI
      .createOneRegister(name, occupation, weapon, cartoon)
      .then(character => {
        // display new character
        const { id, name, occupation, weapon, cartoon } = character;
        const html = `
              <div class="id">ID: ${id}</div>
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            <br>
          `;
        document.querySelector('.character-info').innerHTML = html;
        document.querySelector('#new-character-form').reset();
      })
      .catch(err => console.error('ERROR: ', err));
  };
});
