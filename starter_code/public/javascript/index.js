const charactersAPI = new APIHandler("http://localhost:8000");


$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
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
    let charNum = document.getElementById("ID-to-delete").value;
    console.log('el numero ', charNum );
    charactersAPI.deleteOneRegister (charNum).then(res => {
      console.log('char delete', res);
    })

  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    console.log(
      `ver esto`,
      document.getElementsByClassName(`character-info`)[0].name
    );

    // const characterInfo = {
    //   name: document
    //     .getElementsByClassName(`character-info`)[0]
    //     .getElementsByTagName("div")[0].value,
    //   occupation: document
    //     .getElementsByClassName(`character-info`)[0]
    //     .getElementsByTagName("div")[1].value,
    //   weapon: document
    //     .getElementsByClassName(`character-info`)[0]
    //     .getElementsByTagName("div")[2].value,
    //   cartoon: document
    //     .getElementsByClassName(`character-info`)[0]
    //     .getElementsByTagName("div")[3].value
    // };
    //console.log('mi caractere', characterInfo);
  };
});
