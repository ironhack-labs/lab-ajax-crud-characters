const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(fullList => {
      console.log(fullList.data)
      let html = ""
      fullList.data.forEach(char => {
        html = html + 
          "<div class='character-info'> " +
            "<div class='id'>Id : " + char.id + "</div>" +
            "<div class='name'>Name : " + char.name + "</div>" +
            "<div class='occupation'>Occupation : " + char.occupation + "</div>" +
            "<div class='cartoon'>Cartoon : " + char.cartoon + "</div>" +
            "<div class='weapon'>Weapon : " + char.weapon + "</div>" +
          "</div>"
      })
      document.getElementsByClassName("characters-container")[0].innerHTML = html
    })
    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("search-one-input").value
    if (id) {
      charactersAPI.getOneRegister(id)
      .then(thisCharacter => {
        document.getElementsByClassName("characters-container")[0].innerHTML = 
            "<div class='character-info'> " +
              "<div class='id'>Id : " + thisCharacter.data.id + "</div>" +
              "<div class='name'>Name : " + thisCharacter.data.name + "</div>" +
              "<div class='occupation'>Name : " + thisCharacter.data.occupation + "</div>" +
              "<div class='cartoon'>Occupation : " + thisCharacter.data.cartoon + "</div>" +
              "<div class='weapon'>Weapon : " + thisCharacter.data.weapon + "</div>" +
            "</div>"
        console.log(thisCharacter.data)
      })
      .catch(err => {
        alert("This id doesn't exist")
        console.log(err)
      })
    } else {
      alert("Please enter an Id")
    }
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("delete-on-input").value
    charactersAPI.deleteOneRegister(id)
    .then()
    .catch(err => {
      alert("This character doesn't exist")
      console.log(err)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById("edit-character-form")[0].value
    const name = document.getElementById("edit-character-form")[1].value
    const occ = document.getElementById("edit-character-form")[2].value
    const weapon = document.getElementById("edit-character-form")[3].value
    const cartoon = document.getElementById("edit-character-form")[4].checked ? true : false
    const obj = {
      name: name,
      occupation: occ,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister(id,obj)
    .then(updatedChar =>console.log("Updated !", updatedChar))
    .catch(err => console.log(err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById("new-character-form")[0].value
    const occ = document.getElementById("new-character-form")[1].value
    const weapon = document.getElementById("new-character-form")[2].value
    const cartoon = document.getElementById("new-character-form")[3].checked ? true : false
    const obj = {
      name: name,
      occupation: occ,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(obj)
    .then(newChar => console.log("Created !", newChar))
    .catch(err => console.log(err))
  });
});
