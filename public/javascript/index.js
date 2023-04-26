const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const chContainer = document.querySelector('.characters-container');
  
  // copy, then remove template card
  const chTemplate = document.querySelector('.character-info');
  const chCard = chTemplate.cloneNode(true);
  chTemplate.remove();

  // function for creating result cards
  let createNewCards = (obj) => {
    for (let i=0; i < obj.length; i++) {
      if (i == 0) {
        // clears previous results
        document.querySelectorAll('.result-card').forEach(e => e.remove());
      }
      let cartoonStatus;
      obj[i].cartoon == true ? cartoonStatus='👍' : cartoonStatus='<em>nope</em>';

      let newCard = chCard.cloneNode(true);
      newCard.classList.add('result-card');
      newCard.querySelector('.name').innerHTML = `Name: <span>${obj[i].name}</span>`;
      newCard.querySelector('.occupation').innerHTML = `Occupation: <span>${obj[i].occupation}</span>`;
      newCard.querySelector('.cartoon').innerHTML = `Is a Cartoon?: <span>${cartoonStatus}</span>`;
      newCard.querySelector('.weapon').innerHTML = `Weapon: <span>${obj[i].weapon}</span>`;
      chContainer.appendChild(newCard);
    }
  }

  // fetch all characters
  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await charactersAPI.getFullList();
    createNewCards(result);
    // console.log(listOfAll);
  });

  // fetch one character
  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    event.preventDefault();
    const requestedId = document.getElementById('character-id-search').value;
    const wrapper = document.querySelector('.operation.search');
    const message = document.querySelector('.operation.search .message');
    
    // display result, display error if empty
    if (requestedId) {
      const result = await charactersAPI.getOneRegister(requestedId);
      createNewCards([result]);
      wrapper.classList.remove('error');
      message.innerHTML = '';
      console.log(`Here that one ID: ${result.id}`);
    } else {
      wrapper.classList.add('error');
      message.innerHTML = `No ID, no result, d\'oh!`;
    }
  });

  // delete character
  document.getElementById('delete-one').addEventListener('click', async (event) => {
    event.preventDefault();
    const idToDelete = document.getElementById('character-id-delete').value;
    const wrapper = document.querySelector('.operation.delete');
    const message = document.querySelector('.operation.delete .message');

    // display result, display error if empty
    if (idToDelete) {
      const result = await charactersAPI.deleteOneRegister(idToDelete);
      wrapper.classList.remove('error');
      message.innerHTML = `Successfully deleted item with ${result.id}`;
      console.log(`ID to delete: ${result.id}`);
    } else {
      wrapper.classList.add('error');
      message.innerHTML = `No ID to delete, dude!`;
    }
  });
  
  // add character
  document.getElementById('send-data-new').addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const characterToAdd = { name, occupation, cartoon, weapon };
    const addedCharacter = await charactersAPI.createOneRegister(characterToAdd);
    console.log('Successfully added character', addedCharacter.data);
  });

  // update character
  document.getElementById('send-data-update').addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const characterToUpdate = { name, occupation, cartoon, weapon };
    const updatedCharacter = await charactersAPI.updateOneRegister(characterToUpdate);
    console.log('Successfully updated character', characterToUpdate.name);
  });
});
