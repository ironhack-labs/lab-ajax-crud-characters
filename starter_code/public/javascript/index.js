const charactersAPI = new APIHandler("http://localhost:8000")

const displayCharacters = (characters) => {
  const container = $('.characters-container');
  container.html = ('');

  characters.forEach((element) => {
    const newChar = $('div').addClass("character-info");
    const id = $('div').addClass('id').html(`ID: ${element.id}`);
    const name = $('div').addclass('name').html(`Name: ${element.name}`);
    const occupation = $('div').addclass('occupation').html(`Ocuppation: ${element.occupation}`);
    const cartoon = $('div').addclass('cartoon').html(`Is a cartoon?: ${element.debt}`);
    const weapon = $('div').addclass('weapon').html(`Weapon: ${element.weapon}`);

    newChar.append(id, name, occupation, cartoon, weapon);
    container.append(newCHar);
  });
}

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(res => {
        displayCharacters(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  document.getElementById('fetch-one').onclick = function () {
    const charID = document.getElementsByName('character-id')[0].value;

    if (charID) {
      charactersApi.getOneRegister(charID)
        .then((res) => {
          displayCharacters([res.data]);
        })
        .catch((err) => {
          console.log(err.message)
        });
    }

  }

  document.getElementById('delete-one').onclick = function () {
    const charID = document.getElementsByName('character-id-delete')[0].value;

    if (charID) {
      charactersApi.deleteOneRegister(charID)
        .then((res) => {
          document.getElementsByName("character-id-delete")[0].value = "";
        })
        .catch((err) => {
          console.log(err.message)
        });
    }
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    const form = document.getElementById("edit-character-form");
    const charId = form.elements["chr-id"].value;
    const name = form.elements["name"].value;
    const occupation = form.elements["occupation"].value;
    const weapon = form.elements["weapon"].value;
    const debt = form.elements["cartoon"].checked;

    const character = {};
    if (name) {
      character.name = name;
    }
    if (occupation) {
      character.occupation = occupation;
    }
    if (weapon) {
      character.weapon = weapon;
    }
    character.debt = debt;

    if (charId) {
      charactersAPI.updateOneRegister(charId, character)
        .then(res => {

          form.reset();

          $("#fetch-all").trigger("click");
        })
        .catch(err => {
          resetButton($("#update-data"));
        });
    } else {
      resetButton($("#update-data"));
    }

    return false;
  };


  document.getElementById('new-character-form').onsubmit = function () {
    const form = document.getElementById("new-character-form");
    const name = form.elements["name"].value;
    const occupation = form.elements["occupation"].value;
    const weapon = form.elements["weapon"].value;
    const debt = form.elements["cartoon"].checked;

    charactersAPI.createOneRegister({name, occupation, weapon, debt})
      .then(res => {
        $("#send-data").css("backgroundColor", "#4caf50");
        
        form.reset();

        $("#fetch-all").trigger("click");
      })
      .catch(err => {
        $("#send-data").css("backgroundColor", "#f44336");
      });

    return false;
  };
});
