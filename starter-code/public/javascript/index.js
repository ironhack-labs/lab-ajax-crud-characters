const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {


    //Se utiliza la constante con el nombre del evento en este caso del primero del API
    //Nota Se tienen que mandar a llamar todos una por seccion dependioendo de lo que haga
    charactersAPI.getFullList(event)

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    charactersAPI.getOneRegister(event)


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(event)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister(event)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.registerUno(event)
  });
});