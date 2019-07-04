const url = "http://localhost:8000/characters";
const charactersAPI = new APIHandler(url);

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = () => {

    charactersAPI.getFullList();

  };
  
  document.getElementById('fetch-one').onclick = () => {
    
    charactersAPI.getOneRegister();

  };
  
  document.getElementById('delete-one').onclick = () => {

    charactersAPI.deleteOneRegister();

  };
  
  document.getElementById('edit-character-form').onsubmit = e => {
            
    e.preventDefault();

    charactersAPI.updateOneRegister();

  };
  
  document.getElementById('new-character-form').onsubmit = e => {
                
    e.preventDefault();

    charactersAPI.createOneRegister();
    
  };
});
