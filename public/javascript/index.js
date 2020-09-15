const charactersAPI = new APIHandler()

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {
        const charactersContainer = document.querySelector('.characters-container')

        response.forEach(element => {
          charactersContainer.innerHTML = `   <div class="character-info">
         <div class="idCharacter">
         ID:
          <span>${response.data.id}</span>
          </div>
 
          <div class="name">
         Character:
         <span>${response.data.name}</span>
         </div>  
 
         <div class="occupation">
         Occupation:
         <span>${response.data.occupation}</span>
         </div>
       
         <div class="cartoon">
         Is a Cartoon?:
         <span>${response.data.cartoon}</span>
         </div>
 
          <div class="weapon">
         Weapon:
         <span>${response.data.weapon}</span>
         </div>`
        })

      })
    //.catch(err => console.log('Hubo un error!', err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('#character-id').value


    charactersAPI
      .getOneRegister(characterId)
      .then(response => {
        const charactersContainer = document.querySelector('.characters-container')
        console.log(response.data.id)
        charactersContainer.innerHTML = `   <div class="character-info">
        <div class="idCharacter">
        ID:
        <span>${response.data.id}</span>
        </div>
 
        <div class="name">
        Character:
        <span>${response.data.name}</span>
        </div>  
 
        <div class="occupation">
        Occupation:
        <span>${response.data.occupation}</span>
        </div>
       
        <div class="cartoon">
        Is a Cartoon?:
        <span>${response.data.cartoon}</span>
        </div>
 
        <div class="weapon">
        Weapon:
        <span>${response.data.weapon}</span>
        </div>`
      })
      .catch(err => console.log('Hubo un error!', err))
  });



  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('#character-id-delete').value
    const deleteButton = document.querySelector('#delete-one')

    charactersAPI
      .deleteOneRegister(characterId)
      .then(response => {
        if (!response.data === 'CastError') {
          deleteButton.classList.add('btn-wrong')
        }

        else {
          deleteButton.classList.add('btn-success')
        }
      })
      .catch(err => console.log('Hubo un error!', err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
