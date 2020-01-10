const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
     .then(characters =>{
      console.log(characters);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let val = document.getElementsByName("character-id")[0].value;
    charactersAPI.getOneRegister(val)
    .then(characters =>{
     console.log(characters);
   })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let val = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI.deleteOneRegister(val)
    .then(characters =>{
     console.log(characters);
   })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let val = document.getElementById("chr-id").value;
    
    const updatedcharacterInfo = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: document.getElementById("cartoon").checked
    };
    console.log("Data before update "+ JSON.stringify(updatedcharacterInfo));

    charactersAPI.updateOneRegister(val, updatedcharacterInfo)
    .then(characters =>{
     console.log(characters);
   })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
