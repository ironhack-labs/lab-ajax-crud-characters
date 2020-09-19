const charactersApi = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersApi.getFullList()
    .then(response => {
      console.log(response)
      const data = response.data
      let str = ''
      data.forEach(character => {
        str += `
          <div class = "character-info">
          <div class = "name">Character Name: ${character.name}</div>
          <div class = "occupation">Character Occupation: ${character.occupation}</div> 
          <div class = "cartoon">Is a Cartoon ? ${character.cartoon}</div>
          <div class = "weapon">Character Weapon: ${character.weapon}</div>
          </div>`
      })
       document.getElementById('characters-container').innerHTML= str
    })
    .catch(error => {
      console.log(error)
    })
      
      

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const idput = document.getElementById('character-id').value
    console.log(idput)
    charactersApi.getOneRegister(idput)
      .then(response => {
        console.log(response)
        const data = response.data
        let str = ' '
        str += `
          <div class = "character-info">
          <div class = "name">Character Name: ${data.name}</div>
          <div class = "occupation">Character Occupation: ${data.occupation}</div>
          <div class = "cartoon">Is a Cartoon ? ${data.cartoon}</div>
          <div class = "weapon">Character Weapon : ${data.weapon}</div>
          </div>`
        document.getElementById('characters-container').innerHTML = str
      })
      .catch(error => {
        console.log(error)
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idput = document.getElementById('character-id-delete').value
    charactersApi.deleteOneRegister(idput)
      .then(response => {
        console.log(response)
        document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(error => {
        console.log(error)
        document.getElementById('delete-one').style.backgroundColor = 'red'
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
       event.preventDefault()
       const name = document.getElementById('update-name-input').value;
       const occupation = document.getElementById('update-occupation-input').value;
       const weapon = document.getElementById('update-weapon-input').value;
       const charId = document.getElementById('update-id-input').value;
       const updatedCharacter ={
         name,
         occupation,
         weapon
         
       }

       charactersApi.updateOneRegister(charId,updatedCharacter)
       .then(response => {
        console.log(response)
        document.getElementById('update-data').style.backgroundColor ='green'
         
       })
       .catch(error=>console.log(error))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
       event.preventDefault();
       console.log('form submit');
       const name = document.getElementById('name-input').value;
       const occupation = document.getElementById('occupation-input').value;
       const weapon = document.getElementById('weapon-input').value;
       const cartoon = document.getElementById('cartoon-input').checked;

       const newcharacter = {
         name,
         occupation,
         weapon,
         cartoon
       };
       console.log('New character:' , newcharacter);
       charactersApi.createOneRegister(newcharacter)
       .then(()=>{
         getFullList();
         document.getElementById('new-character-form').reset();
       })
       .catch(err=> console.log(`Error while saving a new character: ${err}`));
  });
})
