const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(e){
    e.preventDefault();
    charactersAPI.getFullList()
    .then (characters => {
			console.log('TCL: document.getElementById -> characters', characters)
      let characterContainer = $(".characters-container");
      characterContainer.html("");   
      for (let i = 0; i < characters.length; i++) {
        let html = "";
        html += '<div class="character-info">';
        html += '<div class="id">'+characters[i].id+'</div>';
        html += '<div class="name">'+characters[i].name+'</div>';
        html += '<div class="occupation">'+characters[i].occupation+'</div>';
        html += '<div class="cartoon">Is a Cartoon? '+characters[i].cartoon+'</div>';
        html += '<div class="weapon">'+characters[i].weapon+'</div>';
        html += '</div>';
        characterContainer.append(html);
      }
    });
  };
  
  document.getElementById('fetch-one').onclick = function(e){
    e.preventDefault();
    let id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id)
    .then (character => {
			console.log('TCL: character', character);
    });
  };
  
  document.getElementById('delete-one').onclick = function(e){
    e.preventDefault();
    let id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(id);
  };
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let name = $("#edit-character-form input[name|='name']")[0].value;
    let id = $("#edit-character-form input[name|='chr-id']")[0].value;
    let occupation = $("#edit-character-form input[name|='occupation']")[0].value;
    let weapon = $("#edit-character-form input[name|='weapon']")[0].value;
    let cartoon = $("#edit-character-form input[name|='weapon']")[0].checked;
    let obj = {
      id, name, occupation, weapon, cartoon
    };
    charactersAPI.updateOneRegister(obj);
  };
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = $("#new-character-form input[name|='name']")[0].value;
    let occupation = $("#new-character-form input[name|='occupation']")[0].value;
    let weapon = $("#new-character-form input[name|='weapon']")[0].value;
    let cartoon = $("#new-character-form input[name|='weapon']")[0].checked;
    let obj = {
      name, occupation, weapon, cartoon
    };
    charactersAPI.createOneRegister(obj); 
  };
});
