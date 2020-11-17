const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  //Traer todos los personajes (he hecho un .slice para que no apareciesen los 317 en pantalla porque eran interminables)

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {                                                     
        
        let allCharacters = response.data.slice(0,4)
        let charactersHTML = ''
        
        allCharacters.forEach(elm => {
          charactersHTML += `<div class="character-info">
                            <div>${elm.name}</div>
                            <div>${elm.occupation}</div>
                            <div>${elm.cartoon}</div>
                            <div>${elm.weapon}</div>
                          </div>`
                          })

          document.querySelector('.characters-container').innerHTML = charactersHTML
      })                                                             
      .catch(err => console.log('error', err))

  });

  //Seleccionar sólo un personaje por ID 

  document.getElementById('fetch-one').addEventListener('click', function (event) {

      event.preventDefault()
      
    const charactersIDvalue = document.querySelector('.operation input').value
    
    charactersAPI
      .getOneRegister(charactersIDvalue)
      .then(response => {

        let allCharacters = [response.data]
        let charactersHTML = ''

        allCharacters.forEach(elm => {

            charactersHTML += `<div class="character-info">
                            <div>${elm.name}</div>
                            <div>${elm.occupation}</div>
                            <div>${elm.cartoon}</div>
                            <div>${elm.weapon}</div>
                          </div>`
                          })
          
          document.querySelector('.characters-container').innerHTML = charactersHTML
      })
      .catch(err => console.log('error', err))
    
  });

  // Eliminar un personaje por ID

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const charactersIDvalue = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(charactersIDvalue)
      .then(() => {

        document.querySelector('#delete-one').style.backgroundColor = 'green'

      })
      .catch(document.querySelector('#delete-one').style.backgroundColor = 'red')

  });


  // Editar un personaje 

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

     event.preventDefault()

     const inputs = document.querySelectorAll('#edit-character-form input')
     const charactersId = inputs[0].value

    const charactersInfo = {
       id: inputs[0].value,
       name: inputs[1].value,
       occupation: inputs[2].value,
       weapon: inputs[3].value,
       cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(charactersId, charactersInfo)
      .then(() => {
        
        document.querySelector('#update-data').style.backgroundColor ='green'
    
      })
      .catch(document.querySelector('#update-data').style.backgroundColor = 'red')
       
   });
  
  // Crear un nuevo personaje

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault() 
    const inputs = document.querySelectorAll('#new-character-form input')

   const charactersInfo = {
       name: inputs[0].value,
       occupation: inputs[1].value,
       weapon: inputs[2].value,
       cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(charactersInfo)
      .then(() => {
        
        document.querySelector('#send-data').style.backgroundColor ='green'
    
      })
      .catch(document.querySelector('#send-data').style.backgroundColor = 'red')

  });
});
