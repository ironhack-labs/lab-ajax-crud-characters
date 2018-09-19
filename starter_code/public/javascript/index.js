const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(event){
    event.preventDefault();
    charactersAPI.getFullList()
    .then( characters => putCharactersInDOM(characters))
    .catch( err => console.log(err))
  }
  
  document.getElementById('fetch-one').onclick = function(event){
    event.preventDefault();
    charactersAPI.getOneRegister($("input[name='character-id']").val())
    .then( character => putCharactersInDOM(character))
    .catch( err => console.log(err))
  }
  
  document.getElementById('delete-one').onclick = function(event){
    event.preventDefault();
    charactersAPI.deleteOneRegister($("input[name='character-id-delete']").val())
    .then( message => $(".characters-container").html(message))
    .catch( message => $(".characters-container").html(message))
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault();
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault();       
  }
})



const characterSingleDiv = (character) =>{
  return `<div class="character-info">
  <div class="name">Id:<span>${character.id}</span></div>
  <div class="name">Name:<span>${character.name}</span></div>
  <div class="occupation">Occupation:<span>${character.occupation}</span></div>
  <div class="cartoon">Is a Cartoon?:<span>${character.cartoon}</span></div>
  <div class="weapon">Weapon:<span>${character.weapon}</span></div>
  </div>`
};

const charactersDiv = (characters) => {
  let html ="";
  characters.forEach(element => {
    html += characterSingleDiv(element);
  });
  return html;
};

const putCharactersInDOM = (characters) => {
  return $(".characters-container").html(charactersDiv(characters))
}