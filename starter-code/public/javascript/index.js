const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(elem => {

      console.log(elem)

      $('.characters-container').empty()
      let container = document.querySelector(".characters-container");

      elem.forEach(e => {
        const chars = ` <div class="character-info">
        <div class="name">${e.name}</div>
        <div class="occupation">${e.occupation}</div>
        <div class="cartoon">${e.cartoon}</div>
        <div class="weapon">${e.weapon}</div>
      </div>`;
        container.innerHTML += chars;
      });
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const searchID = document.querySelector("input[name=character-id]").value;
    let container = document.querySelector(".characters-container");
    container.innerHTML = "";

    if (searchID === "") {
      container.innerHTML = "ERROR: Write an ID"
    } else {

      charactersAPI.getOneRegister(searchID).then(e =>{
        const chars = ` <div class="character-info">
        <div class="name">${e.name}</div>
        <div class="occupation">${e.occupation}</div>
        <div class="cartoon">${e.cartoon}</div>
        <div class="weapon">${e.weapon}</div>
      </div>`;
        container.innerHTML += chars;
      });
    }
  }
  
  document.getElementById('delete-one').onclick = function(){
    const deleteID = document.querySelector("input[name=character-id-delete]").value;
    charactersAPI.deleteOneRegister(deleteID)
    .then (e => {
      console.log(e)
    })
    .catch (() => {
      document.getElementById("bred");
    });
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();

    const id = document.querySelector("input[name=chr-id]").value;
  

    const editChar = {
      name: $("#edit-character-form input[name='name']" ).val(),
      occupation: $("#edit-character-form input[name='occupation']" ).val(),
      weapon: $("#edit-character-form input[name='weapon']" ).val(),
      cartoon: $("#edit-character-form input[name='cartoon']" ).is(":checked") ? true : false,
    }

    charactersAPI.updateOneRegister(id, editChar)
  }

  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();

    const newChar = {
      name: $("#new-character-form input[name='name']" ).val(),
      occupation: $("#new-character-form input[name='occupation']" ).val(),
      weapon: $("#new-character-form input[name='weapon']" ).val(),
      cartoon: $("#new-character-form input[name='cartoon']" ).is(":checked") ? true : false
    }

    charactersAPI.createOneRegister(newChar)
  }
})

