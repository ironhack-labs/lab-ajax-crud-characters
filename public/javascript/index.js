const charactersAPI = new APIHandler('http://localhost:8000');
charactersAPI.getFullList()

const charactContainer = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    
    const charactArray = await charactersAPI.getFullList()
    charactArray.innerHTML = "";
    charactArray.forEach(charact => { 
      charactContainer.innerHTML += 
      `
    <div class="character-info">
      <div class="name">Character Name: ${charact.name}</div>
      <div class="occupation">Character Occupation: ${charact.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${charact.cartoon}</div>
      <div class="weapon">Character Weapon: ${charact.weapon}</div>
    </div>
    `
    })


  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    
    const { value: charactID} = document.querySelector('.operation input')

    const singleCharact = await charactersAPI.getOneRegister(charactID)

    charactContainer.innerHTML = `
      <div class="character-info">
        <div class="name">Character Name: ${singleCharact.name}</div>
        <div class="occupation">Character Occupation: ${singleCharact.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${singleCharact.cartoon}</div>
        <div class="weapon">Character Weapon: ${singleCharact.weapon}</div>
      </div>
    `

  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    
    const { value: charactID } = document.querySelector('.delete input')
    console.log('charactID', charactID)

    const singleCharact = await charactersAPI.deleteOneRegister(charactID)
    
    const deleteBtn = document.getElementById('delete-one')
    if (!singleCharact) {
      deleteBtn.style.backgroundColor = 'red'
    }
    deleteBtn.style.backgroundColor = 'green'
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const { value: charactID} = document.getElementById('chr-id')
    const { value: name} = document.getElementById('edit-name')
    const { value: occupation} = document.getElementById('edit-occupation')
    const { value: weapon} = document.getElementById('edit-weapon')
    const { value: cartoon} = document.getElementById('edit-checkbox')

    const charactInfo = { 
      id: `${charactID}`,
      name : `${name}`,
      occupation : `${occupation}`,
      weapon : `${weapon}`,
      cartoon : `${cartoon}`
    }

    const updateCharact = await charactersAPI.updateOneRegister(charactInfo)

    const updateBtn = document.getElementById('edit-data')
    if (!updateCharact) {
      updateBtn.style.backgroundColor = 'red'
    }
    updateBtn.style.backgroundColor ='green'

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {

    const { value: name} = document.getElementById('name')
    const { value: occupation} = document.getElementById('occupation')
    const { value: weapon} = document.getElementById('weapon')
    const { value: cartoon} = document.getElementById('cartoon')

    const newCharactInfo = { 
      name : `${name}`,
      occupation : `${occupation}`,
      weapon : `${weapon}`,
      cartoon : `${cartoon}`
    }

    const newCharact = await charactersAPI.createOneRegister(newCharactInfo)
    
    const createBtn = document.getElementById('send-data')
    if (!newCharact) { 
      createBtn.style.backgroundColor = 'red'
    }
    createBtn.style.backgroundColor = 'green';

  });
});
