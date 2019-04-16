import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8100");
// charactersAPI.createCharacter("Yaya", "developer", "keyboard", true, 10);

const names = document.getElementsByClassName("name");
const occupations = document.getElementsByClassName("occupation");
const weapons = document.getElementsByClassName("weapon");
const cartoons = document.getElementsByClassName("cartoons");

//----------------FETCH ALL
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    event.preventDefault();
    console.log("fetch-all");
    charactersAPI.getFullList();
  };

  /// -----------------FETCH ONE!
  document.getElementById("fetch-one").onclick = function() {
    event.preventDefault();
    const theId = document.getElementById("searchID").value;
    charactersAPI.getOneRegister(theId);
  };

  //---------------------DELETE ONE
  document.getElementById("delete-one").onclick = function() {
    event.preventDefault();

    const deleteID = document.getElementById("deleteID").value;
    charactersAPI.deleteOneRegister(deleteID);
  };

  //-------------------------EDIT
  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault(); // <=to stop refreshing the page!

    const allCharacters = {
      id: id[0].value,
      name: names[0].value,
      occupation: occupations[0].value,
      weapon: weapons[0].value
    };
    axios
      .post("this.BASE_URL", allCharacters)
      .then(response => {
        const { name, id } = response.data;

        document.getElementById(
          "characters-list"
        ).innerHTML += newCharacterHtml;
        // Clear the form after submitting:
        document.getElementById("new-character-form").reset();
      })
      .catch(error => {
        console.log("Error is: ", error);
      });
  };
  //-----------------------NEW CHARACTER
  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();

    const characterInfo = {
      name: names[0].value,
      occupation: occupations[0].value,
      weapon: weapons[0].value,
      cartoon: cartoons[0].value
    };

    console.log(names, occupations, weapons, cartoons);
    // charactersAPI.createCharacter(characterInfo); // bu apihandlerda ki bölgeden geliyor direk oraya. createcharacterdeki tüm bilgiyi buraya yazabilirdik yani.
  };

  //the way on the courses :
  //
  //   };

  //   //make a post request:
  //   axios
  //     .post("this.BASE_URL", characterInfo)
  //     .then(response => {
  //       const { name, id } = response.data;
  //       const newCharacterHtml = `
  //          <li>
  //            <h3> ${name} </h3>
  //            <p> Id: ${id} </p>
  //          </li>
  //        `;
  //       document.getElementById(
  //         "characters-container"
  //       ).innerHTML += newCharacterHtml;
  //       console.log("one character created: ", response);
  //     })
  //     .catch(error => {
  //       console.log("Oh No! Error is: ", error);
  //     });
});
