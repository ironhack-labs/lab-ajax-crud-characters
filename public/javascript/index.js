const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then(fullList => {
        console.log(fullList.data);
        let html = ""
        fullList.data.forEach(elm => {
          html = html +
            "<div class='character-info'> " +
            "<div class='id'> Id : " + elm.id + "</div>" +
            "<div class='name'>Name : " + elm.name + "</div>" +
            "<div class='occupation'>Occupation : " + elm.occupation + "</div>" +
            "<div class='cartoon'>Cartoon : " + elm.cartoon + "</div>" +
            "<div class='weapon'>Weapon : " + elm.weapon + "</div>" +
            "</div>"
        })
        document.querySelectorAll(".characters-container")[0].innerHTML = html;
      })
      .catch(err => console.log(err));

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {



    const id = document.getElementById('search-one').value
    charactersAPI.getOneRegister(id)
      .then(oneChar => {

        document.getElementsByClassName("characters-container")[0].innerHTML =

          "<div class='character-info'>" +
          "<div class='id'> Id : " + oneChar.data.id + "</div>" +
          "<div class='name'> Name : " + oneChar.data.name + "</div>" +
          "<div class='occupation'> Name : " + oneChar.data.occupation + "</div>" +
          "<div class='cartoon'> Occupation : " + oneChar.data.cartoon + "</div>" +
          "<div class='weapon'> Weapon : " + oneChar.data.weapon + "</div>" +
          "</div>"

        console.log(oneChar.data)
      })
      .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const deleteId = document.getElementById('delete-input').value

    charactersAPI.deleteOneRegister(deleteId)
      .then(deletedObj => console.log("id deleted", deletedObj))
      .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const editId = document.getElementById('id-input').value
    const editName = document.getElementById('name-edit-input').value
    const editOccupation = document.getElementById('occupation-edit-input').value
    const editWeapon = document.getElementById('weapon-edit-input').value

    const editObject = {

      editName,
      editOccupation,
      editWeapon
    }

    charactersAPI.updateOneRegister(editObject, editId)
      .then(objupdated => console.log("object updated", objupdated))
      .catch(err => console.log(err))


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const name = document.getElementById('name-input').value
    const occupation = document.getElementById('occupation-input').value
    const weapon = document.getElementById('weapon-input').value

    const object = {

      name,
      occupation,
      weapon
    }

    charactersAPI.createOneRegister(object)
      .then(createdObj => console.log("obj created", createdObj))
      .catch(err => console.log(err))

  });
});