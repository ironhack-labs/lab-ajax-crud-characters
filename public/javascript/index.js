const charactersAPI = new APIHandler();



window.addEventListener('load', () => {


  /////////////////////FULL LIST

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {
        let charsArr = response.data, list = ''
        charsArr.forEach(elm => list +=
          `<div class="character-info">
        <div class="name">Name: <strong>${elm.name}</strong></div>
        <div class="occupation">Occupation: <strong>${elm.occupation}</strong></div>
        <div class="cartoon">Is a Cartoon? <strong>${elm.cartoon}</strong></div>
        <div class="weapon">Weapon: <strong>${elm.weapon}</strong></div>
        </div>`)
        document.querySelector('.characters-container').innerHTML = list
      })
      .catch(err => console.log('ERROR', err))
  });






  /////////////////////ONE REGISTER


  document.getElementById('fetch-one').addEventListener('click', function (event) {


    const characterId = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {
        document.querySelector('.characters-container').innerHTML =
          `<div class="character-info">
            <div class="id">Id:<strong>${response.data.id}</strong></div>
            <div class="name">Name: <strong>${response.data.name}</strong></div>
            <div class="occupation">Occupation: <strong>${response.data.occupation}</strong></div>
            <div class="cartoon">Is a Cartoon? <strong>${response.data.cartoon}</strong></div>
            <div class="weapon">Weapon: <strong>${response.data.weapon}</strong></div>
            </div>`
      })
      .catch(err => console.log('ERROR', err))

  });



  /////////////////////DELETE

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('.operation.delete input').value

    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => document.getElementById('delete-one'))
      .catch(err => {
        document.getElementById('delete-one')
        console.log('ERROR', err)
      })

  });




 /////////////////////EDIT

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  //     e.preventDefault()

  //     const id = document.querySelector('#edit-character-form .field input[name="chr-id"]').value
  //     const name = document.querySelector('#edit-character-form .field input[name="name"]').value
  //     const occupation = document.querySelector('#edit-character-form .field input[name="occupation"]').value
  //     const weapon = document.querySelector('#edit-character-form .field input[name="weapon"]').value
  //     const cartoon = document.querySelector('#edit-character-form .field input[name="cartoon"]').checked

  //     const editCharacter = { name, occupation, weapon, cartoon }

  //     charactersAPI
  //       .updateOneRegister(id, editCharacter)
  //       .then(() => {
  //         document.getElementById()
  //       })
  //       .catch(err => console.log(err))

     });



   /////////////////////ADD NEW ONE

   document.getElementById('new-character-form').addEventListener('submit', function (event) {

      e.preventDefault()

      const name = document.querySelectorAll('#new-character-form .field input[name="name"]').value
      const occupation = document.querySelectorAll('#new-character-form .field input[name="occupation"]').value
      const weapon = document.querySelectorAll('#new-character-form .field input[name="weapon"]').value
      const cartoon = document.querySelectorAll('#new-character-form .field input[name="cartoon"]').checked

      const newCharacter = { name, occupation, weapon, cartoon }

      charactersAPI
        .creatOneRegister(newCharacter)
        .then(() => {
          refreshCharacters()
          e.target.reset()
        })
        .catch(err => console.log(err))
   });

});

// # es una id 
// . es para una clase