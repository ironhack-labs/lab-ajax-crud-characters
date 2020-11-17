
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI
      .getFullList()
      .then(fullList => {
        document.querySelector('.characters-container').innerHTML = ''

        charList = fullList.data.splice(359, 4)   // Splice hecho para que la App no se rompa porque hay demasiados objetos en la API.

        charList.forEach(elm => {
          const charHTML = `<div class="character-info">
            <div class="name">ID: <span>${elm.id}</span></div>
            <div class="name">Name: <span>${elm.name}</span></div>
            <div class="occupation">Occupation: <span>${elm.occupation}</span></div>
            <div class="cartoon">Is a cartoon?: <span>${elm.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${elm.weapon}</span></div>
          </div>`

          document.querySelector('.characters-container').innerHTML += charHTML
        })


      })
      .catch(err => console.log('Error in getFullList()', err))
    
  });



  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const charId = document.querySelector('#input-get-one').value
    
    charactersAPI
      .getOneRegister(charId)
      .then(charInfo => {

        const htmlText = `<div class="name">ID: <span>${charInfo.data.id}</span></div>
        <div class="name">Name: <span>${charInfo.data.name}</span></div>
        <div class="occupation">Occupation: <span>${charInfo.data.occupation}</span></div>
        <div class="cartoon">Is a cartoon?: <span>${charInfo.data.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${charInfo.data.weapon}</span></div>`

        document.querySelector('.character-info').innerHTML = htmlText

        const editInputs = document.querySelectorAll('#edit-character-form input')

        editInputs[0].value = charInfo.data.id
        editInputs[1].value = charInfo.data.name
        editInputs[2].value = charInfo.data.occupation
        editInputs[3].value = charInfo.data.weapon
        editInputs[4].checked = charInfo.data.cartoon

      })
      .catch(err => console.log('Error in getOneRegister()', err))
    
  });



  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
  
    const allInputs = document.querySelectorAll('#new-character-form input')

    const charInfo = {
      name: allInputs[0].value,
      occupation: allInputs[1].value,
      weapon: allInputs[2].value,
      cartoon: allInputs[3].checked
    }

    charactersAPI
      .createOneRegister(charInfo)
      .then(newChar => {
        console.log('The new character is:', newChar.data)
        document.querySelector('#new-character-form').reset()
        //document.querySelectorAll('#delete-one').className('active')      // <= NO FUNCIONA: .className is not a function
    })
      .catch(err => {
        console.log('Error in createOneRegister()', err)
        //document.querySelectorAll('#delete-one').className('inactive')      // <= NO FUNCIONA: .className is not a function
      })
    
  });



  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()

    const charId = document.querySelector('#input-get-one').value

    const editInputs = document.querySelectorAll('#edit-character-form input')

    const editChar = {
      id: editInputs[0].value,
      name: editInputs[1].value,
      occupation: editInputs[2].value,
      weapon: editInputs[3].value,
      cartoon: editInputs[4].checked
    }

    charactersAPI
      .updateOneRegister(charId, editChar)
      .then(() => {
        console.log('The updated character is:', editChar)
        document.querySelector('#character-id-fetch').reset()
        document.querySelector('#edit-character-form').reset()
        //document.querySelectorAll('#delete-one').className('active')      // <= NO FUNCIONA: .className is not a function
      })
      .catch(err => {
        console.log('Error in updateOneRegister()', err)
        //document.querySelectorAll('#delete-one').className('inactive')      // <= NO FUNCIONA: .className is not a function
      })
    
  });



  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()
  
    const charId = document.querySelector('#input-delete-one').value
    
    charactersAPI
      .deleteOneRegister(charId)
      .then(() => {
        document.querySelector('#character-id-delete').reset()
        //document.querySelectorAll('#delete-one').className('active')      // <= NO FUNCIONA: .className is not a function
      })
      .catch(err => {
        console.log('Error in getOneRegister()', err)
        //document.querySelectorAll('#delete-one').className('inactive')      // <= NO FUNCIONA: .className is not a function
      })

  });

});