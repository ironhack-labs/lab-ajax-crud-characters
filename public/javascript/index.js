const charactersAPI = new APIHandler('http://localhost:8000');

// List minions
document.querySelector('#fetch-all').onclick = e => {
  e.preventDefault()

  function showCurrentMinions() {

    charactersAPI
      .getFullList()
      .then(allMinions => {
        const allCharacters = allMinions.data.slice(-10)
        const infoMinion = document.querySelector('.characters-container')
        let text = ''
        allCharacters.forEach(elm => infoMinion.innerHTML +=
          `<div class="character-info">
        <div class="id">Character ID: ${elm.id}</div>
        <div class="name">Character Name: ${elm.name}</div>
        <div class="occupation">Character Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
        <div class="weapon">Character Weapon: ${elm.weapon}</div>
      </div>
    </div>`
        )
      })

      .catch(err => console.log('error', err))
  }
  showCurrentMinions()
}

//Show one
document.querySelector('#fetch-one').onclick = e => {
  e.preventDefault()
  
  const minionId = document.querySelector('input[name=character-id]').value
  
  charactersAPI
  .getOneRegister(minionId)
  .then(minion => {
    const { id, name, occupation, cartoon, weapon } = minion.data
    
    const minionInfo = document.querySelector(".characters-container")
    minionInfo.innerHTML = 
      `<div class="character-info">
      <div class="id">Character ID: ${id}</div>
      <div class="name">Character Name: ${name}</div>
      <div class="occupation">Character Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
      <div class="weapon">Character Weapon: ${weapon}</div>
    </div>
    </div>`
  })
  .catch(err => console.log('error', err))
}

//Delete minion
document.querySelector('#delete-one').onclick = e => {
  e.preventDefault()

  const minionId = document.querySelector('input[name=character-id-delete]').value

  charactersAPI
    .deleteOneRegister(minionId)
}

//Create minion
document.querySelector('#new-character-form').onsubmit = e => {
  e.preventDefault()
  const minionData = document.querySelectorAll("#new-character-form input")

  const minionInfo = {
    name: minionData[0].value,
    occupation: minionData[1].value,
    weapon: minionData[2].value,
    cartoon: minionData[3].checked
  }

  charactersAPI
    .createOneRegister(minionInfo)
}

//Edit minion
document.querySelector("#edit-character-form").onsubmit = e => {
  e.preventDefault()
  const minionData = document.querySelectorAll("#edit-character-form input")

  const minionId = minionData[0].value

  const minionInfo = {
    name: minionData[1].value,
    occupation: minionData[2].value,
    weapon: minionData[3].value,
    cartoon: minionData[4].checked
  }

  charactersAPI
    .updateOneRegister(minionId, minionInfo)
}