const baseULR = 'http://localhost:3144/characters';
const charactersAPI = new APIHandler(baseULR);

/**
 * Genereate 5 div elements containing id, name, occupation, weapon and cartoon values.
 * @param {Number} id - ID of the character
 * @param {String} name - Name of the character
 * @param {String} occupation - Occupation of the character
 * @param {String} weapon - Weapon of the character
 * @param {Boolean} cartoon - Is the character based on cartoon
 */
const htmlGenerator = (id, name, occupation, weapon, cartoon) => {
  return `
            <div class="id">ID: ${id}</div>
            <div class="name">Character Name: ${name}</div>
            <div class="occupation">Character Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Character Weapon: ${weapon}</div>
            <br> 
          `;
};

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function() {
    charactersAPI
      .getFullList()
      .then(characters => {
        let html = '';
        characters.forEach(character => {
          const { id, name, occupation, weapon, cartoon } = character;
          html += htmlGenerator(id, name, occupation, weapon, cartoon);
        });
        document.querySelector('.character-info').innerHTML = html;
      })
      .catch(err => console.error('ERROR: ', err));
  };

  document.getElementById('fetch-one').onclick = () => {
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id).then(character => {
      const { id, name, occupation, weapon, cartoon } = character;
      document.querySelector('.character-info').innerHTML = htmlGenerator(
        id,
        name,
        occupation,
        weapon,
        cartoon
      );
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
        document.querySelector('.character-info').innerHTML = htmlGenerator(
          id,
          name,
          occupation,
          weapon,
          cartoon
        );
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
        document.querySelector('.character-info').innerHTML = htmlGenerator(
          id,
          name,
          occupation,
          weapon,
          cartoon
        );
        document.querySelector('#new-character-form').reset();
      })
      .catch(err => console.error('ERROR: ', err));
  };
});
