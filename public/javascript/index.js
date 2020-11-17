const charactersAPI = new APIHandler('http://localhost:8000');

//----------------FETCH ALL-------------------

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {
        let allChar = response.data
        let allCharHtml = ''

        allChar.forEach(elm => {
          allCharHtml += `<div class="character-info">
                            <div class="name">Name: ${elm.name}</div>
                            <div class="occupation">Occupation: ${elm.occupation}</div>
                            <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                            <div class="weapon">Weapon: ${elm.weapon}</div>
                          </div>`
        })
        
        document.querySelector('.character-info').innerHTML = allCharHtml

      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  
  });

//----------------FETCH ONE-------------------

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      
    const charIDvalue = document.querySelector('.operation input').value
    
     charactersAPI
        .getOneRegister(charIDvalue)
       .then(response => {
         let oneChar = response.data
         console.log(oneChar)
          let oneCharHtml = ''
          oneCharHtml += `<div class="character-info">
                            <div class="name">Name: ${oneChar.name}</div>
                            <div class="occupation">Occupation: ${oneChar.occupation}</div>
                            <div class="cartoon">Is a Cartoon?: ${oneChar.cartoon}</div>
                            <div class="weapon">Weapon: ${oneChar.weapon}</div>
                          </div>`
         
         
         document.querySelector('.character-info').innerHTML = oneCharHtml
          
       })
       .catch(err => console.log('HUBO UN ERROR!', err))

  });

  //----------------DELETE ONE-------------------

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const delCharIDvalue = document.querySelector('.delete input').value
    
    charactersAPI
      .deleteOneRegister(delCharIDvalue)
      .then(() => {
         document.querySelector('#delete-one').style.backgroundColor = 'green'
      })
      .catch(document.querySelector('#delete-one').style.backgroundColor = 'red')

  });


//----------------EDIT CHARACTER-------------------

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault() 

    const inputs = document.querySelectorAll('#edit-character-form input')
    
    const charInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked

    }

    const charID = inputs[0].value

    charactersAPI
      .updateOneRegister(charID, charInfo)
      .then(() => {

        document.querySelector('#update-data').style.backgroundColor = 'green'
      })
      .catch(document.querySelector('#update-data').style.backgroundColor = 'red')








  });


//----------------NEW CHARACTER-------------------


  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault() 

    const inputs = document.querySelectorAll('#new-character-form input')

    const charInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(charInfo)
      .then(() => {
        
        document.querySelector('#send-data').style.backgroundColor = 'green'
        document.querySelector('#new-character-form').reset()
      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });
});
