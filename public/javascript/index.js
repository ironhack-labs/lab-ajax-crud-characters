const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then(res => {
        let html = "";
        res.data.forEach(personaje => {
          html += `
        <div class="character-info">
          <div class="id">Id: ${personaje.id}</div>
          <div class="name">Name: ${personaje.name}</div>
          <div class="occupation">Occupation: ${personaje.occupation}</div>
          <div class="cartoon">Is a Cartoon? : ${personaje.cartoon}</div>
          <div class="weapon">Weapon: ${personaje.weapon}</div>
        </div>`
        })
        document.getElementsByClassName("characters-container")[0].innerHTML = html
      })

      .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id").value
    charactersAPI.getOneRegister(id)
      .then(res => {

        document.getElementById("character-info1").style.display = "block";
        document.getElementById("id").innerHTML = res.data.id;
        document.getElementById("name").innerHTML = res.data.name;
        document.getElementById("occupation").innerHTML = res.data.occupation;
        document.getElementById("cartoon").innerHTML = res.data.cartoon;
        document.getElementById("weapon").innerHTML = res.data.weapon;

      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id)
      .then(res => console.log(res, "borrado"))
      .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.getElementById("edit-id").value;
    const name = document.getElementById('edit-name').value;
    const occ = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').checked ? true : false;
    const obj = {
      name: name,
      occupation: occ,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister(id,obj)
    .then(res=>console.log("actualizado",res))
    .catch(err => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const name = document.getElementById('created-name').value;
    const occ = document.getElementById('created-occupation').value;
    const weapon = document.getElementById('created-weapon').value;
    const cartoon = document.getElementById('created-cartoon').checked ? true : false;
    const obj = {
      name: name,
      occupation: occ,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(obj)
    .then(res=>console.log("creado",res))
    .catch(err => console.log(err))
  });
});
