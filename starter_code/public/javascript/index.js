const charactersAPI = new APIHandler("http://localhost:3000");

$(document).ready(() => {
  const charChart = document.getElementById("character-info");

  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(res => {
      charChart.innerHTML = "";
      res.forEach(e => {
        charChart.innerHTML += `
        <div class="character-info">
          <div class="name">Name: ${e.name}</div>
          <div class="occupation">Occupation: ${e.occupation}</div>
          <div class="cartoon">Cartoon: ${e.cartoon}</div>
          <div class="weapon">Weapon: ${e.weapon}</div>
        </div>`;
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    const id = document.getElementById("character-id").value;

    charactersAPI.getOneRegister(id).then(res => {
      charChart.innerHTML = "";
      charChart.innerHTML = `
        <div class="character-info">
          <div class="name">Name: ${res.name}</div>
          <div class="occupation">Occupation: ${res.occupation}</div>
          <div class="cartoon">Cartoon: ${res.cartoon}</div>
          <div class="weapon">Weapon: ${res.weapon}</div>
        </div>`;
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id);
  }

  document.getElementById("new-character-form").onsubmit = function() {
    let cartoon = "";
    if (document.getElementById("new-char-cartoon").value === "on") {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const newChar = {
      name: document.getElementById("new-char-name").value,
      occupation: document.getElementById("new-char-occ").value,
      weapon: document.getElementById("new-char-weapon").value,
      cartoon: cartoon
    };

    charactersAPI.createOneRegister(newChar);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const id = document.getElementById("edit-char-id").value;

    let cartoon = "";
    if (document.getElementById("edit-char-cartoon") == "on") {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const name = document.getElementById("edit-char-name").value;
    const occupation = document.getElementById("edit-char-occ").value;
    const weapon = document.getElementById("edit-char-weapon").value;
    const editChar = {
      cartoon: cartoon
    };

    if (name) {
      editChar.name = name;
    }
    if (occupation) {
      editChar.occupation = occupation;
    }
    if (weapon) {
      editChar.weapon = weapon;
    }

    charactersAPI.updateOneRegister(id, editChar);
  };
});
