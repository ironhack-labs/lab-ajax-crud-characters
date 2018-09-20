const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  // $('#fetch-all').click(function(){
  //   getOneRegister($('#foId').val());
  // })


  $('#fetch-one').click(function(){
    getOneRegister($('#foId').val());
  })
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})

