

const charactersAPI = new APIHandler('http://localhost:8000');

const fetchAll =() => {
  const characterContainer =  document.querySelector('.characters-container')
   characterContainer.innerHTML = '' // zerou o character container
    charactersAPI.getFullList().then(result => {
      const {data} = result
      data.map((element) => {
        characterContainer.innerHTML += `<div class="character-info">
          <div class="name">Character Name: ${element.name}</div>
          <div class="occupation">Character Occupation: ${element.occupation}</div>
          <div class="cartoon">${element.cartoon ? 'Is a Cartoon' : 'Is not a Cartoon'}</div>
          <div class="weapon">Character Weapon: ${element.weapon} id: ${element.id}</div>
        </div>`
      })
      
      
    }).catch(err => alert('erro'))
}

window.addEventListener('load', () => {
  fetchAll()
  document.getElementById('fetch-all').addEventListener('click',  function (event) {
    fetchAll()
    
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterContainer =  document.querySelector('.characters-container')
    characterContainer.innerHTML = ''
    const characterId = document.querySelector('#character-id').value
    console.log(characterId)
    charactersAPI.getOneRegister(characterId).then((result) => {
      const {data} = result
          return  characterContainer.innerHTML = `<div class="character-info">
          <div class="name">Character Name: ${data.name}</div>
          <div class="occupation">Character Occupation: ${data.occupation}</div>
          <div class="cartoon">${data.cartoon ? 'Is a Cartoon' : 'Is not a Cartoon'}</div>
          <div class="weapon">Character Weapon: ${data.weapon}</div>
        </div>`
        
      
    }).catch(err => alert('erro'))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const deleteButtonValue = document.querySelector('#character-id-delete').value
    charactersAPI.deleteOneRegister(deleteButtonValue).then(() => {
      document.querySelector('#delete-one').style.backgroundColor = "green"
      
      
    }
    
  ).catch((error) => {console.log(error)
    {document.querySelector('#delete-one').style.backgroundColor = "red"
    
  }})})

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const characterId = document.querySelector('input[name="chr-id"]').value
    let name = document.querySelector('#edit-character-form input[name="name"]').value
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked
    
    const updateCharacter = { 
      name,
      occupation,
      weapon,
      cartoon
    }

      charactersAPI.updateOneRegister(characterId, updateCharacter).then(result => result)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()


    let name = document.querySelector('#new-character-form input[name="name"]').value
    let occupation = document.querySelector('#new-character-form input[name="occupation"]').value
    let weapon = document.querySelector('#new-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked
    
    const newCharacter = { 
      name,
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.createOneRegister(newCharacter).then((result) => console.log(result))

    console.log(newCharacter)



  });
});
