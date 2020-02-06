import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      charactersAPI.getFullList()
        .then(apiRes => fillmewith(apiRes.data) )
        .catch(apiErr => console.log("error") );    
  });
  
  function fillmewith(data){
      let html = "";
      data.forEach(element => 
            html += `<div class="character-info">
            <div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.weapon}</div>
            <div class="weapon">${element.cartoon}</div>
          </div>`
      );      
      document.getElementById('characters-container').innerHTML = html; 
  }

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      
       let cid =  document.getElementById('character-id').value;
       charactersAPI.getOneRegister(cid)
        .then(apiRes => fillmewithone(apiRes.data) )
        .catch(apiErr => console.log("error") );
      
  });

  function fillmewithone(data){
      let html = "";
            html = `<div class="character-info">
            <div class="name">${data.name}</div>
            <div class="occupation">${data.occupation}</div>
            <div class="cartoon">${data.weapon}</div>
            <div class="weapon">${data.cartoon}</div>
          </div>`
    
      document.getElementById('characters-container').innerHTML = html; 

  }

  document.getElementById('delete-one').addEventListener('click', function (event) {
      
       let cid =  document.getElementById('character-id-delete').value;
       charactersAPI.deleteOneRegister(cid)
        .then(apiRes => deleteme())
        .catch(apiErr => console.log("error") );
  });


    function deleteme() {
        document.getElementById('delete-one').classList.add('green');
    }

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let newElement = {
            "id": document.getElementById('editId').value,
            "name": document.getElementById('editName').value,
            "occupation": document.getElementById('editOccupation').value,
            "weapon": document.getElementById('editWeapon').value,
            "cartoon": document.getElementById('editCartoon').value,
        } 
      
        charactersAPI.updateOneRegister(newElement)
        .then(apiRes => fillmewithoneedit(apiRes.data))
        .catch(apiErr => console.log("error") );
 
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let newElement = {
            "name": document.getElementById('newName').value,
            "occupation": document.getElementById('newOccupation').value,
            "weapon": document.getElementById('newWeapon').value,
            "cartoon": document.getElementById('newCartoon').value,
        }
        charactersAPI.createOneRegister(newElement)
        .then(apiRes => fillmewithonenew(apiRes.data) )
        .catch(apiErr => console.log("error") );


  });
});

function fillmewithonenew() {
   document.getElementById('send-data').classList.add("green"); 
}

function fillmewithoneedit() {
   document.getElementById('send-data-edit').classList.add("green"); 
}