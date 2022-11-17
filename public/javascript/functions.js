// Create a section with all characters
function createCharacterSection(data) {
  // create grey section
  let charactersList = document.createElement('section');
  charactersList.classList.add('container');
  charactersList.innerHTML = '<h1>Characters</h1>';

  // div for a characters container
  let charactersContainer = document.createElement('div');
  charactersContainer.classList.add('characters-container');
  charactersList.appendChild(charactersContainer);

  let characterDiv = document.createElement('div');
  characterDiv.classList.add('character-info');
  characterDiv.classList.add('info-flex');

  // iterate the data array to add a div with info

  data.forEach((character) => {
    characterDiv.innerHTML = `
    <ul>
      <div class="name">Character Name: </div>
      <div class="occupation">Character Occupation: </div>
      <div class="cartoon">Is a Cartoon? </div>
      <div class="weapon">Character Weapon: </div>
    </ul>
    
    <ul class='name-response'>
      <div class="name"> ${character.name}</div>
      <div class="occupation">${character.occupation}</div>
      <div class="cartoon">${character.cartoon}</div>
      <div class="weapon">${character.weapon}</div>
    </ul>`;

    charactersContainer.appendChild(characterDiv);
  });

  return charactersList;
}

// Create a section with one character
function getOne(data) {
  // create grey section
  let charactersList = document.createElement('section');
  charactersList.classList.add('container');
  charactersList.innerHTML = '<h1>Characters</h1>';

  // div for a characters container
  let charactersContainer = document.createElement('div');
  charactersContainer.classList.add('characters-container');
  charactersList.appendChild(charactersContainer);

  let characterDiv = document.createElement('div');
  characterDiv.classList.add('character-info');
  characterDiv.classList.add('info-flex');

  characterDiv.innerHTML = `
    <ul>
      <div class="name">Character Name: </div>
      <div class="occupation">Character Occupation: </div>
      <div class="cartoon">Is a Cartoon? </div>
      <div class="weapon">Character Weapon: </div>
    </ul>
    
    <ul class='name-response'>
      <div class="name"> ${data.name}</div>
      <div class="occupation">${data.occupation}</div>
      <div class="cartoon">${data.cartoon}</div>
      <div class="weapon">${data.weapon}</div>
    </ul>`;
  return charactersList;
}
