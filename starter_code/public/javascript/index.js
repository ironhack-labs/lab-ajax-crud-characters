const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  let display = document.getElementById("characters-container");

  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(res => {
        console.log(res.data);
        display.innerHTML = "";
        res.data.forEach(e => {
          console.log(display);
          let text = `<div class="character-info">
                        <div class="name">Character Name: ${e.name}</div>
                        <div class="occupation">Character Occupation: ${e.occupation}</div>
                        <div class="weapon">Character Weapon: ${e.weapon}</div>
                        <div class="cartoon">Is a Cartoon? ${e.cartoon}</div>
                        </div>`;
          display.innerHTML += text;             
        });
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("character-id-fetch").value;
    charactersAPI
      .getOneRegister(id)
      .then(res => {
        let e = res.data;
        display.innerHTML = "";
        let text = `<div class="character-info">
                        <div class="name">Character Name: ${e.name}</div>
                        <div class="occupation">Character Occupation: ${e.occupation}</div>
                        <div class="weapon">Character Weapon: ${e.weapon}</div>
                        <div class="cartoon">Is a Cartoon? ${e.cartoon}</div>
                        </div>`;
        display.innerHTML += text; 
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("character-id-delete").value;
    let buttonDelete = document.getElementById("delete-one");
    console.log(id);
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        console.log(`Deleted ${res}`);
        console.log(buttonDelete)
        buttonDelete.className = "green";
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
        buttonDelete.className = "red";
      });
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let id = document.getElementById("update-id").value;
    let name = document.getElementById("update-name").value;
    let occupation = document.getElementById("update-occupation").value;
    let weapon = document.getElementById("update-weapon").value;
    let cartoon = document.getElementById("update-cartoon").checked;

    let buttonUpdate = document.getElementById("send-data-update");

    if (id !== "" && name !== "" && occupation !== "" && weapon !== "") {
      let data = {
        id: id,
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      console.log(data);
      charactersAPI
        .updateOneRegister(data)
        .then(res => {
          console.log(res);
          buttonUpdate.className = "green";
        })
        .catch(error => {
          console.log("Oh No! Error!");
          console.log(error);
          buttonUpdate.className = "red";
        });
    }
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("create-name").value;
    let occupation = document.getElementById("create-occupation").value;
    let weapon = document.getElementById("create-weapon").value;
    let cartoon = document.getElementById("create-cartoon").checked;

    if (name !== "" && occupation !== "" && weapon !== "") {
      let data = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      console.log(data);
      
      charactersAPI.createOneRegister(data).then(response => {
          let buttonCreate = document.getElementById("send-data-create");
          console.log(buttonCreate)
          console.log("post success");
          console.log(response);
          buttonCreate.className = "green";
        })
        .catch(error => {
          console.log("Oh No! Error!");
          console.log(error);
          buttonCreate.className = "red";
        });
    }
  };
});
