const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container');

function renderCharacter(char) {
  const characterInfo = document.createElement('div');
  characterInfo.classList.add('character-info');

  const id = document.createElement('div');
  id.classList.add('id');
  id.innerHTML = 'Character ID: ' + char.id;

  const name = document.createElement('div');
  name.classList.add('name');
  name.innerHTML = 'Character Name:' + char.name;

  const occupation = document.createElement('div');
  occupation.classList.add('occupation');
  occupation.innerHTML = 'Character Occupation: ' + char.occupation;

  const cartoon = document.createElement('div');
  cartoon.classList.add('cartoon');
  cartoon.innerHTML = 'Is a Cartoon?: ' + char.cartoon;

  const weapon = document.createElement('div');
  weapon.classList.add('weapon');
  weapon.innerHTML = 'Character Weapon: ' + char.weapon;

  characterInfo.appendChild(id);
  characterInfo.appendChild(name);
  characterInfo.appendChild(occupation);
  characterInfo.appendChild(cartoon);
  characterInfo.appendChild(weapon);

  charactersContainer.appendChild(characterInfo);
}

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', async function (event) {
      const response = await charactersAPI.getFullList();

      const chars = response.data;

      charactersContainer.innerHTML = '';

      chars.forEach((char) => {
        renderCharacter(char);
      });
    });

  document
    .getElementById('fetch-one')
    .addEventListener('click', async function (event) {
      const input = document.querySelector('input[name="character-id"]');
      const response = await charactersAPI.getOneRegister(input.value);

      charactersContainer.innerHTML = '';

      renderCharacter(response.data);
    });

  const btn = document.getElementById('delete-one');

  btn.addEventListener('click', async function (event) {
    event.preventDefault();

    try {
      const input = document.querySelector('input[name="character-id-delete"]');
      const response = await charactersAPI.deleteOneRegister(input.value);

      charactersContainer.innerHTML = '';
      btn.style.backgroundColor = 'green';
    } catch {
      btn.style.backgroundColor = 'tomato';
    }
  });

  const editForm = document.getElementById('edit-character-form');

  editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const characterInfo = {
      id: editForm.id.value,
      name: editForm.name.value,
      occupation: editForm.occupation.value,
      weapon: editForm.weapon.value,
      cartoon: editForm.cartoon.checked,
    };

    charactersAPI.updateOneRegister(editForm.id.value, characterInfo);
  });

  const createForm = document.getElementById('new-character-form');

  createForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const characterInfo = {
      name: createForm.name.value,
      occupation: createForm.occupation.value,
      weapon: createForm.weapon.value,
      cartoon: createForm.cartoon.checked,
    };

    charactersAPI.createOneRegister(characterInfo);
  });
});
