const charactersAPI = new APIHandler();

// window.addEventListener('load', () => {
//   document.getElementById('fetch-all').addEventListener('click', function (event) {

//   });

//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// });

// Obtener la información de un personaje para la edición
document.querySelector('#fetch-one').onclick = e => {
  e.preventDefault()

  const characterId = document.querySelector('input[name=character-id]').value

  charactersAPI
    .getOneRegister(characterId)
    .then(character => {

      const { id, name, occupation, cartoon, weapon } = character.data;

      document.querySelector(".characters-container").innerHTML = `
      <div class="character-info">
        <div class="name">Character ID: ${id}</div>
        <div class="name">Character Name: ${name}</div>
        <div class="occupation">Character Occupation: ${occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
        <div class="weapon">Character Weapon: ${weapon}</div>
      </div>`

    })
    .catch(err => console.log('Hubo un error!', err))
}



//Delete
document.querySelector('#delete-one').onclick = e => {
  e.preventDefault()

  const characterId = document.querySelector('input[name=character-id-delete]').value

  charactersAPI
    .deleteOneRegister(characterId)

}

//New Character

document.querySelector('#new-character-form').onsubmit = e => {
  e.preventDefault()

  const inputs = document.querySelectorAll('#new-character-form input')

  const mycharacter = {
    name: inputs[0].value,
    occupation: inputs[1].value,
    weapon: inputs[2].value,
    cartoon: inputs[3].checked
  }


  charactersAPI
    .createOneRegister(mycharacter)



}

// editar
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


//Listar todos los minions
document.querySelector('#fetch-all').onclick = e => {

  e.preventDefault()
  function showCurrentMinions() {

    charactersAPI
      .getFullList()
      .then(allMinions => {
        const allCharacters = allMinions.data.slice(16, 20)
        const infoMinion = document.querySelector('.characters-container')
        let text = ''
        allCharacters.forEach(elm => infoMinion.innerHTML +=
          `<div class="character-info">
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
