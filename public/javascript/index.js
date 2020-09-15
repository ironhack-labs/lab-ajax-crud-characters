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
    const inputs = document.querySelectorAll('#edit-character-form input')    
    const myCharacter = {
        id: inputs[0].value,
        name: inputs[1].value,
        occupation: inputs[2].value,
        weapon: inputs[3].value,
        cartoon: inputs[4].checked
    }
                
    charactersAPI
        .updateOneRegister(myCharacter.id, myCharacter)
        .then((editedCharacter) => {    
                console.log(editedCharacter.data)
            })
        .catch(err => {    
            console.log('Hubo un error!', err)                
        })
                
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
    charactersAPI.createOneRegister(newCharacter)
        .then(newCharacter => console.log(`one register created =>> ${newCharacter}`))
        .catch(err => console.log(err))
  });
});