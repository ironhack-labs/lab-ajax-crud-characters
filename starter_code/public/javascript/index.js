const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(data => {
      console.log(data.data)
    });
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;
    console.log(id);
    charactersAPI.getOneRegister(id)
    .then( data => {
      console.log(data);
    }).catch(err => {
      console.error(err)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;
    console.log(id);
    charactersAPI.deleteOneRegister(id)
    .then( data => {
      console.log(data);
    }).catch(err => {
      console.error(err)
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})

