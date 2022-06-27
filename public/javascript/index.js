const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    const input = document.querySelector('#character-name-input');
    APIHandler.getFullList(input.value);
    

   });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

const input = document.querySelector('#character_id');
APIHandler.getOneRegister(input.value);
});

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
  const input = document.querySelector('#character_id');
APIHandler.delete(input.value);


 });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {


    
      event.preventDefault();
      document.getElementById('/characters/${id}`, updateOneRegister');
    
    });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('/characters/${id}`, updateOneRegister');

    const name = document.querySelector('.new-character-form input[type=text]');
    const Occuption = document.querySelector('.new-character-form input[type=text]');
    const cartoon = document.querySelector('.new-character-form input[type=text]');
    const Weapon = document.querySelector('.new-character-form input[type=text]');
   charactersAPI.createOneRegister();
 });
});
