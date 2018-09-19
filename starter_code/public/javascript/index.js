const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then( response => {
      $(".characters-container").empty();
      response.data.forEach(char => {
        $(".characters-container").append(createCharCard(char));
      });
    })
    
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = $('#fetch-one').prev().val()
    console.log(id);
    $(".character-info").empty();
    charactersAPI.getOneRegister(id).then( response => {
      $('.character-info').append(createCharCard(response.data))
    });
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = $('#delete-one').prev().val()
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    var inputs = {};
    $("#edit-character-form").serializeArray().map(function(x){inputs[x.name] = x.value;});

    if (!inputs.cartoon) { cartoon = false};

    console.log(inputs)
    charactersAPI.updateOneRegister(inputs);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    var inputs = {};
    $("#new-character-form").serializeArray().map(function(x){inputs[x.name] = x.value;});
    console.log(inputs)
    charactersAPI.createOneRegister(inputs);
  }

  let createCharCard = (char) => {
    console.log(char)
    return `<div class='character-info'>
    <p>ID: ${char.id}</p>
    <p>Name: ${char.name}</p>
    <p>Occupation: ${char.occupation}</p>
    <p>Is it a cartoon? ${char.cartoon}</p>
    <p>Weapon: ${char.weapon}</p>
    </div>`;
  }
})
