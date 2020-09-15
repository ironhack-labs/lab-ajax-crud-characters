const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList().then((characters) => {
      let characterInfo = ''
      characters.data.forEach(character => {
        characterInfo += `
        <div class="character-info">
        <div class="name"> ID: ${character.id}</div>
        <div class="name"> Name: ${character.name}</div>
        <div class="occupation"> Occupation: ${character.occupation}</div>
        <div class = "weapon"> Weapon: ${character.weapon} </div>
        <div class="cartoon">Is Cartoon?: ${character.cartoon}</div>        
      </div>`
      });

      document.querySelector('.characters-container').innerHTML = characterInfo;
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const id = document.querySelector('input[name=character-id]').value
    charactersAPI
      .getOneRegister(id)
      .then((character) => {
        const { id, name, occupation, cartoon, weapon } = character.data;
    
        document.querySelector('.characters-container').innerHTML = `
        <div class="character-info">
          <div class="name">ID: ${id}</div>
          <div class="name">Name: ${name}</div>
          <div class="occupation">Occupation: ${occupation}</div>
          <div class = "weapon">Weapon: ${weapon} </div>
          <div class="cartoon">Is Cartoon?: ${cartoon}</div>
        </div>`
        const inputs = document.querySelectorAll('#edit-character-form input')
        inputs[0].value = id
        inputs[1].value = name
        inputs[2].value = occupation
        inputs[3].value = weapon
        inputs[4].checked = cartoon
      })
      .catch(err => console.log('Hubo un error!', err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.deleteOneRegister(document.querySelector('input[name=character-id-delete]').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const id = document.querySelector('#edit-character-form input[name=chr-id]').value;
    const name = document.querySelector('#edit-character-form input[name=name]').value;
    const occupation = document.querySelector('#edit-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#edit-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked;

    const characterInfo = { id, name, occupation, weapon, cartoon }
    
    charactersAPI.updateOneRegister(id, characterInfo)
      .then(() => document.querySelector('#edit-character-form').reset())
      .catch(err => console.log('Hubo un error!', err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.querySelector('#new-character-form input[name=name]').value;
    const occupation = document.querySelector('#new-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#new-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked;

    const createRegister = { name, occupation, weapon, cartoon }
    let span = document.getElementById("send-data");
    let classes = span.classList;

    
    charactersAPI.createOneRegister(createRegister)
      .then(() => {
        document.querySelector('#new-character-form').reset()
        classes.toggle('active')
      })
      .catch(err => console.log('Hubo un error!', err))


  });

});