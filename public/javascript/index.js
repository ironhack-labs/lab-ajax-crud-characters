const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const charactersContainer = document.querySelector('.characters-container');
  const clear = () => charactersContainer.innerHTML = '';

  const update = async () => {
    try {
      const characters = await charactersAPI.getFullList();
      characters.forEach(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        renderComponent(id, name, occupation, weapon, cartoon);
      });
    } catch (error) {
      console.log(error);
      charactersContainer.innerHTML = '<h1>No Characters to Display</h1>';
    }
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
    update();
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    event.preventDefault();
    clear();

    const inputSearchId = document.querySelector('#character-id');
    
    try {
      const character = await charactersAPI.getOneRegister(inputSearchId.value);
      const { id, name, occupation, weapon, cartoon } = character;
      renderComponent(id, name, occupation, weapon, cartoon);
    } catch (error) {
      console.log(error)
      charactersContainer.innerHTML = '<h1>No Characters to Display</h1>' 
    }
  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    event.preventDefault();
    clear();
    const inputDeleteId = document.querySelector('#character-id-delete');
    const buttonDelete = document.querySelector('#delete-one');
    
    try {
      const deleteStatus = await charactersAPI.deleteOneRegister(inputDeleteId.value);
      if (deleteStatus) {
        buttonDelete.classList.add('active');
        charactersContainer.innerHTML = '<h1>Character Deleted</h1>';
        setTimeout(() => buttonDelete.classList.remove('active'), 2000);
      } else {
        buttonDelete.classList.add('inactive');
        charactersContainer.innerHTML = '<h1>Character Not Found</h1>';
        setTimeout(() => buttonDelete.classList.remove('inactive'), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('edit-id').addEventListener('change', async (event) => {
    const id = document.querySelector('#edit-id').value;

    try {
      const character = await charactersAPI.getOneRegister(id);

      const editName = document.querySelector('#edit-name');
      const editOccupation = document.querySelector('#edit-occupation');
      const editWeapon = document.querySelector('#edit-weapon');
      const editCartoon = document.querySelector('#edit-cartoon');

      const { name, occupation, weapon, cartoon } = character

      editName.value = name;
      editOccupation.value = occupation;
      editWeapon.value = weapon;
      editCartoon.value = cartoon; 
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    clear();

    const editId = document.querySelector('#edit-id').value;

    const editName = document.querySelector('#edit-name').value;
    const editOccupation = document.querySelector('#edit-occupation').value;
    const editWeapon = document.querySelector('#edit-weapon').value;
    const editCartoon = document.querySelector('#edit-cartoon').value;

    if (!editName || !editOccupation || !editWeapon || !editCartoon) return;

    try {
      const character = await charactersAPI.updateOneRegister(editId, editName, editOccupation, editWeapon, editCartoon);
      const { id, name, occupation, weapon, cartoon } = character;
      renderComponent(id, name, occupation, weapon, cartoon);
    } catch (error) {
      console.log(error);
      charactersContainer.innerHTML = '<h1>Character Edit Failed</h1>';
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    clear();

    const newName = document.querySelector('#new-name').value;
    const newOccupation = document.querySelector('#new-occupation').value;
    const newWeapon = document.querySelector('#new-weapon').value;
    const newCartoon = document.querySelector('#new-cartoon').value;

    if (!newName || !newOccupation || !newWeapon || !newCartoon) return;

    try {
      const character = await charactersAPI.createOneRegister(newName, newOccupation, newWeapon, newCartoon);
      const { id, name, occupation, weapon, cartoon } = character;
      renderComponent(id, name, occupation, weapon, cartoon);
    } catch (error) {
      console.log(error);
    }
  });
});
