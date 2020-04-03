const charactersAPI = new APIHandler('http://localhost:8000');

const renderElements = () => {
  let container = document.querySelector('.characters-container');
    let content = '';
    charactersAPI.getFullList()
      .then( characters => {
        console.log(characters);
        let data = characters.data;
        data.map( character => {
          let { id, name, occupation, weapon, cartoon } = character;

          content += `<div class="character-info">
          <div class="id">Id:
            <span class="field_title">${id}</span>
          </div>
          <div class="name">Name:
            <span class="field_title">${name}</span>
          </div>
          <div class="occupation">Occupation:
            <span class="field_title">${occupation}</span>
          </div>
          <div class="cartoon">Weapon
            <span class="field_title">${weapon}</span>
          </div>
          <div class="weapon">Cartoon:
            <span class="field_title">${cartoon}</span>
          </div>
        </div>`
        });

        container.innerHTML = content;
      }) 
      .catch(error => console.log(error))
}//renderElements()

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function (event) {
        event.preventDefault();
        renderElements();
  }, false);

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    let container = document.querySelector('.characters-container');
    let input = document.querySelector('input[name="character-id"]');
    let value = input.value;
    
    charactersAPI.getOneRegister(value)
      .then( character => {

        let { id, name, occupation, weapon, cartoon } = character.data;
        console.log(character.data);
        container.innerHTML = `<div class="character-info">
          <div class="id">Id:
            <span class="field_title">${id}</span>
          </div>
          <div class="name">Name:
            <span class="field_title">${name}</span>
          </div>
          <div class="occupation">Occupation:
            <span class="field_title">${occupation}</span>
          </div>
          <div class="cartoon">Weapon
            <span class="field_title">${weapon}</span>
          </div>
          <div class="weapon">Cartoon:
            <span class="field_title">${cartoon}</span>
          </div>
        </div>`
        input.value = "";
      })
      .catch(error => console.log(error));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector('input[name="character-id-delete"]');
    let value = id.value;
    charactersAPI.deleteOneRegister(value)
      .then(response =>{
        let deleteBtn = document.querySelector('#delete-one');
         console.log(response)
         if(response.status == 200 ){
           deleteBtn.classList.add('active');
          } else {
            deleteBtn.classList.remove('active');
         }
         setTimeout(() => {
          deleteBtn.classList.remove('active');
         }, 1000);
         id.value = "";
         renderElements();
        })
      .catch(error => {
        deleteBtn.classList.remove('active');
        console.log(error)
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault(event);
    let id = document.querySelector('#edit-character-form input[name="chr-id"]');
    let name = document.querySelector('#edit-character-form input[name="name"]');
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]');
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]');
    let cartoon = document.querySelector('#edit-character-form input[name="cartoon"]');

    charactersAPI.updateOneRegister(
      id.value, 
      name.value, 
      occupation.value, 
      weapon.value, 
      cartoon.value
      )
      .then( response => {
        name.value = "";
        occupation.value = "";
        weapon.value = "";
        cartoon.value = "";
        id.value = "";
        
        renderElements();
      })
      .catch(error => console.log(error))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let name = document.querySelector('#new-character-form input[name="name"]');
    let occupation = document.querySelector('#new-character-form input[name="occupation"]');
    let weapon = document.querySelector('#new-character-form input[name="weapon"]');
    let cartoon = document.querySelector('#new-character-form input[name="cartoon"]');
    let send_data_btn = document.querySelector('#send-data');

    charactersAPI.createOneRegister(name.value, occupation.value, weapon.value, cartoon.checked)
      .then(response => {
        if(response.status == 304 ){
          send_data_btn.classList.add('active');
        }
        name.value = "";
        weapon.value = "";
        cartoon.checked = false;
        occupation.value = "";
      })
      .catch(error => {
        console.log(error);
        send_data_btn.classList.remove('active');        
      })

  });
});
