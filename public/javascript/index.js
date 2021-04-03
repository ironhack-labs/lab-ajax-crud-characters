const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const characters = await charactersAPI.getFullList();

    return charactersInHTMLTags(characters);
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const characterInputFindOne = document.getElementById('character-id');
    const characterId = characterInputFindOne.value;

    const characterById = await charactersAPI.getOneRegister(characterId);

    if (Object.keys(characterById).length === 0) {
      characterInputFindOne.value = '';

      return characterNotFound();
    }

    const characterArray = [];
    characterArray.push(characterById);

    charactersInHTMLTags(characterArray);

    characterInputFindOne.value = '';
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();

    const characterInputDelete = document.getElementById('character-id-delete');
    const characterId = characterInputDelete.value;

    try {
      const result = await charactersAPI.deleteOneRegister(characterId);

      if (result !== 200) throw new Error;

      const charactersContainer = document.querySelector('.characters-container');
      charactersContainer.innerHTML = '';

      charactersContainer.innerHTML += `<h2> Character has been successfully deleted </h2>`;

      characterInputDelete.value = '';

    } catch {
      characterNotFound()
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const newCharacterForm = document.getElementById('new-character-form');

    const name = newCharacterForm[0].value;
    const occupation = newCharacterForm[1].value;
    const weapon = newCharacterForm[2].value;
    const cartoon = newCharacterForm[3].checked;

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon: cartoon ? 'Yes' : 'No',
    }

    const newCharacterResult = await charactersAPI.createOneRegister(newCharacter);

    if (Object.keys(newCharacterResult).length === 0) {
      newCharacterForm.reset();

      return characterNotFound('post');
    }

    const characterArray = [];
    characterArray.push(newCharacterResult);

    charactersInHTMLTags(characterArray);

    newCharacterForm.reset();
  });

  const charactersInHTMLTags = (characters) => {
    const charactersContainer = document.querySelector('.characters-container');
    charactersContainer.innerHTML = '';

    if (characters.length === 0) return characterNotFound();

    return characters.forEach(character => {
      charactersContainer.innerHTML += `
          <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
      `;
    });
  }

  const characterNotFound = (axiosMethod = '') => {
    const charactersContainer = document.querySelector('.characters-container');
    charactersContainer.innerHTML = '';

    const notFound = charactersContainer.innerHTML += `<h2>Character not found</h2>`;
    const notCreated = charactersContainer.innerHTML += `<h2>Not created</h2>`

    return axiosMethod === '' ? notFound : notCreated;
  }
});
