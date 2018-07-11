const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    const charId = document.getElementsByName("character-id")[0].value;

    if (charId) {
      charactersAPI
        .getOneRegister(charId)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  document.getElementById("delete-one").onclick = function() {
    const charId = document.getElementsByName("character-id-delete")[0].value;

    charactersAPI
      .deleteOneRegister(charId)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
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
          console.log(res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }

    return false;
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const form = document.getElementById("new-character-form");
    const name = form.elements["name"].value;
    const occupation = form.elements["occupation"].value;
    const weapon = form.elements["weapon"].value;
    const debt = form.elements["cartoon"].checked;

    charactersAPI.createOneRegister({name, occupation, weapon, debt})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });

    return false;
  };
});
