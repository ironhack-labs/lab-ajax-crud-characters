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

  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await charactersAPI.getFullList();
    createNewCards(result);
    // console.log(listOfAll);
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    event.preventDefault();
    const requestedId = document.getElementById('character-id-search').value;

    // display result, display error if empty
    if (requestedId) {
      const result = await charactersAPI.getOneRegister(requestedId);
      createNewCards([result]);
      console.log(`Here that one ID: ${result.id}`);
    } else {
      const error = document.querySelector('.operation.search .error');
      error.innerHTML = `No ID, no result, d\'oh!`;
    }
  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    event.preventDefault();
    const requestedId = document.getElementById('character-id-delete').value;

    // display result, display error if empty
    if (requestedId) {
      const result = await charactersAPI.getOneRegister(requestedId);
      console.log(`ID to delete: ${result.id}`);
    } else {
      const error = document.querySelector('.operation.delete .error');
      error.innerHTML = `No ID to delete, dude!`;
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  });
});
