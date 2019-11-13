const charactersAPI = new APIHandler('http://localhost:8000');




window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(apiRes => {
        const characters = apiRes.data;
        let tpl = "";
        characters.forEach(char => {
          tpl += `<div class="character-info">
          <div class="name">Id: <span>${char.id}</span></div>
          <div class="name">Name: <span>${char.name}</span></div>
          <div class="occupation">Occupation: <span>${char.occupation}</span></div>
          <div class="cartoon">Cartoon: <span>${char.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${char.weapon}</span></div>
        </div>`
        });
        const container = document.querySelector(".character-info");
        container.innerHTML = tpl;
      })
      .catch(apiErr => {
        console.log(apiErr);
      });

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const inputId = document.getElementById("fetch-one-input");
    const id = inputId.value;

    console.log(id);

    charactersAPI
      .getOneRegister(id)
      .then(apiRes => {
        const character = apiRes.data;
        let tpl = "";
        tpl += `<div class="character-info">
        <div class="name">Id: <span>${character.id}</span></div>
        <div class="name">Name: <span>${character.name}</span></div>
        <div class="occupation">Occupation: <span>${character.occupation}</span></div>
        <div class="cartoon">Cartoon: <span>${character.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${character.weapon}</span></div>
          </div>`

        const container = document.querySelector(".character-info");
        container.innerHTML = tpl;
      })
      .catch(apiErr => {
        console.log(apiErr);
      });

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const inputId = document.getElementById("delete-one-input");
    const id = inputId.value;
    const deleteButton = document.getElementById("delete-one");

    charactersAPI
      .deleteOneRegister(id)
      .then(apiRes => {
        deleteButton.classList.add("active");
        deleteButton.classList.remove("wrong");
      })
      .catch(apiErr => {
        deleteButton.classList.add("wrong");
        deleteButton.classList.remove("active");
      });

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    const updateButton = document.getElementById("create-button");

    event.preventDefault();

    const id = document.getElementById("edit-id").value;
    const name = document.getElementById("edit-name").value;
    const occupation = document.getElementById("edit-occupation").value;
    const weapon = document.getElementById("edit-weapon").value;
    const isACartoon = document.getElementById("edit-cartoon").checked;


    const infos = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: isACartoon
    }

    charactersAPI.updateOneRegister(id, infos)
      .then(apiRes => {
        updateButton.classList.add("active");
        updateButton.classList.remove("wrong");
      })
      .catch(apiErr => {
        updateButton.classList.add("wrong");
        updateButton.classList.remove("active");
      })

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    const createButton = document.getElementById("create-button");

    event.preventDefault();

    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occupation").value;
    const weapon = document.getElementById("weapon").value;
    const isACartoon = document.getElementById("is-a-cartoon").checked;

    const infos = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: isACartoon
    }

    charactersAPI.createOneRegister(infos)
      .then(apiRes => {
        createButton.classList.add("active");
        createButton.classList.remove("wrong");
      })
      .catch(apiErr => {
        createButton.classList.add("wrong");
        createButton.classList.remove("active");
      })
  });
});