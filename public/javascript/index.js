const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    addCharacter(await charactersAPI.getFullList());
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});


function addCharacter(arrayOrNot){

  const character = document.querySelector(".characters-container");
  character.innerHTML="";
  if(arrayOrNot instanceof Array){
    arrayOrNot.forEach((obj)=>{
      character.innerHTML+=`<div class="character-info">
      <div class="id">Id: ${obj.id}</div>
      <div class="name">Name: ${obj.name}</div>
      <div class="occupation">Occupation: ${obj.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${obj.cartoon}</div>
      <div class="weapon">Weapon: ${obj.weapon}</div>
    </div>`
    })
  }else{
    character.innerHTML+=`<div class="character-info">
    <div class="id">Id: ${obj.id}</div>
    <div class="name">Name: ${obj.name}</div>
    <div class="occupation">Occupation: ${obj.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${obj.cartoon}</div>
    <div class="weapon">Weapon: ${obj.weapon}</div>
  </div>`
  }



}
