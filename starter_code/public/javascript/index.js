const charactersAPI = new APIHandler("http://localhost:8000/");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    event.preventDefault();
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    event.preventDefault();
    let id = document.getElementById("character-id").value;
    console.log(id);
    charactersAPI.getOneRegister(id);
  };

  document.getElementById("delete-one").onclick = function() {
    event.preventDefault();
    let id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    let characterInfo = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      weapon: document.getElementsByName("weapon")[1].value,
      debt: document.getElementsByName("debt")[0].checked == true
    };
    let id = document.getElementsByName("chr-id")[0].value;
    //console.log(characterInfo);
    charactersAPI.updateOneRegister(id, characterInfo);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    // let name = document.getElementsByName("name").value;
    // console.log(document.getElementsByName("name")[0].value);
    // let occupation = document.getElementsByName("occupation").value;
    // let weapon = document.getElementsByName("weapon").value;
    // let debt = document.getElementsByName("debt").checked;
    // console.log(document.getElementsByName("debt")[0].checked == true);
    let characterInfo = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      weapon: document.getElementsByName("weapon")[0].value,
      debt: document.getElementsByName("debt")[0].checked == true
    };
    //console.log(characterInfo);
    charactersAPI.createOneRegister(characterInfo);
  };
});
