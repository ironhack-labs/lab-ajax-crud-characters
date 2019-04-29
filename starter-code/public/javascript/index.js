const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const value = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(value);
  }
  
  document.getElementById('delete-one').onclick = function(){
    const value = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(value);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const form = document.getElementById('edit-character-form');
    const id = form.querySelector('input[name=chr-id]').value;
    const name = form.querySelector('input[name=name]').value;
    const occupation = form.querySelector('input[name=occupation]').value;
    const weapon = form.querySelector('input[name=weapon]').value;
    const isCartoon = form.querySelector('input[name=cartoon]').checked;
    charactersAPI.updateOneRegister(id, name, occupation, weapon, isCartoon);       
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const form = document.getElementById('new-character-form');
    const name = form.querySelector('input[name=name]').value;
    const occupation = form.querySelector('input[name=occupation]').value;
    const weapon = form.querySelector('input[name=weapon]').value;
    const isCartoon = form.querySelector('input[name=cartoon]').checked;
    charactersAPI.createOneRegister(name, occupation, weapon, isCartoon);
  }
})
