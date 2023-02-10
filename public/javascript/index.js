const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
    .getFullList()
    .then((response) => {
      let nuevo = ""
      response.data.forEach(element => {

        nuevo +=  `<div class="character-info">
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
        <div class="weapon"> Weapon: ${element.weapon}</div>
      </div>`

      }); 
       document.querySelector('.characters-container').innerHTML = nuevo
    })
    .catch(err => console.log (err) )
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('.operation input').value;

    charactersAPI
    .getOneRegister(characterId)
    .then((response) => {
      let newP = ""
      newP +=  `<div class="character-info">
      <div class="name">Name: ${response.data.name}</div>
      <div class="occupation">Occupation: ${response.data.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
      <div class="weapon"> Weapon: ${response.data.weapon}</div>
    </div>`

    document.querySelector('.characters-container').innerHTML = newP

    })
    .catch(err => console.log (err) )

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('.operation_delete input').value;
    
    charactersAPI
    .deleteOneRegister(characterId)
    .then(() => {
      const btnDelete = document.querySelector('#delete-one')
      btnDelete.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnDelete2 = document.querySelector('#delete-one')
    btnDelete2.setAttribute("style", "background-color: red" )
    })

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
  
    event.preventDefault();

    const form = document.getElementById('edit-character-form');
    const formData = new FormData(form);


    const characterId = formData.get("chr-id");
    const name = formData.get("name");
    const occupation = formData.get("occupation");
    const weapon = formData.get("weapon");
    const cartoon = formData.get("cartoon");
    const characterInfo = { name, occupation, weapon, cartoon};

    charactersAPI
    .updateOneRegister(characterId, characterInfo)
    .then(() => {
      const btnCreate = document.querySelector('#send-data-edit')
      btnCreate.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnCreate2 = document.querySelector('#send-data-edit')
    btnCreate2.setAttribute("style", "background-color: red" )
    })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
   
    event.preventDefault();

    const form = document.getElementById('new-character-form');
    const formData = new FormData(form);

    const name = formData.get("name");
    const occupation = formData.get("occupation");
    const weapon = formData.get("weapon");
    const cartoon = formData.get("cartoon");
    const characterInfo = { name, occupation, weapon, cartoon};

    charactersAPI
    .createOneRegister(characterInfo)
    .then(() => {
      const btnCreate = document.querySelector('#send-data')
      btnCreate.setAttribute("style", "background-color: green" )
    })
    .catch( err => {
      const btnCreate2 = document.querySelector('#send-data')
    btnCreate2.setAttribute("style", "background-color: red" )
    })
  });

