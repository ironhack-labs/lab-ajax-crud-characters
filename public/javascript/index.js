const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', event => {
    charactersAPI.getFullList()
    .then(charactersList => {
      console.table(charactersList.data)
      document.querySelector('.characters-container').innerHTML = ''
      charactersList.data.forEach(char => {
        document.querySelector('.characters-container').innerHTML += createCharHtml(char)
      })
    })
    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', event => {
    charactersAPI.getOneRegister(document.querySelector('#search-one-char').value)
    .then(character => {
      console.table(character.data)
      document.querySelector('.characters-container').innerHTML = ''
      document.querySelector('.characters-container').innerHTML += createCharHtml(character.data)
      document.querySelector('#edit-id').value = character.data.id
      document.querySelector('#edit-name').value = character.data.name
      document.querySelector('#edit-occupation').value = character.data.occupation
      document.querySelector('#edit-weapon').value = character.data.weapon
      document.querySelector('#edit-isCartoon').checked = character.data.cartoon
    })
    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', event => {
    charactersAPI.deleteOneRegister(document.querySelector('#delete-one-char').value)
    .then(characterDeleted => {
      document.querySelector('#delete-one').style.backgroundColor = 'green'
    })
    .catch(document.querySelector('#delete-one').style.backgroundColor = 'red')
  });

  document.getElementById('edit-character-form').addEventListener('submit', event => {
    event.preventDefault();
    const id = document.querySelector('#edit-id').value
    const name = document.querySelector('#edit-name').value
    const occupation = document.querySelector('#edit-occupation').value
    const weapon = document.querySelector('#edit-weapon').value
    const cartoon = document.querySelector('#edit-isCartoon').checked
    const editedChar = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister(editedChar)
    .then(response => document.querySelector('button#edit-send-data').style.backgroundColor = 'green')
      .catch(err => {
        document.querySelector('button#edit-send-data').style.backgroundColor = 'red'
        console.log(err)
      })

  });

  document.getElementById('new-character-form').addEventListener('submit', event => {
    event.preventDefault();
    const newChar = {
      name: document.querySelector('#create-name').value,
      occupation: document.querySelector('#create-occupation').value,
      weapon: document.querySelector('#create-weapon').value,
      cartoon: document.querySelector('#create-iscartoon').checked
    }
    charactersAPI.createOneRegister(newChar)
    .then(response => document.querySelector('button#create-send-data').style.backgroundColor = 'green')
    .catch(err => {
      document.querySelector('button#create-send-data').style.backgroundColor = 'red'
      console.log(err)
    })
  });
});


function createCharHtml (character) {
  return `<div class="character-info">
            <div class="name">id: ${character.id} </div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a cartoon?: ${character.cartoon === true ? "Yes" : "No"}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`
}