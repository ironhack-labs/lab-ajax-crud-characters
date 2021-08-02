const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  

  const buildCharacterBox = (character) => {

    const characterCartoonValue = character.cartoon === true ? 'Yes' : 'No'

    const newElement = `
      <div class="character-info">
        <div class="name">${character.name} - ID ${character.id}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${characterCartoonValue}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
    `
    document.querySelector('.characters-container').innerHTML += newElement
  }

  const fetchAll = () => {
    document.querySelector('.characters-container').innerHTML = ''
    charactersAPI.getFullList().then(result => {
      result.forEach(element => {
        buildCharacterBox(element)
      })
    })
  }

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    fetchAll()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    document.querySelector('.characters-container').innerHTML = ''
    const id = document.querySelector('input[name="character-id"]').value
 
    charactersAPI.getOneRegister(id).then((result) => {
      buildCharacterBox(result)
    })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    
    // document.querySelector('.characters-container').innerHTML = ''
    
    const idDelete = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(idDelete).then((result) => {
      document.querySelector('#delete-one').className='active';

      result = fetchAll();
    })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let id = document.querySelector('#edit-character-form input[name="chr-id"]').value
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    let name = document.querySelector('#edit-character-form input[name="name"]').value
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked


    const updatedCharacter = {
      name, 
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.updateOneRegister(id, updatedCharacter).then((result) => {
      return result
    })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let occupation = document.querySelector('#new-character-form input[name="occupation"]').value
    let name = document.querySelector('#new-character-form input[name="name"]').value
    let weapon = document.querySelector('#new-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked

    let newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    }

    charactersAPI.createOneRegister(newCharacter).then((result) => {
      return result
    })
  });
});
