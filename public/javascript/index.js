const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      charactersAPI
        .getFullList()
        .then(characters => {
          // console.log(characters.data[0])
          let text = ''
          for(let i = 0; i <= 3; i++){
            text += `<div class = "character-info">
            <div class="name">name: <i>${characters.data[i].name}</i></div>
            <div class="occupation">occupation: <i>${characters.data[i].occupation}</i></div>
            <div class="cartoon">is a cartoon?: <i>${characters.data[i].cartoon}</i></div>
            <div class="weapon">Weapon: <i>${characters.data[i].weapon}</i></div>
            </div>`
            
          }
          document.querySelector('.characters-container').innerHTML = text
        })

        .catch(err => console.log('Hubo un error!', err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('.operation input').value

        charactersAPI
          .getOneRegister(characterId)
          .then(singleCharact =>{
            console.log(singleCharact)
            let text = ''

            text += `<div class = "character-info">
            <div class="name">name: <i>${singleCharact.data.name}</i></div>
            <div class="occupation">occupation: <i>${singleCharact.data.occupation}</i></div>
            <div class="cartoon">is a cartoon?: <i>${singleCharact.data.cartoon}</i></div>
            <div class="weapon">Weapon: <i>${singleCharact.data.weapon}</i></div>
            </div>`
            
  
          document.querySelector('.characters-container').innerHTML = text
          })
          .catch(err => console.log('Hubo un error!', err))

  });





  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('.delete input').value

    charactersAPI
          .deleteOneRegister(characterId)
          .then(()=>{
            document.querySelector('.delete button').classList.add("backgroundGreen")

          })
          .catch(err => {
            document.querySelector('.delete button').classList.add("backgroundRed")
            console.log('Hubo un error!', err)})



  });




  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let idField = document.querySelector('.id-text').value
    let idToEdit = ""
     console.log(idField)
      if(idField){
         console.log("otra vez", idField)
        charactersAPI
          .getOneRegister(idField)
          .then(charToDelete =>{
            console.log(charToDelete)         
            const inputs = document.querySelectorAll("#edit-character-form input")
          
            inputs[1].value = charToDelete.data.name
            inputs[2].value = charToDelete.data.occupation
            inputs[3].value = charToDelete.data.weapon
         
            idToEdit = charToDelete.data.id
            inputs[0].value = ""      //aquí lo convertimos en un falsie, por lo que al volver a clicar update pasaría al else
            console.log(idToEdit)
          })
          .catch(err => console.log('Hubo un error!', err))



      } else{
        const updInputs = document.querySelectorAll("#edit-character-form input")


        const charToEdit = {
          name : updInputs[1].value,
          occupation : updInputs[2].value,
          weapon : updInputs[3].value,
          cartoon : true
        }
        console.log(charToEdit)

        charactersAPI
          .updateOneRegister(idToEdit, charToEdit)
          .then(()=>{
            console.log("hola")
            document.querySelector('#send-update').classList.add("backgroundGreen")
          })
          .catch(err => {
            document.querySelector('#send-update').classList.add("backgroundRed")
            console.log('Hubo un error!', err)})
          

      }

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
     const inputs = document.querySelectorAll('#new-character-form input')
    // console.log(inputs)

    const myCharacter = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value,
        cartoon: true
    }   

    // // inputs[3].value === "on" ? myCharacter.cartoon = false : myCharacter.cartoon = true

     console.log(myCharacter)

    charactersAPI
        .createOneRegister(myCharacter)
        .then(()=>{
          console.log("hola")
          document.querySelector('#send-create').classList.add("backgroundGreen")

        })
        .catch(err => {
          document.querySelector('#send-create').classList.add("backgroundRed")
          console.log('Hubo un error!', err)})

  });


});
