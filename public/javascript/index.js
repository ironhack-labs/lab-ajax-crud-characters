const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    addCharacter(await charactersAPI.getFullList());
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const {value: id} = document.querySelector(".operation input");
    //console.log(await charactersAPI.getOneRegister(id));
    addCharacter(await charactersAPI.getOneRegister(id));
    
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const {value: id} = document.querySelector(".operation.delete input");
    const exito = await charactersAPI.deleteOneRegister(id);
    showSuccessButton(exito);
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
    <div class="id">Id: ${arrayOrNot.id}</div>
    <div class="name">Name: ${arrayOrNot.name}</div>
    <div class="occupation">Occupation: ${arrayOrNot.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${arrayOrNot.cartoon}</div>
    <div class="weapon">Weapon: ${arrayOrNot.weapon}</div>
  </div>`
  }
}

function showSuccessButton(exito){
  const button = document.querySelector("#delete-one");
  //console.log(exito);
  if(exito){button.classList.add("button-sucess");
  setTimeout(()=>{button.classList.remove("button-sucess");},4000);
}
  else {button.classList.add("button-fail");
  setTimeout(()=>{button.classList.remove("button-fail");},4000);
}

  
}
