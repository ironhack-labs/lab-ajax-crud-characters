const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    event.preventDefault();
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
    event.preventDefault();
    const card = document.querySelector('.characters-container');
    const newCard = document.querySelector(".character-info").cloneNode(true);
    const id = document.querySelector('[name = character-id]').value

    const {data} = await charactersAPI.getOneRegister(id);
    newCard.querySelector('.name').innerHTML = `Name: ${data.name}`;
    newCard.querySelector('.occupation').innerHTML = `Occupation: ${data.occupation}`;
    newCard.querySelector('.cartoon').innerHTML = `Is a cartoon?: ${data.cartoon}`;
    newCard.querySelector('.weapon').innerHTML = `Weapon: ${data.weapon}`;
    card.innerHTML ="";
    card.appendChild(newCard);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.querySelector('[name = character-id-delete]').value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const edit = document.getElementById('edit-character-form');
    const id = edit.querySelector('[name = chr-id]').value
    const name = edit.querySelector('[name = name]').value
    const occupation = edit.querySelector('[name = occupation]').value
    const weapon = edit.querySelector('[name = weapon]').value
    const cartoon = edit.querySelector('[name = cartoon]').checked
    charactersAPI.updateOneRegister(id,name, occupation , weapon, cartoon)
    .then(() =>{
      event.preventDefault();
      document.querySelector('#edit-character-form > button').getElementsByClassName.backgroundColor ="green";
    } 
    ).catch(err => {
      document.querySelector('#edit-character-form > button').getElementsByClassName.backgroundColor ="red";
      console.log(err);
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const create =  document.getElementById('new-character-form')
    const name = document.querySelector('[name = name]').value
    const occupation = document.querySelector('[name = occupation]').value
    const weapon = document.querySelector('[name = weapon]').value
    const cartoon = document.querySelector('[name = cartoon]').checked
    charactersAPI.createOneRegister(name, occupation , weapon, cartoon);
  });
});
