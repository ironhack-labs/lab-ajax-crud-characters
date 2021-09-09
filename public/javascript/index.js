const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then( characters=> 
      {
      const charactersArray = characters.data
      console.log(charactersArray); 
      document.getElementById('characters-container').innerText = ""

      for (let i=0; i <charactersArray.length; i++){
        document.getElementById('characters-container').innerHTML += 
        `<div class="character-info">
        <div class="id"> Id: ${charactersArray[i].id} </div>
        <div class="name"> Name: ${charactersArray[i].name} </div>
        <div class="occupation"> Character Occupation: ${charactersArray[i].occupation}</div>
        <div class="cartoon">Is a Cartoon? ${charactersArray[i].cartoon}</div>
        <div class="weapon">Character Weapon ${charactersArray[i].weapon}</div>
        </div>
        <br>`
      }
      })
});

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementById("fetch-character-id").value
    console.log(characterId)
    charactersAPI.getOneRegister(characterId)
      .then(response => 
        // (console.log(response.data))
        {
        document.getElementById('characters-container').innerText = ""
        document.getElementById('characters-container').innerHTML += 
        `<div class="character-info">
        <div class="id"> Id: ${response.data.id} </div>
        <div class="name"> Name: ${response.data.name} </div>
        <div class="occupation"> Character Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
        <div class="weapon">Character Weapon ${response.data.weapon}</div>
        </div>
        <br>`
      })
      .catch(error => console.log(error))
  });
  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementById("delete-character-id").value
    // console.log(characterId)
    charactersAPI.deleteOneRegister(characterId)
      .then()
      .catch(error => console.log(error))
  });
    

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
