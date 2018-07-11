const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(data => {
      console.log(data.data);
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector("input[name='character-id']").value;
    charactersAPI.getOneRegister(id)
    .then(data => {
      console.log(data)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector("input[name='character-id-delete']").value;
    charactersAPI.deleteOneRegister(id)
    .then(data => {
      console.log(data)
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    let id = document.querySelector("input[name='chr-id']").value;
    let name = document.querySelector("input[name='name']").value;
    let occupation = document.querySelector("input[name='occupation']").value;
    let weapon = document.querySelector("input[name='weapon']").value;
    let cartoon = document.querySelector("input[name='cartoon']").value;
    let object = {name, occupation, weapon, cartoon};
    console.log(object)
    charactersAPI.updateOneRegister(object, id)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    let name = document.querySelector("input[name='name']").value;
    let occupation = document.querySelector("input[name='occupation']").value;
    let weapon = document.querySelector("input[name='weapon']").value;
    let cartoon = document.querySelector("input[name='cartoon']").value;
    let object = {name, occupation, weapon, cartoon};
    console.log(object)
    charactersAPI.createOneRegister(object);
  }
})
