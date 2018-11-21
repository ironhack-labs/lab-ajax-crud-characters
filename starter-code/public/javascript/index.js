const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    charactersAPI.getFullList()
    .then(elem => {
      
      document.querySelector('.name').innerText = elem.data[0].name;
      document.querySelector('.occupation').innerText = elem.data[0].occupation;
      document.querySelector('.cartoon').innerText = elem.data[0].cartoon;
      document.querySelector('.weapon').innerText = elem.data[0].weapon;
      
      
    })
    // document.querySelector('.name').innerText = charactersAPI.getFullList()[0].name;
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
