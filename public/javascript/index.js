const charactersAPI = new APIHandler('http://localhost:8000');

const writeCharacters = charactersList => {
  const container = document.querySelector('.characters-container')

  container.innerHTML = '';

  if (!charactersList.length) {
    container.innerHTML = `<h1>No characters</h1>`;
    return;
  }

  // console.log(charactersList);

  charactersList.forEach(character => {
      container.innerHTML += `
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
      `
    
  });
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const charactersList =  await charactersAPI.getFullList();

      writeCharacters(charactersList)
    }

    catch(err) {
      console.log(err)
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      let idInput = document.getElementById('character-id');

      const character = await charactersAPI.getOneRegister(idInput.value)

      if (character) {
        writeCharacters([character]);
      } else {
        const container = document.querySelector('.characters-container')

        container.innerHTML = '<h1>No such charater</h1>';
      }

      idInput.value = '';
    }

    catch(err) {
      console.log(err);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const deleteInput = document.getElementById('character-id-delete');
      const deleteButton = document.getElementById('delete-one');

      const response = await charactersAPI.deleteOneRegister(deleteInput.value);

      deleteButton.style.backgroundColor = response < 300 ? 'green' : 'red'

    setTimeout(() => {
      deleteButton.style.backgroundColor = 'rgba(88, 98, 123, 0.95)';
      deleteInput.value = ''
    }, 500)
    }

    catch(err) {
      console.log(err);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const idInput = this.children[0].querySelector('input');
    const sendButton = document.getElementById('send-update-data');

    const updatedCharacter = {
      name: this.children[1].querySelector('input').value,
      occupation: this.children[2].querySelector('input').value,
      weapon: this.children[3].querySelector('input').value,
      cartoon: this.children[4].querySelector('input').checked
    }

    const response = await charactersAPI.updateOneRegister(idInput.value, updatedCharacter);

    sendButton.style.backgroundColor = response < 300 ? 'green' : 'red'

    setTimeout(() => {
      sendButton.style.backgroundColor = 'rgba(88, 98, 123, 0.95)';
      this.reset();
    }, 500)
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const sendButton = document.getElementById('send-creation-data')

    const newCharacter = {
      name: document.getElementById("new-character-name").value,
      occupation: document.getElementById("new-character-occupation").value,
      weapon: document.getElementById("new-character-weapon").value,
      cartoon: document.getElementById("new-character-is-cartoon").checked
    }

    const response = await charactersAPI.createOneRegister(newCharacter)

    sendButton.style.backgroundColor = response < 300 ? 'green' : 'red'

    setTimeout(() => {
      sendButton.style.backgroundColor = 'rgba(88, 98, 123, 0.95)'
      this.reset();
    }, 500)
  });
});
