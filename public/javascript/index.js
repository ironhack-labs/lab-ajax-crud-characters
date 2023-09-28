const charactersAPI = new APIHandler("http://localhost:8000");
//const ApiHandler = require("../public/javascript/APIHandler");
const apiHandler = new APIHandler();

window.addEventListener("load", (event) => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      apiHandler
        .getFullList()
        .then((responseFromApi) => {
          // uncomment the line below
          console.log(responseFromApi.data);
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      apiHandler
        .getOneRegister()
        .then((responseFromApi) => {
          // uncomment the line below
          console.log(responseFromApi.data);
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      apiHandler
        .deleteOneRegister()
        .then((responseFromApi) => {
          // uncomment the line below
          console.log(responseFromApi.data);
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const changeID = document.getElementById("changeID").value;
      const changeName = document.getElementById("changeName").value;
      const changeOccupation =
        document.getElementById("changeOccupation").value;
      const changeWeapon = document.getElementById("changeWeapon").value;
      const changeCartoon = document.getElementById("changeCartoon").checked;

      apiHandler
        .updateOneRegister({
          id: changeID,
          name: changeName,
          occupation: changeOccupation,
          weapon: changeWeapon,
          cartoon: changeCartoon,
        })
        .then((changedChracter) => {
          document.getElementById("send-data-change").style.background =
            "green";
          // uncomment the line below
          //console.log(newChracter.data);
        })
        .catch((error) => {
          document.getElementById("send-data-change").style.background = "red";
          console.log(error);
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const newName = document.getElementById("newName").value;
      const newOccupation = document.getElementById("newOccupation").value;
      const newWeapon = document.getElementById("newWeapon").value;
      const newCartoon = document.getElementById("newCartoon").checked;

      apiHandler
        .createOneRegister({
          id: "",
          name: newName,
          occupation: newOccupation,
          weapon: newWeapon,
          cartoon: newCartoon,
        })
        .then((newChracter) => {
          document.getElementById("send-data-new").style.background = "green";
          // uncomment the line below
          //console.log(newChracter.data);
        })
        .catch((error) => {
          document.getElementById("send-data-new").style.background = "red";
          console.log(error);
        });
    });
});
