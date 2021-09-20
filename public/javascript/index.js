const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    //console.log ("hi")
    let allChars = charactersAPI.getFullList ();
    //console.log (charactersAPI.getFullList ()) 
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('one').value;
    //console.log("id: " , id)
    //console.log (charactersAPI.getOneRegister(id))
    let char = charactersAPI.getOneRegister(id);
    console.log(char.data[0]);
/*     let name = document.getElementsByClassName ("name")[0];
    name.innerHTML = char.name;
    let occupation = document.getElementsByClassName ("occupation")[0];
    occupation.innerHTML = char.occupation;
    let weapon = document.getElementsByClassName ("weapon")[0];
    weapon.innerHTML = char.weapon;
    let cartoon = document.getElementsByClassName ("cartoon")[0];
      if (cartoon === true) {
        cartoon.innerHTML = "It is a cartoon"
      } else {
        cartoon.innerHTML = "It is not a cartoon"
      } */
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let charIdToDelete = document.getElementById("delete").value;
    //console.log (charIdToDelete)
    charactersAPI.deleteOneRegister(charIdToDelete)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    //conseguir los inputs values
    const name = document.getElementById('edit-name').value
    const occupation = document.getElementById('edit-occupation').value
    const weapon = document.getElementById('edit-weapon').value
    const cartoon = document.getElementById('edit-checkbox').checked
    //crear el objeto char
    const char = {name,occupation,weapon,cartoon}
    //conseguir la id
    const charId = document.getElementById('edit-id').value
    //alert(charId)  
    charactersAPI.updateOneRegister(charId, char)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById(`new-name`).value
    const occupation = document.getElementById(`new-occupation`).value
    const weapon = document.getElementById(`new-weapon`).value
    const cartoon = document.getElementById('new-cartoon').checked;
    const char = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(char)
  });
});
