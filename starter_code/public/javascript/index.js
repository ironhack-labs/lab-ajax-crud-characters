const charactersAPI = new APIHandler("http://localhost:8000/")

          
  

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    
   charactersAPI.getFullList
   console.log(charactersAPI.getFullList)
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var id = $("#character-id").val()
    console.log(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: $("#name").val() ,
      occupation: $("#occupation").val(),
      weapon: $("#weapon").val(),
      debt: $("#debt").val() 
    };

    axios.post(charactersAPI.BASE_URL+`characters/`, characterInfo)
    axios.post
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })
  }
})
