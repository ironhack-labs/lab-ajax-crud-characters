const charactersAPI = new APIHandler();


window.addEventListener('load', () => {

  function getList() {
    charactersAPI
      .getFullList()
      .then(response => {
        let charactersHtlml = ''
        response.data.forEach(elm => {
          charactersHtlml += `<article class='character-info'>
                                <p>Id: ${elm.id}</p>
                                <p>Name: ${elm.name}</p>
                                <p>Occupation: ${elm.occupation}</p>
                                <p>Is a Cartoon?: ${elm.cartoon}</p>
                                <p>Weapon: ${elm.weapon}</p>
                              </article>`
        })
        document.querySelector('#character-list').innerHTML = charactersHtlml
      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  }

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    getList()
  }
  );

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characterIDValue = document.querySelector('#getInfoForm input').value
    charactersAPI
      .getOneRegister(characterIDValue)
      .then(response => {
        document.querySelector('.name').innerHTML = `Character Name: ${response.data.name}`
        document.querySelector('.occupation').innerHTML = `Character Occupation: ${response.data.occupation}`
        document.querySelector('.cartoon').innerHTML = `Is a Cartoon?: ${response.data.cartoon}`
        document.querySelector('.weapon').innerHTML = `Character Weapon: ${response.data.weapon}`

      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characterIDValue = document.querySelector('#deleteInfoForm input').value
    charactersAPI
      .deleteOneRegister(characterIDValue)
      .then(() => {
        document.querySelector('#delete-one').style.backgroundColor = 'green';
        setTimeout(() => document.querySelector('#delete-one').style = undefined, 2000);
        getList()

      })
      .catch(err => {
        document.querySelector('#delete-one').style.backgroundColor = 'red';
        setTimeout(() => document.querySelector('#delete-one').style = undefined, 2000);
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const characterIDValue = document.querySelector('#edit-character-form input').value
    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked,
    }
    console.log(characterInfo)

    charactersAPI
      .updateOneRegister(characterIDValue, characterInfo)
      .then(response => {
        document.querySelector('#update-data').style.backgroundColor = 'green';
        setTimeout(() => document.querySelector('#update-data').style = undefined, 2000);
        getList()
      })
      .catch(() => {
        document.querySelector('#update-data').style.backgroundColor = 'red'
        setTimeout(() => document.querySelector('#update-data').style = undefined, 2000);
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {

      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(response => {
        document.querySelector('#send-data').style.backgroundColor = 'green';
        setTimeout(() => document.querySelector('#send-data').style = undefined, 2000);
        getList()
      })
      .catch(() => {
        document.querySelector('#send-data').style.backgroundColor = 'red'
        setTimeout(() => document.querySelector('#send-data').style = undefined, 2000);
      })
  });
});
