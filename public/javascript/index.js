const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI

      .getFullList()
      .then(response => {

        let allMinions = response.data
        let minionsHtml = ''

        allMinions.forEach(elm => {

          minionsHtml += `<div class="character-info">
          <div <strong>${elm.name}</strong></div>
          <div <strong>${elm.occupation}</strong> </div>
          <div <strong>${elm.cartoon}</strong> </div>
          <div <strong>${elm.weapon}</div>
        </div>`
        })

        document.querySelector('.characters-container').innerHTML = minionsHtml

      })
      .catch(err => console.log("ERROR", err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()
  
    const minionIDvalue = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(minionIDvalue)
      .then(response => {

        let allMinions = [response.data]
        let minionsHtml = ''

        if (allMinions[0] === null) {
          minionsHtml = 'This is an invalidID, sorry'

        } else {
          
         allMinions.forEach(elm => {
  
          minionsHtml += `<div class="character-info">
            <div <strong>${elm.name}</strong></div>
            <div <strong>${elm.occupation}</strong> </div>
            <div <strong>${elm.cartoon}</strong> </div>
            <div <strong>${elm.weapon}</div>
          </div>`
        })
        }
  

        document.querySelector('.characters-container').innerHTML = minionsHtml

      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()
  
    const minionIDvalue = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(minionIDvalue)
      .then(() =>
 
        document.querySelector('#delete-one').style.backgroundColor = 'green'

      )
      .catch (err => document.querySelector('#delete-one').style.backgroundColor = 'red'
  )});


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const editMinions = document.querySelectorAll('#edit-character-form input')

    const minionsInfo = {

      id: editMinions[0].value,
      name: editMinions[1].value,
      occupation: editMinions[2].value,
      weapon: editMinions[3].value,
      cartoon: editMinions[4].checked
    }

    const minionIDvalue = document.querySelector('#edit-character-form input').value

    charactersAPI
      .updateOneRegister(minionIDvalue, minionsInfo)
      .then(() => 
        
      document.querySelector('#update-data').style.backgroundColor = 'green'
 )
      .catch(err => document.querySelector('#update-data').style.backgroundColor = 'red')
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const createMinions = document.querySelectorAll('#new-character-form input')

    const minionsInfo = {

      name: createMinions[0].value,
      occupation: createMinions[1].value,
      weapon: createMinions[2].value,
      cartoon: createMinions[3].checked
    }

    charactersAPI
      .createOneRegister(minionsInfo)
      .then(() => 
        
      document.querySelector('#send-data').style.backgroundColor = 'green'
 )
      .catch(err => document.querySelector('#send-data').style.backgroundColor = 'red')


  });
});
