//const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

// refreshCharacters()
// function refreshCharacters() {



 window.addEventListener('load', () => {
  

document.getElementById('fetch-all').addEventListener('click', function (event) {


/////////////////////FULL LIST

charactersAPI
  .getAllFullList()
  .then(response => {
    let characters = response.data, list = ''
    characters.forEach(elm => list +=
      `<div class="character-info">
        <div class="id">Id: <strong>${elm.id}</strong></div>
        <div class="name">Name: <strong>${elm.name}</strong></div>
        <div class="occupation">Occupation: <strong>${elm.occupation}</strong></div>
        <div class="cartoon">Is a Cartoon? <strong>${elm.cartoon}</strong></div>
        <div class="weapon">Weapon: <strong>${elm.weapon}</strong></div>
        </div>`)
    document.querySelector('characters-container').innerHTML = list
  })
  .catch(err => console.log('ERROR', err))
});





document.getElementById('fetch-one').addEventListener('click', function (event) {


/////////////////////ONE REGISTER

const characterId = document.querySelector('.operation input').value

charactersAPI
  .getOneRegister(characterId)
  .then(response => {
    document.querySelector('.characters-container').innerHTML =
      `<div class="character-info">
          <div class="id">Id: <strong>${response.data.id}</strong></div>
          <div class="name">Name: <strong>${response.data.name}</strong></div>
          <div class="occupation">Occupation: <strong>${response.data.occupation}</strong></div>
          <div class="cartoon">Is a Cartoon? <strong>${response.data.cartoon}</strong></div>
          <div class="weapon">Weapon: <strong>${response.data.weapon}</strong></div>
          </div>`
  })
  .catch(err => console.log('ERROR', err))

});




 document.getElementById('delete-one').addEventListener('click', function (event) {


/////////////////////DELETE

const characterId = document.querySelector('.operation.delete input').value

charactersAPI
  .deleteOneRegister(characterId)
  .then(() => document.getElementById('delete-one'))
  .catch(err => {
    document.getElementById('delete-one')
    console.log('ERROR', err)
  })

 });




//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

// /////////////////////EDIT

// e.preventDefault()

// const id = document.querySelector('#edit-character-form .field input[name="chr-id"]').value
// const name = document.querySelector('#edit-character-form .field input[name="name"]').value
// const occupation = document.querySelector('#edit-character-form .field input[name="occupation"]').value
// const weapon = document.querySelector('#edit-character-form .field input[name="weapon"]').value
// const cartoon = document.querySelector('#edit-character-form .field input[name="cartoon"]').checked

// const editCharacter = { name, occupation, weapon, cartoon }

// charactersAPI
//   .updateOneRegister(id, editCharacter)
//   .then(() => {
//     document.getElementById('send-data-updated')
//   })
//   .catch(err => console.log(err))

//   });




//document.getElementById('new-character-form').addEventListener('submit', function (event) {


// });



/////////////////////ADD NEW ONE

// document.querySelector('#newCharacterForm').onsubmit = e => {

//   e.preventDefault()

//   const id = document.querySelector('#edit-character-form .field input[name="chr-id"]').value
//   const name = document.querySelector('#edit-character-form .field input[name="name"]').value
//   const occupation = document.querySelector('#edit-character-form .field input[name="occupation"]').value
//   const weapon = document.querySelector('#edit-character-form .field input[name="weapon"]').value
//   const cartoon = document.querySelector('#edit-character-form .field input[name="cartoon"]').checked

//   const character = {
//     name: inputs[0].value,
//     occupation: inputs[1].value,
//     weapon: inputs[2].value
//   }

//   charactersApi
//     .createCharacter(character)
//     .then(() => {
//       refreshCharacters()

//       document.querySelector('#newCharacterForm').reset()
//     })
//     .catch(err => console.log(err))
// }

   });

