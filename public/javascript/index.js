const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  // let createNewCard = () => {

  // }

  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    event.preventDefault();
    const listOfAll = await charactersAPI.getFullList();
    const chContainer = document.querySelector('.characters-container');
    const chTemplate = document.querySelector('.character-info');
    const chCard = chTemplate.cloneNode(true);

    console.log(listOfAll);

    for (let i=0; i < listOfAll.length; i++) {
      if (i == 0) {
        // clears previous potential results
        chTemplate.remove();
        document.querySelectorAll('.result-card').forEach(e => e.remove());
      }
      let newCard = chCard.cloneNode(true);
      newCard.classList.add('result-card');
      newCard.querySelector('.name').innerHTML = `<strong>Name:</strong> ${listOfAll[i].name}`;
      newCard.querySelector('.occupation').innerHTML = `<strong>Occupation:</strong> ${listOfAll[i].occupation}`;
      newCard.querySelector('.cartoon').innerHTML = `<strong>Is a Cartoon?:</strong> ${listOfAll[i].cartoon}`;
      newCard.querySelector('.weapon').innerHTML = `<strong>Weapon:</strong> ${listOfAll[i].weapon}`;
      chContainer.appendChild(newCard);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
