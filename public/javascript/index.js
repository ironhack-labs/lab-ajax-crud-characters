const charactersAPI = new APIHandler();

//Listar todos los minions
document.querySelector('#fetch-all').onclick = e => {
 
  e.preventDefault()

    function showCurrentMinions(){

  
    charactersAPI
      .getFullList()
      .then(allMinions => {

        const allCharacters = allMinions.data.slice(-6)

        const infoMinion = document.querySelector('.characters-container')

        let text = ''

        allCharacters.forEach(elm => infoMinion.innerHTML += 
        `<div class="character-info">
        <div class="id">Character ID: ${elm.id}</div>
        <div class="name">Name: ${elm.name}</div>
        <div class="occupation">Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
        <div class="weapon">Weapon: ${elm.weapon}</div>
      </div>
    </div>`
  )})
  
     .catch(err => console.log('error', err))
  }

  showCurrentMinions()

}



//Encontrar minion por ID
document.querySelector('#fetch-one').onclick = e => {
  e.preventDefault()

  const minionId = document.querySelector('.operation input').value

  charactersAPI
  .getOneRegister(minionId)
  .then(minion => {
    
      const { id, name, occupation, cartoon, weapon } = minion.data

      const infoMinion = document.querySelector('.characters-container')
     
       infoMinion.innerHTML = 
        `<div class="character-info">
        <div class="id">Character ID: ${id}</div>
        <div class="name"> Name: ${name}</div>
        <div class="occupation">Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
        <div class="weapon">Weapon: ${weapon}</div>
    </div>`

    })

  .catch(err => console.log('Hubo un error!', err))
}



//Eliminar un minion
document.querySelector('#delete-one').onclick = e => {
     e.preventDefault()

  const minionId = document.querySelector('input[name=character-id-delete]').value

  charactersAPI
    .deleteOneRegister(minionId)
    .then(() => {
    document.querySelector('input[name=character-id-delete]').reset()
  })
   .catch(err => console.log('Hubo un error!', err))
}


//Crear un nuevo minion

document.querySelector('#new-character-form').onsubmit = e => {
  e.preventDefault()
  const infoMinions = document.querySelectorAll('#new-character-form input')


  const minion = {
      name: infoMinions[0].value,
      occupation: infoMinions[1].value,
      weapon: infoMinions[3].value,
      cartoon: infoMinions[4].ckecked
    }
  
  //infoMinions[2].value === "on" ? minion.cartoon = true : minion.cartoon = false
  charactersAPI
    .createOneRegister(minion)

}

//Editar minion

document.querySelector('#edit-character-form').onsubmit = e => {
  e.preventDefault()
  const infoMinions = document.querySelectorAll('#edit-character-form input')

  const minionId = infoMinions[0].value

  const minionInfo = {
    name: infoMinions[1].value,
    occupation: infoMinions[2].value,
    weapon: infoMinions[3].value,
    cartoon: infoMinions[4].ckecked
  }
  //infoMinions[3].value === "on" ? minion.cartoon = true : minion.cartoon = false

  charactersAPI
    .updateOneRegister(minionId, minionInfo)

}
