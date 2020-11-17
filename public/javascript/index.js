const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) { // FETCH ALL (Declarada debajo del todo)
    
    updateList()
      
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) { // FETCH ONE
    event.preventDefault()
    const registerIdValue = document.querySelector('.operation input').value
    
    charactersAPI
      .getOneRegister(registerIdValue)
      .then(res => {
        let allInfo = [res.data]
        let InfoHtml = ''
        if (allInfo[0] === null) {
          InfoHtml = 'Invalid ID'
        } else {
            allInfo.forEach(elm => {
            InfoHtml += `<div class=\"character-info\">
            <div class=\"id\">ID: ${elm.id}</div>
            <div class=\"name\">Name: ${elm.name}</div>
            <div class=\"occupation\">Occupation: ${elm.occupation}</div>
            <div class=\"cartoon\">Is a Cartoon?: ${elm.cartoon}</div>
            <div class=\"weapon\">Weapon: ${elm.weapon}</div>
            </div>`
            })
        }
        
        document.querySelector('.characters-container').innerHTML = InfoHtml

      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) { // DELETE CHARACTER

    event.preventDefault()

    const registerId = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(registerId)
      .then(() => updateList()) // Para ver que has cambiado correctamente el registro
      .catch(err => console.log('HUBO UN ERROR!', err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) { // EDIT CHARACTER

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')
    
    const registerInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    const registerId = document.querySelector('#edit-character-form input').value

    charactersAPI
      .updateOneRegister(registerId, registerInfo)
      .then(() => updateList()) // Para ver que has cambiado correctamente el registro
      .catch(err => console.log('HUBO UN ERROR!', err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) { // CREATE CHARACTER

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')
    
    const registerInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(registerInfo)
      .then(() => updateList()) // Para ver que has creado correctamente el registro
      .catch(err => console.log('HUBO UN ERROR!', err))

  });
});


// FUNCION DE FETCH ALL
function updateList() {
      charactersAPI
        .getFullList()
        .then(res => {
          let allInfo = res.data // Se podría recortar el array para hacerlo más manejable
          let InfoHtml = ''

          allInfo.forEach(elm => {
            InfoHtml += `<div class=\"character-info\">
              <div class=\"id\">ID: ${elm.id}</div>
              <div class=\"name\">Name: ${elm.name}</div>
              <div class=\"occupation\">Occupation: ${elm.occupation}</div>
              <div class=\"cartoon\">Is a Cartoon?: ${elm.cartoon}</div>
              <div class=\"weapon\">Weapon: ${elm.weapon}</div>
              </div>`
          });

          document.querySelector('.characters-container').innerHTML = InfoHtml

        })
        .catch(err => console.log('HUBO UN ERROR!', err))
    }