const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(res => {
        console.log(res.data)
        let html = "";
        res.data.forEach(character => {
          html = html + `
      <div class="character-info">
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? : ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`
        })
        document.getElementsByClassName("characters-container")[0].innerHTML = html
      })
      .catch(error => console.log(error))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id").value
    charactersAPI.getOneRegister(id)
      .then(res => {
        console.log(res.data)
        document.getElementById("name").innerHTML = res.data.name
        document.getElementById("occupation").innerHTML = res.data.occupation
        document.getElementById("cartoon").innerHTML = res.data.cartoon
        document.getElementById("weapon").innerHTML = res.data.weapon
      })
      .catch(error => console.log(error))
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-delete").value
    charactersAPI.deleteOneRegister(id)
      .then(res => console.log(res, "Character succesfully deleted"))
      .catch(error => console.log(error))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById("id-edit").value;
    const name = document.getElementById('name-edit').value;
    const occupation = document.getElementById('occupation-edit').value;
    const weapon = document.getElementById('weapon-edit').value;
    const cartoon = document.getElementById('cartoon-edit').checked ? true : false;
    const changes = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister(id, changes)
      .then(res => console.log(res, "Character succesfully updated"))
      .catch(error => console.log(error))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name-new').value;
    const occupation = document.getElementById('occupation-new').value;
    const weapon = document.getElementById('weapon-new').value;
    const cartoon = document.getElementById('cartoon-new').checked ? true : false;
    const newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(newChar)
      .then(res => console.log(res, "Character succesfully created"))
      .catch(error => console.log(error))
  });
});