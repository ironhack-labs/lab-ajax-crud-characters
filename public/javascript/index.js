const charactersAPI = new APIHandler('http://localhost:8000');

const createCharacterBox = (element) => {
  let characterInfo = document.createElement('div');
  characterInfo.innerHTML = `<div class="name">Character Name: ${element.name}</div>
  <div class="occupation">Character Occupation: ${element.occupation}</div>
  <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
  <div class="weapon">Character Weapon: ${element.weapon}</div>`
  characterInfo.classList.add('character-info');
  document.querySelector('.characters-container').appendChild(characterInfo);
}

//FETCH ALL
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI
    .getFullList()
    .then((response) => {
      document.querySelector('.characters-container').innerHTML = '';
      response.data.forEach(element => createCharacterBox(element))
    })
    .catch((err) => console.log(err));
  });

  //FETCH ONE
  document.getElementById('fetch-one').addEventListener('click', function () {
    const id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id)
    .then(response => {
      document.querySelector('.characters-container').innerHTML = '';
      createCharacterBox(response.data);

      document.querySelector('.edit-id').value = response.data.id
      document.querySelector('.edit-name').value = response.data.name;
      document.querySelector('.edit-occupation').value = response.data.occupation;
      document.querySelector('.edit-weapon').value = response.data.weapon;
      document.querySelector('.edit-cartoon').checked = response.data.cartoon;
    })
    .catch(err => console.log(err))
  });

  //DELETE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id)
      .then(response => {
        document.querySelector('#delete-one').classList.add('active');
      })
      .catch(err => {
        document.querySelector('#delete-one').classList.add('error');
        console.log(err)
      })
  });

  //UPDATE
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.querySelector('.edit-id').value;
    const name = document.querySelector('.edit-name').value;
    const occupation = document.querySelector('.edit-occupation').value;
    const weapon = document.querySelector('.edit-weapon').value;
    const cartoon = document.querySelector('.edit-cartoon').checked;

    const updatedCharacter = 
    {
      id,
      name,
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.updateOneRegister(id, updatedCharacter)
    .then(response => {
      console.log(response)
      document.querySelector('#send-data2').classList.add('active');
    })
    .catch(err => {
      document.querySelector('#send-data2').classList.add('error');
      console.log(err)})
  });

  //EDIT
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('.create-name').value
    const occupation = document.querySelector('.create-occupation').value
    const weapon = document.querySelector('.create-weapon').value
    const cartoon = document.querySelector('.create-cartoon').checked

    const newCharacter = 
    {
      name,
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.createOneRegister(newCharacter)
    .then(response => {
      
      document.querySelector('#send-data').classList.add('active');
      console.log(response)

    })
    .catch(err => {
      document.querySelector('#send-data').classList.add('error');
      console.log(err)
    })
  });
});
