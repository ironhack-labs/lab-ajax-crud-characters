const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  
  // LOAD ALL CHARACTERS
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(response => {
      const data = response.data;
      let charList = ''

      data.forEach(item => {
        console.log(item);
        const {id, name, occupation, weapon, cartoon} = item;

        charList += `
        <div class="character-info">
        <div class="id">ID: ${id}</div>
        <div class="name">Name: ${name}</div>
        <div class="occupation">Occupation: ${occupation}</div>
        <div class="cartoon">Is cartoon?: ${cartoon}</div>
        <div class="weapon">Weapon: ${weapon}</div>
        </div>`
      })
      
      document.getElementById('characters-list').innerHTML = charList;
    })
    .catch(err => {
      console.log('Error retrieving characters: ', err)
    })

    
  });

  // RETRIEVE SPECIFIC CHARACTER
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('fetch-one-id').value;

    charactersAPI.getOneRegister(id)
    .then(response => {
      const data = response.data

      const {id, name, occupation, weapon, cartoon} = data;
      let charList = ''

      charList += `
        <div class="character-info">
        <div class="id">ID: ${id}</div>
        <div class="name">Name: ${name}</div>
        <div class="occupation">Occupation: ${occupation}</div>
        <div class="cartoon">Is cartoon?: ${cartoon}</div>
        <div class="weapon">Weapon: ${weapon}</div>
        </div>`

        document.getElementById('characters-list').innerHTML = charList;
    })
    .catch(err => console.log('Error retrieving character with id: ', id))
  });

  // DELETE CHARACTER
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById('delete-one-id').value;

    charactersAPI.deleteOneRegister(id)
    .then(response => {
      document.getElementById('delete-one').style.backgroundColor = "green";
    })
    .catch(err => {
      console.log('Could not delete character!', err)
      document.getElementById('delete-one').style.backgroundColor = "red";
    })
  });

  // EDIT CHARACTER
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById('update-one-id').value;
    const name = document.getElementById('update-name-input').value;
    const occupation = document.getElementById('update-occupation-input').value;
    const weapon = document.getElementById('update-weapon-input').value;
    let cartoon;

    if (document.getElementById('update-cartoon-input').value === 'on') {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon
  }

    charactersAPI.updateOneRegister(id, updatedCharacter)
    .then(response => {
      console.log(response)
      document.getElementById('send-data').style.backgroundColor = "green";
    })
    .catch(err => {
      console.log('Could not update character!', err)
      document.getElementById('send-data').style.backgroundColor = "red";
    })
  });
  
  // CREATE CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    let cartoon;

    if (document.getElementById('cartoon-input').value === 'on') {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon
    }

    charactersAPI.createOneRegister(newCharacter)
    .then(response => {
      console.log(response)
      document.getElementById('create-data').style.backgroundColor = "green";
    })
    .catch(err => {
      console.log('Could not create character!', err)
      document.getElementById('create-data').style.backgroundColor = "red";
    })
  });
});
