const charactersAPI = new APIHandler();

window.addEventListener('load', () => {  // fetch all characters
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      
    charactersAPI.getFullList()
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    
  });
                // Fetch only 1 character
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()
    const id = document.querySelectorAll('.operations input')[0].value
    console.log(id)
    
    //console.log(id)
    charactersAPI.getOneRegister(id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    
  });
                // Delete 1 character
  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault();
    const id = document.querySelectorAll('.operations input')[1].value;
    console.log(id)

    charactersAPI.deleteOneRegister(id)
        .then(res => console.log(`id ${id} Deleted`))
        .catch(err => console.log(err))
  });
                // Edit 1 character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    //const inputs = document.querySelectorAll('#edit-character-form input')

    const charId = document.querySelector('#edit-character-form input').value

   // console.log(charId)

    charactersAPI.getOneRegister(charId)
        .then((res) => {

            console.log(res.data)
            document.querySelectorAll('#edit-character-form input')[1].value = res.data.name
            document.querySelectorAll('#edit-character-form input')[2].value = res.data.occupation
            document.querySelectorAll('#edit-character-form input')[3].value = res.data.weapon

           // document.querySelector('#edit-character-form').reset()
        })
        .catch(err => console.log(err))

  });
                // Create new character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
   
    const inputs = document.querySelectorAll('#new-character-form input')

    const newCharacter = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        cartoon: true,
        weapon: inputs[2].value
    }

    console.log(newCharacter)


    charactersAPI.createOneRegister(newCharacter)
        .then(newCharacter => console.log(`one register created =>> ${newCharacter}`))
        .catch(err => console.log(err))
  });
});


/*function showCurrentCharacters() {

    return charactersAPI.getFullList()
        .then(allChars => {
            let text = ''
            allChars.data.forEach(elm =>  text += `<li>${elm.name} (${elm.occupation})</li>`)
            document.querySelector('#edit-character-form').innerHTML = text
        })
        .catch(err => console.log('Hubo un error!', err))
    
}*/