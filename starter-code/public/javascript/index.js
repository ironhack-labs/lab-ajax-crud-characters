const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {

  function pintCharacter(character) {
    console.log(character);
    var divtest = document.createElement("div");
    divtest.innerHTML = `
    <div class="character-info">
    <div class="id">Id: ${character.id}</div>
    <div class="name">Name: ${character.name}</div>
    <div class="occupation">Occupation: ${character.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
    <div class="weapon">Weapon: ${character.weapon}</div>
    </div>`;
    document.querySelector(".characters-container").append(divtest);
  }

  function cleanDiv() {
    document.querySelector(".characters-container").innerHTML = " ";
  }

  document.getElementById("fetch-all").onclick = function() {
    cleanDiv();
    var characters = charactersAPI.getFullList();

    characters.then(characters => {
      characters.forEach(character => {
        pintCharacter(character)
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    cleanDiv();
    var id = $("input[name='character-id']" ).val()
    charactersAPI.getOneRegister(id)
    .then(character => {
      pintCharacter(character.data);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    var id = $("input[name='character-id-delete']" ).val()
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {

      event.preventDefault();
      const id = $("input[name='chr-id']" ).val()


      const updatedcharacterInfo = {
        name: $("#edit-character-form input[name='name']" ).val(),
        occupation: $("#edit-character-form input[name='occupation']" ).val(),
        weapon: $("#edit-character-form input[name='weapon']" ).val(),
        cartoon: $("#edit-character-form input[name='cartoon']" ).is(":checked") ? true : false
      }
      

      charactersAPI.updateOneRegister(id, updatedcharacterInfo)
        .then(() => {
          $('#edit-character-form button').addClass('greenButton');
        })
        .catch((err) => {
          $('#edit-character-form button').addClass('redButton');
        })

      console.log(updatedcharacterInfo)

  };

  document.getElementById("new-character-form").onsubmit = function() {

    event.preventDefault();

    const newcharacterInfo = {
      name: $("#new-character-form input[name='name']" ).val(),
      occupation: $("#new-character-form input[name='occupation']" ).val(),
      weapon: $("#new-character-form input[name='weapon']" ).val(),
      cartoon: $("#new-character-form input[name='cartoon']" ).is(":checked") ? true : false
    }
    
    if (newcharacterInfo.name === '') throw 'empty'
    charactersAPI.createOneRegister(newcharacterInfo)
      .then(() => {

        $('#new-character-form button').addClass('greenButton');

        cleanDiv();
        var characters = charactersAPI.getFullList();
    
        characters.then(characters => {
          characters.forEach(character => {
            pintCharacter(character)
          });
        });
      })
      .catch(error => {
        $('#new-character-form button').addClass('redButton');
      })
  };
});
