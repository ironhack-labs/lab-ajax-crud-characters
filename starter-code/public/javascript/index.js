const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    let parent = document.getElementById("characters-container");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    charactersAPI
      .getFullList()
      .then(characters => {
        for (let i = 0; i < characters.length; i++) {
          const { id, name, occupation, cartoon, weapon } = characters[i];
          const newHtml = `
            <div class="character-info">
                <div class="name">${id}: ${name}</div>
                <div class="occupation">${occupation}</div>
                <div class="cartoon">${cartoon}</div>
                <div class="weapon">${weapon}</div>
            </div>
          `;
          document.getElementById("characters-container").innerHTML += newHtml;
        }
      })
      .chatch(console.log);

    // try {
    //   charactersAPI
    //     .getFullList() // should be a promis
    //     .then(characters => {
    //       console.log("TCL: document.getElementById -> characters", characters);
    //     });
    // }
    // catch(err) {
    //   // ERROR HANDLING
    //   // good, if the error is in a subfunction
    // }

    // charactersAPI
    //   .getFullList() // should be a promis
    //   .then(characters => {
    //     console.log("TCL: document.getElementById -> characters", characters);
    //   });

    // axios
    //   .get("http://localhost:8000/characters")
    //   .then(response => response.data)
    //   .then(characters => {});
  };

  document.getElementById("fetch-one").onclick = function() {
    let parent = document.getElementById("characters-container");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    const id = document.getElementsByName("character-id")[0].value;

    if (id !== "") {
      charactersAPI.getOneRegister(id).then(character => {
        console.log("TCL: document.getElementById -> character", character);
        const { name, occupation, cartoon, weapon } = character;
        const newHtml = `
              <div class="character-info">
              <div class="name">${id}: ${name}</div>
                  <div class="occupation">${occupation}</div>
                  <div class="cartoon">${cartoon}</div>
                  <div class="weapon">${weapon}</div>
              </div>
            `;
        document.getElementById("characters-container").innerHTML += newHtml;
      });
    }
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();
    const id = document.getElementById("edit-id").value;
    const updatedInfo = {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      cartoon: document.getElementById("edit-cartoon").checked,
      weapon: document.getElementById("edit-weapon").value
    };
    charactersAPI.updateOneRegister(id, updatedInfo).then(character => {
      console.log("TCL: document.getElementById -> character", character);
    });
  };
  
  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    const newInfo = {
      name: document.getElementById("new-name").value,
      occupation: document.getElementById("new-occupation").value,
      cartoon: document.getElementById("new-cartoon").checked,
      weapon: document.getElementById("new-weapon").value
    };
    charactersAPI.createOneRegister(newInfo).then(character => {
      console.log("TCL: document.getElementById -> character", character);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI.deleteOneRegister(id);
  };

});
