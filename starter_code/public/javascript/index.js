const charactersAPI = new APIHandler("http://localhost:8000")

const displayCharacters = characters => {
  const container = $(".characters-container");
  container.html("");

  characters.forEach((char) => {
    const charWrp = $("<div></div>").addClass("character-info");
    const id = $("<div></div>").addClass("id").html(`Id: <span>${char.id}</span>`);
    const name = $("<div></div>").addClass("name").html(`Name: <span>${char.name}</span>`);
    const occupation = $("<div></div>").addClass("occupation").html(`Occupation: <span>${char.occupation}</span>`);
    const cartoon = $("<div></div>").addClass("cartoon").html(`Is a Cartoon?: <span>${char.debt}</span>`);
    const weapon = $("<div></div>").addClass("weapon").html(`Weapon: <span>${char.weapon}</span>`);
    
    charWrp.append(id, name, occupation, cartoon, weapon);
    container.append(charWrp);
  });
}

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(res => {
        displayCharacters(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  document.getElementById("fetch-one").onclick = function() {
    const charId = document.getElementsByName("character-id")[0].value;

    if (charId) {
      charactersAPI
        .getOneRegister(charId)
        .then(res => {
          displayCharacters([res.data]);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

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
