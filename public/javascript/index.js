const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', (event) => {
    charactersAPI.getFullList()
    .then((apiRes) => {
      insertCharsInContainer(apiRes.data)
    })
    .catch(err => {
      console.log(err)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const inputBar = document.getElementById("search-one");
    const id = inputBar.value;
    charactersAPI.getOneRegister(id)
    .then((char) => {
      insertCharInContainer(char.data)
    })
    .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const inputBar = document.getElementById("delete-this-one");
    const id = inputBar.value;
    charactersAPI.deleteOneRegister(id)
    .then(dbSuccess => console.log(dbSuccess))
    .catch(err => console.log(err));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById("id-update").value;
    console.log(id);
    const nameUp = document.getElementById("name-update");
    const occupationUp = document.getElementById("occupation-update");
    const weaponUp = document.getElementById("weapon-update");
    const cartoonUp = document.getElementById("cartoon-update")
    console.log(nameUp.value, occupationUp.value, weaponUp.value, cartoonUp.value)
    user = {
      name: nameUp.value,
      occupation: occupationUp.value,
      weapon: weaponUp.value,
      cartoon: cartoonUp.value === 'on',
    }
    console.log(user)
    charactersAPI.updateOneRegister(id, user)
    .then((char) => console.log(char))
    .catch(err => console.log(err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nameBar = document.getElementById("name-create");
    const occupationBar = document.getElementById("occupation-create");
    const weaponBar = document.getElementById("weapon-create");
    const cartoonBox = document.getElementById("cartoon-create")
    //const name = nameBar.value;
    //const occupation = occupationBar.value;
    //const weapon = weaponBar.value;
    user = {
      name: nameBar.value,
      occupation: occupationBar.value,
      weapon: weaponBar.value,
      cartoon: cartoonBox.value === 'on',
    }
    charactersAPI.createOneRegister(user)
    .then((char) => console.log(char))
    .catch(err => console.log(err));
  });
});

function insertCharsInContainer(characters) {
  const container = document.getElementsByClassName("characters-container");
  container[0].innerHTML = "";
  characters.forEach( (char) => {
  container[0].innerHTML += `
    <div class="character-info">
      <div class="name">Name: ${char.name}</div>
      <div class="occupation">Occupation: ${char.occupation}</div>
      <div class="cartoon">Cartoon? ${char.cartoon}</div>
      <div class="weapon">Weapon ${char.weapon}</div>
    </div> `
  })
}

function insertCharInContainer(char) {
  const container = document.getElementsByClassName("characters-container");
  container[0].innerHTML = "";
  container[0].innerHTML += `
    <div class="character-info">
      <div class="name">Name: ${char.name}</div>
      <div class="occupation">Occupation: ${char.occupation}</div>
      <div class="cartoon">Cartoon? ${char.cartoon}</div>
      <div class="weapon">Weapon ${char.weapon}</div>
    </div> `
}