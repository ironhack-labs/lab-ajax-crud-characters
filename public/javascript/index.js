const charactersAPI = new APIHandler()

window.addEventListener('load', () => {



// Fetch all characters
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {

        let allChar = response.data
        let charHtml = ''

        allChar.forEach(elm => {
          charHtml += `<div class="character-info">
                          <div class="id">
                            <p>Id: ${elm.id}</p>
                          </div>
                          <div class="name">
                            <p>Name: ${elm.name}</p>
                          </div>
                          <div class="occupation">
                            <p>Occupation: ${elm.occupation}</p>
                          </div>
                          <div class="cartoon">
                            <p>Is a Cartoon?: ${elm.cartoon}</p>
                          </div>
                          <div class="weapon">
                            <p>Weapon: ${elm.weapon}</p>       
                          </div>
                      </div>`
        })
        document.querySelector('.characters-container').innerHTML = charHtml
      })
      .catch(err => console.log('Hubo un error!', err))
  })



// Fetch one character
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const charIdValue = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(charIdValue)
      .then(response => {

        let charHtml = ''

        charHtml = `<div class="id">
                      <p>Id: ${response.data.id}</p>
                    </div>
                    <div class="name">
                      <p>Name: ${response.data.name}</p>
                    </div>
                    <div class="occupation">
                      <p>Occupation: ${response.data.occupation}</p>
                    </div>
                    <div class="cartoon">
                      <p>Is a Cartoon?: ${response.data.cartoon}</p>
                    </div>
                    <div class="weapon">
                      <p>Weapon: ${response.data.weapon}</p>       
                    </div>`
      
        document.querySelector('.character-info').innerHTML = charHtml
      })
      .catch(err => console.log('Hubo un error!', err))
  })
  


  // Delete one character
  document.getElementById('delete-one').addEventListener('click', function (event) {

    const charIdValue = document.querySelector('.delete input').value

    charactersAPI
      .getOneRegister(charIdValue)  // Para comprobar si existe el personaje
      .then(response => {
        if (response.data === null) {  // Si no existe

          let charHtml = document.querySelector('#delete-one')
          charHtml.classList.add('error')  // Si hay un error cambiar el color del boton a rojo
        
        } else {

          charactersAPI.deleteOneRegister(charIdValue)
          let charHtml = document.querySelector('#delete-one')
          charHtml.classList.add('active')  // Si todo OK cambia el color del boton a verde
        
        }
      })
      .catch(err => console.log('Hubo un error!', err))
  })



  // Edit a character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()  // Para evitar que se actualice la pagina

    const inputs = document.querySelectorAll('#edit-character-form input')

    const charInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked,
    }

    const charIdValue = document.querySelector('#edit-character-form input').value

    charactersAPI
      .updateOneRegister(charIdValue, charInfo)
      .then(response => {
        let charHtml = document.querySelector('#edit-character-form #send-data')
        charHtml.classList.add('active')  // Si todo OK cambia el color del boton a verde
        document.querySelector('#edit-character-form').reset()  // Para resetar el formulario
      })
      .catch(err => {
        let charHtml = document.querySelector('#edit-character-form #send-data')
        charHtml.classList.add('error')  // Si hay un error cambiar el color del boton a rojo
        console.log('Hubo un error!', err)
      })
  })



  // Create new character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault() // Para evitar que se actualice la pagina

    const inputs = document.querySelectorAll('#new-character-form input')

    const charInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(charInfo)
      .then(response => {
        let charHtml = document.querySelector('#new-character-form #send-data')
        charHtml.classList.add('active')  // Si todo OK cambia el color del boton a verde
        document.querySelector('#new-character-form').reset()  // Para resetar el formulario
      })
      .catch(err => {
        let charHtml = document.querySelector('#new-character-form #send-data')
        charHtml.classList.add('error')  // Si hay un error cambiar el color del boton a rojo
        console.log('Hubo un error!', err)
      })
  })

})
