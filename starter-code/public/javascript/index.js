const charactersAPI = new APIHandler("http://localhost:8000")
const id = document.querySelector('#character-id')
const updateId = document.querySelector('#chr-id')
const newName = document.querySelector('#name')
const newOccupation = document.querySelector('#occupation')
const newWeapon = document.querySelector('#weapon')
const newCartoon = document.querySelector('#cartoon')
const deleteOne = document.querySelector('#delete-one')
const deleteInput = document.querySelector('#delete-input')
const updateName = document.querySelector('#update-name')
const updateWeapon = document.querySelector('#update-weapon')
const updateCartoon = document.querySelector('#update-checkbox')
const updateOccupation = document.querySelector('#update-occupation')
const name = document.querySelector('.name')
const occupation = document.querySelector('.occupation')
const weapon = document.querySelector('.weapon')
const cartoon = document.querySelector('.cartoon')
const characterInfo = document.querySelector('.character-info')
const characterContainer = document.querySelector('.characters-container')
const sendData = document.querySelector('#send-data')
const createData = document.querySelector('#create-data')
const fetchOne = document.querySelector('#fetch-one')

characterInfo.style.display = 'none'

//$(document).ready(() => {
document.getElementById('fetch-all').onclick = async function (e) {
  e.preventDefault()
 
  const {
    data
  } = await charactersAPI.getFullList()
  await showAll(data)

}


const showAll = (data) => {
  characterContainer.innerHTML = ''
  console.log('ladata:' + data.name)
  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      const cloneCharacter = characterInfo.cloneNode(true)
      cloneCharacter.children[0].innerHTML = `Name: ${data[i].name}`
      cloneCharacter.children[1].innerHTML = `Occupation: ${data[i].occupation}`
      cloneCharacter.children[2].innerHTML = `Weapon: ${data[i].weapon}`
      cloneCharacter.children[3].innerHTML = `Is a Cartoon?: ${data[i].cartoon}`
      cloneCharacter.style.display = 'inline'
      characterContainer.appendChild(cloneCharacter)
    }
  } else {
   
    const cloneCharacter = characterInfo.cloneNode(true)
    cloneCharacter.children[0].innerHTML = `Name: ${data.name}`
    cloneCharacter.children[1].innerHTML = `Occupation: ${data.occupation}`
    cloneCharacter.children[2].innerHTML = `Weapon: ${data.weapon}`
    cloneCharacter.children[3].innerHTML = `Is a Cartoon?: ${data.cartoon}`
    cloneCharacter.style.display = 'inline'
    characterContainer.appendChild(cloneCharacter)
  }

}

document.getElementById('fetch-one').onclick = async function (e) {
  e.preventDefault()

  const {
    data
  } = await charactersAPI.getOneRegister(id.value)
  if (!data){
    fetchOne.style.backgroundColor = 'red'
  } else {
 
  await showAll(data)
  fetchOne.style.backgroundColor = 'green'
  }

}

document.getElementById('delete-one').onclick = async function (e) {
  e.preventDefault()

  const result = await charactersAPI.deleteOneRegister(deleteInput.value)
  console.log(result)
  if (!result) {
    deleteOne.style.backgroundColor = 'red'
  } else {
    deleteOne.style.backgroundColor = 'green'
  }

  //const {
  //  data
  //} = await charactersAPI.getFullList()
  //showAll(data)

}

document.getElementById('edit-character-form').onsubmit = async function (e) {
  e.preventDefault()

  const agarrar = await charactersAPI.getOneRegister(updateId.value)
  if (agarrar) {
    const {
      data: {
        id
      }

    } = agarrar
    console.log(updateCartoon)
    const empujar = await charactersAPI.updateOneRegister({
      name: updateName.value,
      occupation: updateOccupation.value,
      weapon: updateWeapon.value,
      cartoon: updateCartoon.checked

    }, id)
    const {
      data
    } = await charactersAPI.getFullList()
    showAll(data)
    sendData.style.backgroundColor = 'green'
  } else {
    sendData.style.backgroundColor = 'red'
  }

}

document.getElementById('new-character-form').onsubmit = async function (e) {
  e.preventDefault()
  
  const newCharacter = {
    name: newName.value,
    occupation: newOccupation.value,
    weapon: newWeapon.value,
    cartoon: newCartoon.checked,
  }

  const laCreacion = await charactersAPI.createOneRegister(newCharacter)
  if (laCreacion) {
    const {
      data
    } = await charactersAPI.getFullList()
    showAll(data)
    document.getElementById('new-character-form').reset()
    createData.style.backgroundColor = 'green'
  } else {
    createData.style.backgroundColor = 'red'
  }
}




//})