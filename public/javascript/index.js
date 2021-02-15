const charactersAPI = new APIHandler('http://localhost:8000');

// Reusable functions
const removeAllChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

//DOM Manipulation
window.addEventListener('load', () => {
  // Fetch all
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((charactersList) => {
      let parent = document.getElementById('all-characters')
      removeAllChildren(parent)

      charactersList.data.forEach(char => {
        let character = document.createElement('div')
        character.setAttribute('class', 'character-info')
        character.setAttribute('id', `${char.id}`)
        character.innerHTML = `
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="cartoon">Cartoon? ${char.cartoon}</div>
        <div class="weapon">${char.weapon}</div>`
        parent.appendChild(character)
      });
    })

  });

  // Fetch one by ID
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let charId = document.getElementById('get-id').value
    let parent = document.getElementById('all-characters')
    removeAllChildren(parent)

    charactersAPI
    .getOneRegister(charId)
      .then((char) => {
        let character = document.createElement('div')
        character.setAttribute('class', 'character-info')
        character.innerHTML = `${char.data.name}`
        parent.appendChild(character)
        document.getElementById('get-id').value = '' // out of scope charId
      })
  });

  // Delete one by Id
   document.getElementById('delete-one').addEventListener('click', function (event) {
    // No show
    let charId = document.getElementById('delete-id').value
    let charToDelete = document.getElementById(charId)
    let parent = document.getElementById('all-characters')
    parent.removeChild(charToDelete)

    //Delete from DB
    charactersAPI
    .deleteOneRegister(charId)
    .then(res => {
      document.getElementById('delete-id').value = ''
    })
    .catch(e => console.log(e))
  });

  //Edit
    // Look for char
  document.getElementById('look-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    editId = document.getElementById('id-edit').value

    charactersAPI
    .getOneRegister(editId)
      .then((data) => {
        document.getElementById('name-edit').value = data.data.name
        document.getElementById('occupation-edit').value = data.data.occupation
        document.getElementById('weapon-edit').value = data.data.weapon
        document.getElementById('cartoon-edit').checked = data.data.cartoon
      })
      .catch((e) => console.log(e))
  })
    // Edit char
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    editId = document.getElementById('id-edit').value

    const editChar = {
      name: document.getElementById('name-edit').value,
      occupation: document.getElementById('occupation-edit').value,
      weapon: document.getElementById('weapon-edit').value,
      cartoon: document.getElementById('cartoon-edit').checked
    }

    charactersAPI
      .updateOneRegister(editChar, editId)
      .then(res => {
        let parent = document.getElementById('all-characters')
        removeAllChildren(parent)

        document.getElementById('id-edit').value = ''
        document.getElementById('name-edit').value = ''
        document.getElementById('occupation-edit').value = ''
        document.getElementById('weapon-edit').value = ''
        document.getElementById('cartoon-edit').checked = false
      })
      .catch(e => console.log(e))
  });

  // Create
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    const newChar = {
      name: document.getElementById('name-create').value,
      occupation: document.getElementById('occupation-create').value,
      weapon: document.getElementById('weapon-create').value,
      cartoon: document.getElementById('cartoon-create').checked
    }

    charactersAPI
      .createOneRegister(newChar)
      .then(res => {
        let parent = document.getElementById('all-characters')
        removeAllChildren(parent)
        
        document.getElementById('name-create').value = ''
        document.getElementById('occupation-create').value = ''
        document.getElementById('weapon-create').value = ''
        document.getElementById('cartoon-create').checked = false
      })
      .catch(e => console.log(e))
  });
});