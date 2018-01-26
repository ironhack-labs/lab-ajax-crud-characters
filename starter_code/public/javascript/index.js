const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

  }
  $( "#fetch-all" ).click(function() {
    charactersAPI.  getFullList();
  });
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault();

    var $inputs = $('#new-character-form :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    charactersAPI.createOneRegister(values);     
  });
  
  // document.getElementById('new-character-form').onsubmit = function(event){
  //   event.preventDefault();
  //   alert("hola");
  //   console.log('form submit');
  // }
})
