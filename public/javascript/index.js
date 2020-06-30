const charactersAPI = new APIHandler('http://localhost:8000');

//constantes globales
const cContainer = document.querySelector('.characters-container')
const cInfo = document.querySelector('.character-info')


//GET FULL LIST
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    cContainer.innerHTML = ''
    const charactersList = charactersAPI.getFullList()
    charactersList.then(characters => {
      characters.forEach((elem => {
        let clone = cInfo.cloneNode(true)

        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'id')
        clone.prepend(newDiv)
        
        clone.querySelector('.id').innerHTML = 'Id: '+ elem.id
        clone.querySelector('.name').innerHTML = 'Name: '+ elem.name
        clone.querySelector('.occupation').innerHTML = 'Occupation: ' + elem.occupation
        clone.querySelector('.cartoon').innerHTML = 'Is a Cartoon?: ' + elem.cartoon
        clone.querySelector('.weapon').innerHTML = 'Weapon: ' +elem.weapon
        cContainer.appendChild(clone)
      }))
    })
  });

  //GET ONE ELEMENT 
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    
    cContainer.innerHTML = ''
    let id = document.querySelector('.operation input').value
    let character = charactersAPI.getOneRegister(id)
    character.then(character => {
      let clone = cInfo.cloneNode(true)
      
      let newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'id')
      clone.prepend(newDiv)
      
      clone.querySelector('.id').innerHTML = 'Id: '+ character.id
      clone.querySelector('.name').innerHTML = 'Name: '+ character.name
      clone.querySelector('.occupation').innerHTML = 'Occupation: ' + character.occupation
      clone.querySelector('.cartoon').innerHTML = 'Is a Cartoon?: ' + character.cartoon
      clone.querySelector('.weapon').innerHTML = 'Weapon: ' +character.weapon
      cContainer.appendChild(clone)
    })
    document.querySelector('.operation input').value = ''
  });


  //DELETE ONE ELEMENT
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    
    let id = document.querySelector('.delete input').value
    
    
    if(charactersAPI.deleteOneRegister(id)){
      document.querySelector('#delete-one').style.backgroundColor = 'green'
    } else {
      document.querySelector('#delete-one').style.backgroundColor = 'red'
    }

    document.querySelector('.delete input').value = ''
  });


  //EDIT ONE ELEMENT
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    let id = document.querySelector('.idImput input').value
    const inputs = document.querySelectorAll('#edit-character-form input')
    let updatedCharacter = { name: inputs[1].value, 
                            occupation: inputs[2].value, 
                            cartoon: inputs[4].checked, 
                            weapon: inputs[3].value }
                            console.log(inputs)
    
    if(charactersAPI.updateOneRegister(updatedCharacter, id)){
      document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'green'
    } else {
      document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'red'
    }

    document.querySelectorAll('#edit-character-form input').forEach(elem => elem.value = '')
  });


   //CREATE ONE ELEMENT
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    const inputs = document.querySelectorAll('#new-character-form input')
    let newCharacter = { name: inputs[0].value, 
                        occupation: inputs[1].value, 
                        cartoon: inputs[3].checked, 
                        weapon: inputs[2].value }
                        
    if(charactersAPI.createOneRegister(newCharacter)){
      document.querySelector('#new-character-form #send-data').style.backgroundColor = 'green'
    } else {
      document.querySelector('#new-character-form #send-data').style.backgroundColor = 'red'
    }
    document.querySelectorAll('#new-character-form input').forEach(elem => elem.value = '')
  });
});
