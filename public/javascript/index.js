const charactersAPI = new APIHandler('http://localhost:8000');

function listAllCharacters(object){

  for (let character of object) {
    
    let container =   document.querySelector('.characters-container')
    
    let infoBox = document.createElement('div')
    infoBox.classList.add('character-info')
    
    let nameBox = document.createElement('div')
    nameBox.classList.add('name')
    nameBox.innerHTML = character.name
    
    let occupationBox = document.createElement('div')
    occupationBox.classList.add('occupation')
    occupationBox.innerHTML = character.occupation

    let cartoonBox = document.createElement('div')
    cartoonBox.classList.add('cartoon')
    cartoonBox.innerHTML = character.cartoon

    let weaponBox = document.createElement('div')
    weaponBox.classList.add('weapon')
    weaponBox.innerHTML = character.weapon

    infoBox.appendChild(nameBox)
    infoBox.appendChild(occupationBox)
    infoBox.appendChild(cartoonBox)
    infoBox.appendChild(weaponBox)

    container.appendChild(infoBox)
    
  }

}

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', async function (event) {
  
    let characters = await charactersAPI.getFullList()
      
      listAllCharacters(characters.data) 
    
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    
    let id = document.getElementsByName('character-id')[0]
    
   let singleCharacter = await charactersAPI.getOneRegister(id.value)
      
    listAllCharacters([singleCharacter.data])  

  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    
    let id = document.getElementsByName('character-id-delete')[0]

    await charactersAPI.deleteOneRegister (id.value)

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {

  
  let idToEdit = document.getElementsByName('chr-id') 
  let nameToEdit = document.getElementsByName('name')
  let occupationToEdit = document.getElementsByName('occupation')
  let weaponToEdit = document.getElementsByName('weapon')
  let cartoonToEdit = document.getElementsByName('cartoon')
    
    
  await charactersAPI.updateOneRegister(idToEdit[0].value,

    {id:idToEdit[0].value,
      name:nameToEdit[1].value,
      occupation:occupationToEdit[1].value,
      weapon:weaponToEdit[1].value,
      cartoon:cartoonToEdit[1].checked})

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
   
    let newName = document.getElementsByName('name')
    let newOccupation = document.getElementsByName('occupation')
    let newWeapon = document.getElementsByName('weapon')
    let newCartoon = document.getElementsByName('cartoon')

    await charactersAPI.createOneRegister({

      id:'',
      name:newName[0].value,
      occupation:newOccupation[0].value,
      weapon:newWeapon[0].value,
      cartoon:newCartoon[0].checked})

  });

});






