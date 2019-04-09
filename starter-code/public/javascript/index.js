const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    var results = charactersAPI.getFullList();
    if (results.length === 1) {
      $(".character-info .name").empty().val('results.name');
    }
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = $("#find-one").val();
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = $("#del-one").val();
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let data = $(this).serializeArray();
    let elements = {};
    data.forEach(obj => {
      elements[obj.name]=obj.value;
    });
    let id = $("#chr-id").val();
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    let data = $(this).serializeArray();
    let elements = {};
    data.forEach(obj => {
      elements[obj.name]=obj.value;
    });
    charactersAPI.createOneRegister(elements);
  }
})