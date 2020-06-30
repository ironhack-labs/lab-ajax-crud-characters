const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI.getFullList()
    //hay que poner algo para que se imprima, pero me sale en la consola//
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id').value

    event.preventDefault()

    charactersAPI.getOneRegister(id)

    //dice que value no se puede usar, nodevalue tampoco; pero todo correcto en postman//
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
    event.preventDefault()
    
    //se me borra en POSTMAN, pero no en el html, dice 404, como si no hay nada//
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    charactersAPI.updateOneRegister()


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  event.preventDefault()
  charactersAPI.createOneRegister(newCharacter)

  });
});
