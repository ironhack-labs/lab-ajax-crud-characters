const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let divInputOne = document.getElementsByName("character-id")
    //console.log(divInputOne[0].value)

    
charactersAPI.getOneRegister(divInputOne[0].value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementsByName("character-id-delete")
    console.log("borrador",id[0].value)
    charactersAPI.deleteOneRegister(id[0].value)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    
    let name = document.querySelector('#edit-character-form input[name="name"]').value
    let id = document.querySelector('#edit-character-form input[name="chr-id"]').value
    let occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    let weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked

    let character = {
      occupation,name,weapon,cartoon,id
    }
charactersAPI.updateOneRegister(character)



  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    
    let name = document.querySelector('#new-character-form input[name="name"]').value
    
    let occupation = document.querySelector('#new-character-form input[name="occupation"]').value
    let weapon = document.querySelector('#new-character-form input[name="weapon"]').value
    let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked

    let character = {
      occupation,name,weapon,cartoon
    }
charactersAPI.createOneRegister(character)


    console.log(occupation,name,weapon,cartoon,"soy!")
  });
});
