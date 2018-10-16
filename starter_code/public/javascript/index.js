const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    $(".character-info").remove();
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    $(".character-info").remove();
    charactersAPI.getOneRegister($("input[name='character-id']").val());
  }
  
  document.getElementById('delete-one').onclick = function(){
    $(".character-info").remove();
    charactersAPI.deleteOneRegister($("input[name='character-id-delete']").val());
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    $(".character-info").remove();

    charactersAPI.updateOneRegister(
      $("input[name='chr-id']").val(),
      $("input[name='name']").last().val(),
      $("input[name='occupation']").last().val(),
      $("input[name='weapon']").last().val(),
      $("input[name='cartoon']").last().prop("checked"));
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    $(".character-info").remove();

    charactersAPI.createOneRegister(
      $("input[name='name']").first().val(),
      $("input[name='occupation']").first().val(),
      $("input[name='weapon']").first().val(),
      $("input[name='cartoon']").first().prop("checked"));
  }
})

function createCard(name, occupation, cartoon, weapon) {
  $(".characters-container")
  .append(
    `<div class="character-info">
      <div class="name">Character Name: <span>${name}</span></div>
      <div class="occupation">Character Occupation: <span>${occupation}</span></div>
      <div class="cartoon">Is a Cartoon?: <span>${cartoon}</span></div>
      <div class="weapon">Character Weapon: <span>${weapon}</span></div>
    </div>`
  );
}