const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    const theId = document.getElementById("input-fetch").value;
    charactersAPI.getOneRegister(theId);
  };

  document.getElementById("delete-one").onclick = function() {
    const theId = document.getElementById("id-delete").value;
    charactersAPI.deleteOneRegister(theId);  
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();

    const theId = document.getElementById("theCharId").value;

    const theNames = document.querySelector(".edit-name").value;
    const theOccupations = document.getElementsByClassName("edit-occupation")[0].value;
    const theWeapons = document.getElementsByClassName("edit-weapon")[0].value;
    const theCartoons = document.getElementsByClassName("edit-cartoon")[0].value;

    charactersAPI.updateOneRegister(theNames, theOccupations, theWeapons, theCartoons, theId);
  };

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault();

    const theNames = document.getElementsByClassName("the-name")[0].value;
    const theOccupations = document.getElementsByClassName("the-occupation")[0].value;
    const theWeapons = document.getElementsByClassName("the-weapon")[0].value;
    const theCartoons = document.getElementsByClassName("the-cartoon")[0].value;
      
    charactersAPI.createOneRegister(theNames, theOccupations, theWeapons, theCartoons)
  };
});
