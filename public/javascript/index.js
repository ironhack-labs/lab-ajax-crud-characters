const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const charactersContainer = document.querySelector('.characters-container');
  const clear = () => charactersContainer.innerHTML = '';

  const render = () => {
    charactersAPI
      .getFullList()
      .then(characters => {
        characters.forEach(character => {
          const { id, name, occupation, weapon, cartoon } = character;
          renderComponent(id, name, occupation, weapon, cartoon);
        });
      })
      .catch(error => {
        console.log(error)
        charactersContainer.innerHTML = '<h1>No Characters to Display</h1>'
      })
  }

  const createComponent = (id, name, occupation, weapon, cartoon) => (`
  <div class="id">Id: <span>${id}</span></div>
  <div class="name">Name: <span>${name}</span></div>
  <div class="occupation">Occupation: <span>${occupation}</span></div>
  <div class="cartoon">Is a Cartoon?:<span>${cartoon}</span></div>
  <div class="weapon">Weapon:<span>${weapon}</span></div>
  `);

  const renderComponent = (id, name, occupation, weapon, cartoon) => {
    const div = document.createElement('div')
    div.classList.add('character-info');
    div.innerHTML = createComponent(id, name, occupation, weapon, cartoon);

    charactersContainer.appendChild(div);
  }

  document.getElementById('fetch-all').addEventListener('click', (event) => {
    event.preventDefault();
    clear();
    render();
  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {
    event.preventDefault();
    clear();

    const inputSearchId = document.querySelector('#character-id');
    charactersAPI
      .getOneRegister(inputSearchId.value)
      .then(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        renderComponent(id, name, occupation, weapon, cartoon);
      })
      .catch(error => {
        console.log(error)
        charactersContainer.innerHTML = '<h1>No Characters to Display</h1>'
      });
  });

  document.getElementById('delete-one').addEventListener('click', (event) => {
    event.preventDefault();
    clear();
    const inputDeleteId = document.querySelector('#character-id-delete');
    charactersAPI.deleteOneRegister(inputDeleteId.value)

    charactersContainer.innerHTML = '<h1>Character Deleted</h1>'
  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {
    event.preventDefault();
    clear();

    const editId = document.querySelector('#edit-id').value;

    const editName = document.querySelector('#edit-name').value;
    const editOccupation = document.querySelector('#edit-occupation').value;
    const editWeapon = document.querySelector('#edit-weapon').value;
    const editCartoon = document.querySelector('#edit-cartoon').value;

    if (!editName || !editOccupation || !editWeapon || !editCartoon) return;

    charactersAPI
      .updateOneRegister(editId, editName, editOccupation, editWeapon, editCartoon)
      .then(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        renderComponent(id, name, occupation, weapon, cartoon);
      })
      .catch(() =>  charactersContainer.innerHTML = '<h1>Character Edit Failed</h1>');
  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {
    event.preventDefault();
    clear();

    const newName = document.querySelector('#new-name').value;
    const newOccupation = document.querySelector('#new-occupation').value;
    const newWeapon = document.querySelector('#new-weapon').value;
    const newCartoon = document.querySelector('#new-cartoon').value;

    if (!newName || !newOccupation || !newWeapon || !newCartoon) return;

    charactersAPI
      .createOneRegister(newName, newOccupation, newWeapon, newCartoon)
      .then(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        renderComponent(id, name, occupation, weapon, cartoon);
      })
      .catch(() =>  charactersContainer.innerHTML = '<h1>Character Creation Failed</h1>');
  });
});
