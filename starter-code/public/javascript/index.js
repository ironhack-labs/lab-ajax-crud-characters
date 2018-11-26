const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let fetchInput = document.querySelector('input[name="character-id"]');
    let id = fetchInput.value;
    charactersAPI.getOneRegister(id).then(() => {
      fetchInput.value = "";
    });
  }
  
  document.getElementById('delete-one').onclick = function(){
    let delInput = document.querySelector('input[name="character-id-delete"]');
    let id = delInput.value;
    charactersAPI.deleteOneRegister(id).then(() => {
      delInput.value = "";
      charactersAPI.getFullList();
    });

  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let editForm = document.getElementById('edit-character-form');
    let id = editForm.querySelector('input[name="chr-id"]');
    let name = editForm.querySelector('input[name="name"]');
    let occupation = editForm.querySelector('input[name="occupation"]');
    let weapon = editForm.querySelector('input[name="weapon"]');
    let cartoon = editForm.querySelector('input[name="cartoon"]');
    charactersAPI.updateOneRegister(id.value, name.value, occupation.value, weapon.value, cartoon.checked)
    .then(res => {
      id.value = "";
      name.value = "";
      occupation.value = "";
      weapon.value = "";
      cartoon.checked = false;
      charactersAPI.getFullList();
    });
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let createForm = document.getElementById('new-character-form');
    let name = createForm.querySelector('input[name="name"]');
    let occupation = createForm.querySelector('input[name="occupation"]');
    let weapon = createForm.querySelector('input[name="weapon"]');
    let cartoon = createForm.querySelector('input[name="cartoon"]');
    if(name.value == '' || occupation.value == '' || weapon.value == ''){
      console.log("Cannot post empty fields on API");
      charactersAPI.changeBtnBg('#send-data', 'error');
    } else {
      charactersAPI.createOneRegister(name.value, occupation.value, weapon.value, cartoon.checked)
      .then(res => {
        name.value = "";
        occupation.value = "";
        weapon.value = "";
        cartoon.checked = false;
        charactersAPI.getFullList();
      });
    }
  }
})
