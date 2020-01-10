const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    //console.log("pushed the Button");
    let html = '';
    charactersAPI.getAll().then(data => 
      {
        console.log(data);
        for (let character of data) {
         html += ` <div class="character-info">
        <div class="name" >Character Name: <span id="character-name"> ${character.name} </span></div>
        <div class="occupation">Character Occupation: <span id="character-occupation"> ${character.occupation} </span></div>
        <div class="cartoon">Is a Cartoon? <span id="character-cartoon"> ${character.cartoon} </span></div>
        <div class="weapon">Character Weapon: <span id="character-weapon"> ${character.weapon} </span></div>
        </div>`
        }
        document.getElementById("characters-container").innerHTML = html;

      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id').value;
    charactersAPI.getOne(id).then(character => {
      console.log(character);
      let html = ` <div class="character-info">
        <div class="name" >Character Name: <span id="character-name"> ${character.name} </span></div>
        <div class="occupation">Character Occupation: <span id="character-occupation"> ${character.occupation} </span></div>
        <div class="cartoon">Is a Cartoon? <span id="character-cartoon"> ${character.cartoon} </span></div>
        <div class="weapon">Character Weapon: <span id="character-weapon"> ${character.weapon} </span></div>
        </div>`

        document.getElementById("characters-container").innerHTML = html;
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOne(id)
    .then(response => {
      console.log(response);
      document.getElementById('delete-one').style.backgroundColor = "green";
    })
    .catch(err => {
      console.log('This did not work');
      document.getElementById('delete-one').style.backgroundColor = "red";
      return;
      })
    });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
