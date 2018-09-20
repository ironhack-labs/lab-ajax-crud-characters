const charactersAPI = new APIHandler("http://localhost:8000");


$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    event.preventDefault();
    charactersAPI.getFullList().then(res => {
      res.forEach(elem => {
        let charToPrint = ` <div class="character-info">
        <div id="name1" class="name">Char Name: ${elem.name}</div>
        <div id="occupation1" class="occupation">Char Occupation: ${
          elem.occupation
        }</div>
        <div id="cartoon1" class="cartoon">Cartoon?: ${
          elem.cartoon ? "Yes" : "No"
        }</div>
        <div id="weapon1" class="weapon">Char Weapon: ${elem.weapon}</div>
      </div>`;
        document
          .getElementById("character-inDB")
          .insertAdjacentHTML("afterend", charToPrint);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    event.preventDefault();
    let charNum = document.getElementById("ID-to-fetch").value;
    console.log('el numero ', charNum );
    charactersAPI.getOneRegister(charNum).then(res => {
      let charToPrint = ` <div class="character-info">
      <div id="name1" class="name">Char Name: ${res.name}</div>
      <div id="occupation1" class="occupation">Char Occupation: ${
        res.occupation
      }</div>
      <div id="cartoon1" class="cartoon">Cartoon?: ${
        res.cartoon ? "Yes" : "No"
      }</div>
      <div id="weapon1" class="weapon">Char Weapon: ${res.weapon}</div>
    </div>`;
      document
        .getElementById("character-inDB")
        .insertAdjacentHTML("afterend", charToPrint);
      
    });
  };

  document.getElementById("delete-one").onclick = function() {
    event.preventDefault();
    let charNum = document.getElementById("ID-to-delete").value;
    console.log('el numero ', charNum );
    charactersAPI.deleteOneRegister (charNum).then(res => {
      console.log('char delete', res);
    })

  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    let charNum = document.getElementById("id2").value;
    let charToEdit = {
      name: document.getElementById('name2').value,
      occupation: document.getElementById('occupation2').value,
      weapon: document.getElementById('weapon2').value,
      cartoon: document.getElementById('cartoon2').value
    }
    charactersAPI.updateOneRegister (charNum, charToEdit);

  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    let charToAdd = {
      name: document.getElementById('name3').value,
      occupation: document.getElementById('occupation3').value,
      weapon: document.getElementById('weapon3').value,
      cartoon: document.getElementById('cartoon3').value
    }
    charactersAPI.createOneRegister (charToAdd);

  };
});
