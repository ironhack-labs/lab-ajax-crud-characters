// DOM Nodes
const $charactersContainer = document.querySelector('.characters-container'); // Div
const $newCharacterForm = document.querySelector('#new-character-form'); // Form
const $editCharacterForm = document.querySelector('#edit-character-form'); // Form
const $fetchAll = document.querySelector('#fetch-all'); // Button
const $fetchOne = document.querySelector('#fetch-one'); // Button
const $deleteOne = document.getElementById('delete-one'); // Button
const $newButton = $newCharacterForm.querySelector('button'); // Button
const $editButton = $editCharacterForm.querySelector('button'); // Button

// APIHandler
const charactersAPI = new APIHandler('http://localhost:8000/characters');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  $fetchAll.addEventListener('click', () => {
    charactersAPI.getFullList().then(characters => {
      const cardsHTML = characters.map(character => createHTMLCard(character)).join('');

      $charactersContainer.innerHTML = cardsHTML;
    });
  });

  $fetchOne.addEventListener('click', () => {
    const id = document.querySelector('[name=character-id]').value; // Input

    charactersAPI.getOneRegister(id).then(character => {
      $charactersContainer.innerHTML = createHTMLCard(character);
    });
  });

  $deleteOne.addEventListener('click', () => {
    const id = document.querySelector('[name=character-id-delete]').value; // Input

    charactersAPI
      .deleteOneRegister(id)
      .then(() => changeButtonColor($deleteOne, true))
      .catch(() => changeButtonColor($deleteOne, false));
  });

  $newCharacterForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = $newCharacterForm.querySelector('[name=name]').value; // Input
    const occupation = $newCharacterForm.querySelector('[name=occupation]').value; // Input
    const weapon = $newCharacterForm.querySelector('[name=weapon]').value; // Input
    const cartoon = $newCharacterForm.querySelector('[name=cartoon]').checked; // Checkbox

    charactersAPI
      .createOneRegister({
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(() => changeButtonColor($newButton, true))
      .catch(() => changeButtonColor($newButton, false));
  });

  $editCharacterForm.addEventListener('submit', e => {
    e.preventDefault();
    const id = $editCharacterForm.querySelector('[name=chr-id]').value; // Input
    const name = $editCharacterForm.querySelector('[name=name]').value; // Input
    const occupation = $editCharacterForm.querySelector('[name=occupation]').value; // Input
    const weapon = $editCharacterForm.querySelector('[name=weapon]').value; // Input
    const cartoon = $editCharacterForm.querySelector('[name=cartoon]').checked; // Checkbox

    charactersAPI
      .updateOneRegister({
        id,
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(() => changeButtonColor($editButton, true))
      .catch(() => changeButtonColor($editButton, false));
  });
});

function changeButtonColor(button, success) {
  const color = success ? 'green' : 'red';
  button.style.backgroundColor = color;
}

function createHTMLCard(character) {
  const { name, occupation, weapon, cartoon } = character;

  return `
  <div class="character-info">
    <div class="name">Character Name: <span>${name}</span></div>
    <div class="occupation">Character Occupation <span>${occupation}</span></div>
    <div class="weapon">Character Weapon <span>${weapon}</span></div>
    <div class="cartoon">Is a Cartoon? <span>${cartoon}</span></div>
  </div>`;
}
