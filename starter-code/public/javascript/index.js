const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();

  }

  document.getElementById('fetch-one').onclick = function () {
    let id = document.getElementById('charToSearch').value;
    charactersAPI.getOneRegister(id);
  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.getElementById('charToDelete').value;
    charactersAPI.deleteOneRegister(id);
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    let id = document.getElementById('charToEdit').value;
    let name = document.getElementsByClassName("name")[2].value;
    let occupation = document.getElementsByClassName("occupation")[2].value;
    let weapon = document.getElementsByClassName("weapon")[2].value;
    let cartoon = document.getElementsByClassName("cartoon")[2].checked;

    let obj = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    }
    charactersAPI.updateOneRegister(id, obj)
  }

  document.getElementById('new-character-form').onsubmit = function (event) {
    event.preventDefault();
    console.log(document.getElementsByClassName("name")[1].value);
    let name = document.getElementsByClassName("name")[1].value;
    let occupation = document.getElementsByClassName("occupation")[1].value;
    let weapon = document.getElementsByClassName("weapon")[1].value;
    let cartoon = document.getElementsByClassName("cartoon")[1].checked
    console.log(cartoon);

    let obj = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    }
    charactersAPI.createOneRegister(obj);


  }

  document.getElementById("charToEdit").addEventListener('input', (event) => {
    event.preventDefault();
    let id = document.getElementById('charToEdit').value;
    if (id == "") {
      document.getElementsByClassName('name')[2].value = "";
      document.getElementsByClassName('occupation')[2].value = "";
      document.getElementsByClassName('weapon')[2].value = "";
      document.getElementsByClassName('cartoon')[2].checked = false;
    } else {
      console.log("change");
      axios.get(`http://localhost:8000/characters/${id}`).then((character) => {
          console.log(character.data.name);
          document.getElementsByClassName('name')[2].value = character.data.name;
          document.getElementsByClassName('occupation')[2].value = character.data.occupation;
          document.getElementsByClassName('weapon')[2].value = character.data.weapon;
          if (character.data.cartoon)
            document.getElementsByClassName('cartoon')[2].checked = true;
        })
        .catch(error => console.log(error));
    }


  })
})