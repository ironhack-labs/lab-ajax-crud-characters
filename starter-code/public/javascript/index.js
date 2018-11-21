const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  let charactersContainer = document.querySelector('.characters-container');
  const templateDOM = charactersContainer.innerHTML;


  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      .then(characters => {
        charactersContainer.innerHTML = "";
        characters.data.forEach(character => {
        charactersContainer.innerHTML += templateDOM;

        let lastAdded = document.querySelector('.character-info:last-child');

        lastAdded.children[0].innerHTML += character.id;
        lastAdded.children[1].innerHTML += character.name;
        lastAdded.children[2].innerHTML += character.occupation;
        lastAdded.children[3].innerHTML += character.weapon;
        lastAdded.children[4].innerHTML += character.cartoon;
        
      });
    })
  
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('input[name="character-id"').value;
   
    charactersAPI.getOneRegister(id)
    .then(characters =>{
      if (characters.data.length){
        charactersContainer.innerHTML ="";
        const character = characters.data[0];
        charactersContainer.innerHTML += templateDOM;
        
        let lastAdded = document.querySelector('.character-info');

        lastAdded.children[0].innerHTML += character.id;
        lastAdded.children[1].innerHTML += character.name;
        lastAdded.children[2].innerHTML += character.occupation;
        lastAdded.children[3].innerHTML += character.weapon;
        lastAdded.children[4].innerHTML += character.cartoon;
      }      
    })
  }
  
  document.getElementById('delete-one').onclick = function(e){
    let id = document.querySelector('input[name="character-id-delete"').value;

    charactersAPI.deleteOneRegister(id).then(()=>{
      e.target.style.background = 'green';
    }).catch(err =>{
      e.target.style.background ='red';
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    const id =  document.querySelector('#edit-character-form input[name="chr-id"]').value;

    const character = {
      name: document.querySelector('#edit-character-form input[name="name"]').value,
      occupation: document.querySelector('#edit-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#edit-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#edit-character-form input[name="cartoon"]').value
    }

    charactersAPI.updateOneRegister(id, character)
      .then(() => {
        document.querySelector('#edit-character-form button').style.background = 'green';
      })
      .catch(() => {
        document.querySelector('#edit-character-form button').style.background = 'red';
      })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();

    const character = {
      name: document.querySelector('#new-character-form input[name="name"]').value,
      occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form input[name="cartoon"]').value
    }

    charactersAPI.createOneRegister(character).then(()=>{
      document.querySelector('#new-character-form button').style.background = 'green';
      }).catch(() =>{
        document.querySelector('#new-character-form button').style.background = 'red';
      })       
  }
})
