const charactersAPI = new APIHandler('http://localhost:8000');

const  printCharacter = element => {
    
    let characterInfo = document.createElement('div');
    characterInfo.innerHTML = `<div class="name">Character Name: ${element.name}</div>
    <div class="occupation">Character Occupation: ${element.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
    <div class="weapon">Character Weapon: ${element.weapon}</div>`;
    
    characterInfo.classList.add('character-info');
    document.querySelector('.characters-container').appendChild(characterInfo);
 
}

window.addEventListener('load', () => {

  //SHOW ALL-------------------------
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
   
    charactersAPI
      .getFullList()
      .then(response => {
        document.querySelector('.characters-container').innerHTML = "";
        response.data.forEach(element => printCharacter(element));
      })
      .catch(error => console.log(error));

  });

  //FIND ONE--------------------------
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    event.preventDefault();
    const id = document.getElementById('character-id').value;

    charactersAPI
      .getOneRegister(id)
      .then(response => {
        document.querySelector('.characters-container').innerHTML = "";
        printCharacter(response.data);

        document.querySelector('.edit-id').value = response.data.id;
        document.querySelector('.edit-name').value = response.data.name;
        document.querySelector('.edit-occupation').value = response.data.occupation;
        document.querySelector('.edit-weapon').value = response.data.weapon;
        document.querySelector('.edit-cartoon').checked = response.data.cartoon;
      })
      .catch(error => console.log(error));
  });

 //DELETE-------------------------------
  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    event.preventDefault();

    const id = document.getElementById('character-id-delete').value;

    charactersAPI
        .deleteOneRegister(id)
        .then(response => {
          
          document.getElementById('delete-one').classList.add('active');
          console.log(response);
        })
        .catch(error => {
          
          document.getElementById('delete-one').classList.add('error');
          console.log(error)});
  });

  //EDIT-------------------------------
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('.edit-name').value;
    const occupation = document.querySelector('.edit-occupation').value;
    const weapon = document.querySelector('.edit-weapon').value;
    const cartoon = document.querySelector('.edit-cartoon').checked;
    const id = document.querySelector('.edit-id').value;

    const updateCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
      id
    }

    charactersAPI
      .updateOneRegister(id, updateCharacter)
      .then(response => {

        document.getElementById('send-data2').classList.add('active');
      })
      .catch(error => {
        document.getElementById('send-data2').classList.add('error');
        console.log(error);
      });
  });

  //CREATE-----------------------------
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    const name = document.querySelector('.create-name').value;
    const occupation = document.querySelector('.create-occupation').value;
    const weapon = document.querySelector('.create-weapon').value;
    const cartoon = document.querySelector('.create-cartoon').checked;
    
    const newCharacter = {
      name, 
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(newCharacter)
      .then(response => {

        document.getElementById('send-data').classList.add('active');
      })
      .catch(error => {
        document.getElementById('send-data').classList.add('error');
        console.log(error);
      });
  });
});

