const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const card = document.querySelector('.characters-container');
    card.innerHTML ="";
    const {data} = await charactersAPI.getFullList()
    data.forEach(character => {
      const newCard = document.createElement("div");
      newCard.className = "character-info";
      
      const name = document.createElement("div");
      name.className="name";
      name.innerHTML =  `Name: ${character.name}`;
      newCard.appendChild(name);

      const occupation = document.createElement("div");
      occupation.className="occupation";
      occupation.innerHTML = `Occupation: ${character.occupation}`;
      newCard.appendChild(occupation);

      const cartoon = document.createElement("div");
      cartoon.className = "cartoon";
      cartoon.innerHTML = `Is a cartoon?: ${character.cartoon}`;
      newCard.appendChild(cartoon);

      const weapon = document.createElement("div");
      weapon.className = "weapon";
      weapon.innerHTML =  `Weapon: ${character.weapon}`;
      newCard.appendChild(weapon);

      card.appendChild(newCard);
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const card = document.querySelector('.characters-container');
    card.innerHTML ="";
    const id = document.querySelector('[name = character-id]').value
    const {data} = await charactersAPI.getOneRegister(id);
    console.log(data)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
