const charactersAPI = new APIHandler("http://localhost:8000/characters")

const setCards = (characters) => {
  charContainer = document.getElementById('characters-container');
  charContainer.innerHTML = '';
  characters.forEach(element => {

  const charInfoCard = document.createElement('div');
  charInfoCard.classList.add('character-info');

  const charId = document.createElement('div');
  charId.classList.add('id');
  charId.innerHTML = `Id: <span>${element.id}</span>`;

  const charName = document.createElement('div');
  charName.classList.add('name');
  charName.innerHTML = `Name: <span>${element.name}</span>`;

  const charOccupation = document.createElement('div');
  charOccupation.classList.add('occupation');
  charOccupation.innerHTML = `Occupation: <span>${element.occupation}</span>`;

  const charCartoon = document.createElement('div');
  charCartoon.classList.add('cartoon');
  charCartoon.innerHTML = `Cartoon: <span>${element.cartoon}</span>`;

  const charWeapon = document.createElement('div');
  charWeapon.classList.add('weapon');
  charWeapon.innerHTML = `Weapon: <span>${element.weapon}</span>`;

  charInfoCard.appendChild(charId);
  charInfoCard.appendChild(charName);
  charInfoCard.appendChild(charOccupation);
  charInfoCard.appendChild(charCartoon);
  charInfoCard.appendChild(charWeapon);

  charContainer.appendChild(charInfoCard);
});
}

document.getElementById('fetch-all').onclick = function(){
  charactersAPI.getFullList()
  .then(result => {
    setCards(result.data);
  })
  .catch(err => console.log(err));
}

document.getElementById('fetch-one').onclick = function(){
  charactersAPI.getOneRegister(document.getElementsByName('character-id')[0].value)
  .then(result => {
    setCards([result.data]);
  })
  .catch(err => console.log(err));
  document.getElementsByName('character-id')[0].value = '';
}

document.getElementById('delete-one').onclick = function(){
  charactersAPI.deleteOneRegister(document.getElementsByName('character-id-delete')[0].value)
  .then(() => {
    document.getElementById('delete-one').style.backgroundColor = 'green';
  })
  .catch(err => {
    document.getElementById('delete-one').style.backgroundColor = 'red';
    console.log(err);
  });
  document.getElementsByName('character-id-delete')[0].value = '';
  setTimeout(() => {
    document.getElementById('delete-one').style.backgroundColor = 'transparent';
  }, 4000);
}


document.getElementById('edit-character-form').onsubmit = function(e){
  e.preventDefault();

  const name = document.getElementsByName('name')[1].value;
  const occupation = document.getElementsByName('occupation')[1].value;
  const weapon = document.getElementsByName('weapon')[1].value;
  const cartoon = document.getElementsByName('cartoon')[1].checked;
  
  charactersAPI.updateOneRegister(document.getElementsByName('chr-id')[0].value, name, occupation, weapon, cartoon)
  .then(() => {
    document.getElementById('send-data-edit').style.backgroundColor = 'green';
  })
  .catch(err => {
    document.getElementById('send-data-edit').style.backgroundColor = 'red';
    console.log(err);
  });
  setTimeout(() => {
    document.getElementById('send-data-edit').style.backgroundColor = 'transparent';
  }, 4000);
  document.getElementsByName('chr-id')[0].value = '';
  document.getElementsByName('name')[1].value = '';
  document.getElementsByName('occupation')[1].value = '';
  document.getElementsByName('weapon')[1].value = '';
  document.getElementsByName('cartoon')[1].checked = false;
}

document.getElementsByName('chr-id')[0].onchange = function(e) {
  charactersAPI.getOneRegister(e.target.value)
  .then(character => {
    if (character.data) {
      document.getElementsByName('name')[1].value = character.data.name;
      document.getElementsByName('occupation')[1].value = character.data.occupation;
      document.getElementsByName('weapon')[1].value = character.data.weapon;
      document.getElementsByName('cartoon')[1].checked = character.data.cartoon;
    } 
  })
  .catch(err => {
    console.log(err);
    document.getElementsByName('name')[1].value = '';
    document.getElementsByName('occupation')[1].value = '';
    document.getElementsByName('weapon')[1].value = '';
    document.getElementsByName('cartoon')[1].checked = false;
  });
}

document.getElementById('new-character-form').onsubmit = function(e){
  e.preventDefault();
  const name = document.getElementsByName('name')[0].value;
  const occupation = document.getElementsByName('occupation')[0].value;
  const weapon = document.getElementsByName('weapon')[0].value;
  const cartoon = document.getElementsByName('cartoon')[0].checked;

  charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  .then(() => {
    document.getElementById('send-data').style.backgroundColor = 'green';
  })
  .catch(err => {
    document.getElementById('send-data').style.backgroundColor = 'red';
    console.log(err);
  });

  setTimeout(() => {
    document.getElementById('send-data').style.backgroundColor = 'transparent';
  }, 4000);
  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('occupation')[0].value = '';
  document.getElementsByName('weapon')[0].value = '';
  document.getElementsByName('cartoon')[0].checked = false;
}
