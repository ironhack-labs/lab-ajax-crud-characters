const charactersAPI = new APIHandler("http://localhost:8000");

function createElement(character) {
  var element = document.createElement("div");
  element.innerHTML = `<table>
    <tr><td>Id:</td><td>` + character.id + `</td></tr>
    <tr><td>Name:</td><td>` + character.name + `</td></tr>
    <tr><td>Occupation:</td><td>` + character.occupation + `</td></tr>
    <tr><td>Debt:</td><td>` + character.debt + `</td></tr>
    <tr><td>Weapon:</td><td>` + character.weapon + `</td></tr>
  </table>`;
  document.getElementById('characters-container').appendChild(element);
}
window.onload = () => {
  document.getElementById('fetch-all').onclick = function () {
    document.getElementById('characters-container').innerHTML = ``;
    charactersAPI.getFullList().then(characters => {
      characters.forEach(character => {
        createElement(character);
      });
    });
  };

  document.getElementById('fetch-one').onclick = function () {
    document.getElementById('characters-container').innerHTML = ``;
    charactersAPI.getOneRegister(document.getElementById('find-one').value).then(character => {
      createElement(character);
    });
  };

  document.getElementById('delete-one').onclick = function () {
    document.getElementById('characters-container').innerHTML = ``;
    charactersAPI.deleteOneRegister(document.getElementById('del-one').value).then(() => {
      document.getElementById('delete-one').style.backgroundColor = "green";
    })
    .catch(()=>{
      document.getElementById('delete-one').style.backgroundColor = "red";
    });
  
  };

  document.getElementById('edit-character-form').onsubmit = function (event) {
    event.preventDefault();
  var id = document.getElementById('chr-id').value;
  var object = {
    name: document.getElementById('update-name').value,
    occupation: document.getElementById('update-occupation').value,
    weapon: document.getElementById('update-weapon').value,
    debt: document.getElementById('update-debt').checked
        };
    charactersAPI.updateOneRegister(
      id, object).then(() => {
      document.getElementById('update-button').style.backgroundColor = "green";
      document.getElementById('chr-id').value = ``;
      document.getElementById('update-name').value = ``;
      document.getElementById('update-occupation').value = ``;
      document.getElementById('update-weapon').value = ``;
      document.getElementById('update-debt').checked = false;
    })
    .catch(()=>{
      document.getElementById('update-button').style.backgroundColor = "red";
    });
    
  };

  document.getElementById('new-character-form').onsubmit = function (event) {
    event.preventDefault();
   
    var object = {
name: document.getElementById('create-name').value,
occupation: document.getElementById('create-occupation').value,
weapon: document.getElementById('create-weapon').value,
debt: document.getElementById('create-debt').checked
    };

    charactersAPI.createOneRegister(object).then(() => {
      document.getElementById('create-button').style.backgroundColor = "green";
      document.getElementById('create-name').value = ``;
      document.getElementById('create-occupation').value = ``;
      document.getElementById('create-weapon').value = ``;
      document.getElementById('create-debt').checked = false;

    })
    .catch(()=>{
      document.getElementById('create-button').style.backgroundColor = "red";
    });
    
  };
};