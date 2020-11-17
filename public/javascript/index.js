const charactersAPI = new APIHandler();

//Con esto voy a eliminar las fichas que se generan con fetch-all al llamar a fetch-one
let flag = false
eliminarHijos()


//Full List

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      myNodes = "";
      charactersAPI.getFullList().then((allCharacters) => {
        console.log(allCharacters);
        allCharacters.data.forEach((elements) => {
          myNodes += `<div class="character-info">
          <div class="name">Name: ${elements.name}</div>
          <div class="occupation">Occupation: ${elements.occupation}</div>
          <div class="weapon">Weapon: ${elements.weapon}</div>
          <div class="cartoon">Is a Cartoon?: ${elements.cartoon}</div>
        </div>`;
          document.querySelector(".characters-container").innerHTML = myNodes;
          flag = true
        });
      });
    });


  //get one register

  document.getElementById("fetch-one").addEventListener("click", function (e) {
    e.preventDefault();
    if (flag == true) eliminarHijos();
    const charIdFetch = document.querySelector(".operation input").value;
    charactersAPI
      .getOneRegister(charIdFetch)
      .then((charactFetch) => {
        console.log(charactFetch);
        document.querySelector(
          ".name"
        ).innerHTML = `Name: ${charactFetch.data.name}`;
        document.querySelector(
          ".occupation"
        ).innerHTML = `Occupation: ${charactFetch.data.occupation}`;
        document.querySelector(
          ".weapon"
        ).innerHTML = ` Weapon: ${charactFetch.data.weapon}`;
        document.querySelector(
          ".cartoon"
        ).innerHTML = `Is a cartoon?: ${charactFetch.data.cartoon}`;
      })
      .catch((err) => console.log("Error: ", err));
  });


  //delete one register

  document.getElementById("delete-one").addEventListener("click", function (e) {
    e.preventDefault();
    const charId = document.querySelector(".delete input").value;
    charactersAPI
      .deleteOneRegister(charId)
      .then(() => document.querySelector("#delete-one").classList.add('button-green'))
      .catch((err) => {
        document.querySelector("#delete-one").classList.remove("button-green")
        document.querySelector("#delete-one").classList.add('button-red')
        console.log("Error: ", err)
      });
  });


  //update one register

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const charId = document.querySelector('input[name="chr-id"]').value;
      charactersAPI
        .getOneRegister(charId)
        .then((charact) => {
          document.querySelector('#edit-character-form input[name="name"]').value = charact.data.name;
          document.querySelector('#edit-character-form input[name="occupation"]').value = charact.data.occupation;
          document.querySelector('#edit-character-form input[name="weapon"]').value = charact.data.weapon;
          if (charact.data.cartoon == true)
            document.querySelector('#edit-character-form input[name="cartoon"]').checked = true;
          else document.querySelector('#edit-character-form input[name="cartoon"]').checked = false;
        })
        .catch((err) => console.log("Error: ", err));



      const inputFromEdit = document.querySelectorAll(
        "#edit-character-form input"
      );

      let cartoonBoolean = false;

      if (document.querySelector('#edit-character-form input[name="cartoon"]').checked == true) cartoonBoolean = true;
      const myCharacter = {
        name: inputFromEdit[1].value,
        occupation: inputFromEdit[2].value,
        weapon: inputFromEdit[3].value,
        cartoon: `${cartoonBoolean}`,
      };



      document.getElementById("new-character-form").reset()
      charactersAPI
        .updateOneRegister(charId, myCharacter)
        .then(() => document.querySelector(".create-button").classList.add('button-green'))
        .catch((err) => {
          console.log("Error: ", err)
          document.querySelector(".create-button").classList.remove('button-green')
          document.querySelector(".create-button").classList.add('button-red')
        });

    });



  //Create one register

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = document.querySelectorAll("#new-character-form input");

      let cartoonBoolean = false;

      if (inputs[3].value == "on") cartoonBoolean = true;

      if (inputs[0].value.length < 1) {
        document.querySelector("#send-data").classList.add('button-red')

      }
      else {
        document.querySelector("#send-data").classList.add('button-green')
        const myCharacter = {
          name: inputs[0].value,
          occupation: inputs[1].value,
          weapon: inputs[2].value,
          cartoon: `${cartoonBoolean}`,
        };


        //Borrar contenido de los imputs después de enviarlos

        document.getElementById("new-character-form").reset();



        charactersAPI
          .createOneRegister(myCharacter)
          .then((element) => console.log(element))
          .catch((err) => console.log("Error: ", err));
      }
    });

});






//Función para eliminar los registros que salen con fetch all de la vista principal


function eliminarHijos() {

  let parentNode = document.querySelector(".characters-container");

  if (parentNode.hasChildNodes()) {

    while (parentNode.childNodes.length >= 1) {

      parentNode.removeChild(parentNode.firstChild);
    }
  }
  flag = true
}


