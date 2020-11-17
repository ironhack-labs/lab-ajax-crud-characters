const charactersAPI = new APIHandler();

window.addEventListener('load', () => {

  //MOSTRAR TODOS
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI
      .getFullList()
      .then(response => {
        let allCharacters = response.data.reverse()
        let charHtml = ''

        allCharacters.forEach(elm => {
          charHtml += `
            <div class="character-info" >
        <div class="id">Id: ${elm.id}</div>
        <div class="name">Name: ${elm.name}</div>
        <div class="occupation">Occupation: ${elm.occupation}</div>
        <div class="cartoon">Cartoon: ${elm.cartoon}</div>
        <div class="weapon">Weapon: ${elm.weapon}</div>
        </div >`
        })

        document.querySelector('#allCharacters').innerHTML = charHtml
      })

      .catch(err => console.log('HUBO UN ERROR!', err))
  });

  //BUSCAR POR ID
  document.getElementById('fetch-one').addEventListener('click', function (event) {


    event.preventDefault()
    const charIDvalue = document.querySelector('#search input').value
    console.log(charIDvalue)

    charactersAPI
      .getOneRegister(charIDvalue)
      .then(response => {
        console.log(response.data)
        if (charIDvalue != '' && charIDvalue >= 0) {

          let char = response.data
          let charHtml = `
        <div class="name">Name: ${char.name}</div>
        <div class="occupation">Occupation: ${char.occupation}</div>
        <div class="cartoon">Cartoon: ${char.cartoon}</div>
        <div class="weapon">Weapon: ${char.weapon}</div>`

          document.querySelector('#singleCharacter').innerHTML = charHtml
          document.querySelector('#fetch-one').style.backgroundColor = 'green'
        } else {
          document.querySelector('#fetch-one').style.backgroundColor = 'red'
          let charHtml = `
        <p>Not available ID</p>`
          document.querySelector('#singleCharacter').innerHTML = charHtml
        }
      })
      .catch(err => {
        let charHtml = `
        <p>Not available ID</p>`
        document.querySelector('#fetch-one').style.backgroundColor = 'red'
        document.querySelector('#singleCharacter').innerHTML = charHtml
        console.log('HUBO UN ERROR!', err)
      })
  });

  //ELIMINAR
  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const charIDvalue = document.querySelector('.delete input').value

    console.log(charIDvalue)
    charactersAPI
      .deleteOneRegister(charIDvalue)
      .then(response => {
        document.querySelector('.delete-btn').style.backgroundColor = 'green'
        console.log(response.data)
        if (response.data === null) {
          document.querySelector('.delete-btn').style.backgroundColor = 'red'
        }
      })
      .catch(err => {
        document.querySelector('.delete-btn').style.backgroundColor = 'red'
        console.log('HUBO UN ERROR!', err)
      })
  });


  //EDITAR
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    const charIDvalue = document.querySelector('#id input').value
    console.log(charIDvalue)

    const input = document.querySelectorAll('#edit-character-form input')

    const charInfo = {
      id: input[0].value,
      name: input[1].value,
      occupation: input[2].value,
      weapon: input[3].value,
      cartoon: input[4].checked
    }

    charactersAPI
      .updateOneRegister(charIDvalue, charInfo)
      .then(response => {
        document.querySelector('.edit-btn').style.backgroundColor = 'green'
        console.log(response)
      })
      .catch(err => {
        document.querySelector('.edit-btn').style.backgroundColor = 'red'
        console.log('HUBO UN ERROR!', err)
      })
  });

  //AÑADIR NUEVO

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const input = document.querySelectorAll('#new-character-form input')

    const charInfo = {
      name: input[0].value,
      occupation: input[1].value,
      weapon: input[2].value,
      cartoon: input[3].checked
    }
    if (charInfo.name === '' && charInfo.occupation === '' && charInfo.weapon === '') {
      document.querySelector('#send-data').style.backgroundColor = 'red'
    } else {
      charactersAPI
        .createOneRegister(charInfo)
        .then(response => {
          console.log(response)
          console.log(charInfo)
          document.querySelector('#send-data').style.backgroundColor = 'green'
          document.querySelector('#new-character-form').reset()
        })
        .catch(err => {
          document.querySelector('#send-data').style.backgroundColor = 'red'
          console.log('HUBO UN ERROR!', err)
        })
    }
  });
});
