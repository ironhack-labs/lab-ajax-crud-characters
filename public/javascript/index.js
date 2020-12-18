const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    addCharacter(await charactersAPI.getFullList());
    console.log("prueba")
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const {value: id} = document.querySelector(".operation input");
    //console.log(await charactersAPI.getOneRegister(id));
    addCharacter(await charactersAPI.getOneRegister(id));
    
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const {value: id} = document.querySelector(".operation.delete input");
    const exito = await charactersAPI.deleteOneRegister(id);
    showSuccessButton(exito, "#delete-one");
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    //console.log(event.target.cartoon.checked)
    const name = event.target.name.value;
    const occupation = event.target.occupation.value;
    const weapon = event.target.weapon.value;
    const cartoon = event.target.cartoon.checked;
    console.log({name,occupation,weapon,cartoon})
    const exito = await charactersAPI.createOneRegister({name,occupation,weapon,cartoon});
    showSuccessButton(exito, "#send-data-new");
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

function showSuccessButton(exito, tipo){
  const button = document.querySelector(tipo);
  //console.log(exito);
  if(exito){button.classList.add("button-sucess");
  setTimeout(()=>{button.classList.remove("button-sucess");},4000);
}
  else {button.classList.add("button-fail");
  setTimeout(()=>{button.classList.remove("button-fail");},4000);
}

  
}
