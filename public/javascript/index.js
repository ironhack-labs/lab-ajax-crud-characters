const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const chContainer = document.querySelector('.characters-container');
  
  // copy, then remove template card
  const chTemplate = document.querySelector('.character-info');
  const chCard = chTemplate.cloneNode(true);
  chTemplate.remove();

  let createNewCards = (obj) => {
    for (let i=0; i < obj.length; i++) {
      if (i == 0) {
        // clears previous results
        document.querySelectorAll('.result-card').forEach(e => e.remove());
      }
      let newCard = chCard.cloneNode(true);
      newCard.classList.add('result-card');
      newCard.querySelector('.name').innerHTML = `<strong>Name:</strong> ${obj[i].name}`;
      newCard.querySelector('.occupation').innerHTML = `<strong>Occupation:</strong> ${obj[i].occupation}`;
      newCard.querySelector('.cartoon').innerHTML = `<strong>Is a Cartoon?:</strong> ${obj[i].cartoon}`;
      newCard.querySelector('.weapon').innerHTML = `<strong>Weapon:</strong> ${obj[i].weapon}`;
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
    const result = await charactersAPI.getOneRegister(requestedId);
    createNewCards([result]);
    console.log(`Here that one ID: ${result}`);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
