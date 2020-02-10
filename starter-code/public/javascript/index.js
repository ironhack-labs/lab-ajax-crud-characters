const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
document.getElementById('fetch-all').addEventListener('click', async function (event) {
  const characters = await charactersAPI.getFullList();
  document.querySelector(".characters-container").innerHTML = "";
  characters.forEach(element => {
    //console.log(element.id);
    const div =document.createElement("div");
    div.className="character-info";
    div.innerHTML = `
    <div class="id">Id: ${element.id}</div>
    <div class="name">Name: ${element.name}</div>
    <div class="occupation">Occupation: ${element.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
    <div class="weapon">Weapon: ${element.weapon}</div>`;
    document.querySelector(".characters-container").appendChild(div);
  });
});

document.getElementById('fetch-one').addEventListener('click', async function (event) {
  const id = await document.querySelector(".character-id");
  const character = charactersAPI.getOneRegister(id.value)
  .then(character=>{
  //console.log(character);
  document.querySelector(".characters-container").innerHTML = "";
  const div =document.createElement("div");
  div.className="character-info";
  div.innerHTML = `
  <div class="id">Id: ${character.id}</div>
  <div class="name">Name: ${character.name}</div>
  <div class="occupation">Occupation: ${character.occupation}</div>
  <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
  <div class="weapon">Weapon: ${character.weapon}</div>`;
  document.querySelector(".characters-container").appendChild(div);
  }
  )
  .catch(err=>alert("Error en la busqueda"));  
});

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector(".character-id-delete");
    //console.log(id.value);
    charactersAPI.deleteOneRegister(id.value)
    .then(el=>alert("Registro Eliminado Con Exito"))
    .catch(err=>alert("Error al eliminar"));
  });

  document.getElementById('edit-character-form').addEventListener('submit',async function (event) {
    event.preventDefault();
    const id = document.querySelector(".CId").value;
    const name = document.querySelector(".CName").value;
    const occupation = document.querySelector(".COccupation").value;
    const weapon = document.querySelector(".CWeapon").value;
    const cartoon = document.querySelector(".CCartoon").checked;
    await charactersAPI.updateOneRegister(id,{name,occupation,weapon,cartoon})
    .then(el=>alert("Registro Editado"))
    .catch(err=>alert("Error al editar registro"));
  });

  document.getElementById('new-character-form').addEventListener('submit',async function (event) {
    event.preventDefault();
    const name = document.querySelector(".NewName").value;
    const occupation = document.querySelector(".NewOccupation").value;
    const weapon = document.querySelector(".NewWeapon").value;
    const cartoon = document.querySelector(".NewCartoon").checked;
    //console.log(cartoon);
    await charactersAPI.createOneRegister({name,occupation,weapon,cartoon})
    .then(el=>alert("Registro Creado"))
    .catch(err=>alert("Error al crear registro"));
  });
});
