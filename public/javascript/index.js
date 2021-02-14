const charactersAPI = new APIHandler('http://localhost:8000');



window.addEventListener('load', () => {
//SEARCH ALL
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });
//SEARCH BY ID
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const idSearch= document.getElementById('search__id').value
    charactersAPI.getOneRegister (idSearch)
  });
//DELETE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('delete__id').value)
  });

  //EDIT
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()
    const updatedCharacterInfo = {
      name: document.querySelector("input[name=name-edit]").value,
      occupation: document.querySelector("input[name=occupation-edit]").value,
      weapon:  document.querySelector("input[name=weapon-edit]").value,
      cartoon : document.querySelector("input[name=cartoon-edit]").checked
    }
    console.log(document.getElementById('edit__id').value)
    charactersAPI.updateOneRegister(document.getElementById('edit__id').value, updatedCharacterInfo)
    document.getElementById("edit-character-form").reset()
  });
  //CREATE
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

      event.preventDefault();
      const newCharacterInfo = {
        name: document.querySelector("input[name=name-character]").value,
        occupation: document.querySelector("input[name=occupation-character]").value,
        weapon:  document.querySelector("input[name=weapon-character]").value,
        cartoon : document.querySelector("input[name=cartoon-character]").checked
      };

    charactersAPI.createOneRegister(newCharacterInfo)
    document.getElementById("new-character-form").reset()
    
  });

 

  });

;
