
const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {

  

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI
    .getFullList()
    .then ((response) => {

      const allCharacters = response.data
      allCharacters.forEach(allChar => {
    

        

        let divTag = document.createElement('div');
        divTag.classList.add('character-info')

       

        let container = document.querySelector('.characters-container')

        
      
        divTag.innerHTML =
        ` <div class="name"> Name:<span>${allChar.name} </span> </div>
        <div class="occupation">Occupation:<span>${allChar.occupation} </span></div>
        <div class="cartoon">Is a Cartoon?<span>${allChar.cartoon} </span></div>
        <div class="weapon">Weapon: <span>${allChar.weapon} </span></div>`

        container.appendChild(divTag)
       



      });

    
    })
    
    .catch(error => console.log(error))
  })


  });

  //ONE CHARACTER

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    const characterId = document.getElementById('character-id').value;
    

    charactersAPI
    .getOneRegister(characterId)
    .then ((response) => {
      console.log(response.data)
      const oneCharacter = response.data
      
       let divTag = document.createElement('div');
        divTag.classList.add('character-info')

       

        let container = document.querySelector('.characters-container')

        
      
        divTag.innerHTML =
        ` <div class="name"> Name:<span>${oneCharacter.name} </span> </div>
        <div class="occupation">Occupation:<span>${oneCharacter.occupation} </span></div>
        <div class="cartoon">Is a Cartoon?<span>${oneCharacter.cartoon} </span></div>
        <div class="weapon">Weapon: <span>${oneCharacter.weapon} </span></div>`

        container.appendChild(divTag)
       

    
    })
    
    .catch(error => console.log(error))
  

})

//DELETE CHARACTER

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.getElementById('character-id-delete').value;
    
    charactersAPI
    .deleteOneRegister(characterId)

    .then((response) => {
    const deleteBtn = document.getElementById('delete-one');
    deleteBtn.classList.toggle('btn-green');
    
    })
    .catch((err) => {

      const deleteBtn = document.getElementById('delete-one');
      deleteBtn.classList.toggle('btn-red');
      console.log(err)
    });



  });

// EDIT CHARACTER

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {


  });

//CREATE CHARACTER

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    const character = {
      name : document.getElementById('name').value,
      occupation : document.getElementById('occupation').value,
      weapon : document.getElementById('weapon').value,
      cartoon : document.getElementById('cartoon').value,

    }

    charactersAPI
    .createOneRegister(character)
    .then((response) => {
      console.log(character)
      const createBtn = document.getElementById('send-data');
      createBtn.classList.toggle('btn-green');
    })
    .catch((err) => {
      const createBtn = document.getElementById('send-data');
      createBtn.classList.toggle('btn-red');
      console.log(err)
    });
});
 
    