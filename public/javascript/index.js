const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((res) => {
        //console.log(res.data)
        if (res.status == 200) {
          //console.log(res.data)
          let characters = res.data
          const characterContainer = document.querySelector('.characters-container');
          // <div class="character-info">
          //   <div class="name">Character Name</div>
          //   <div class="occupation">Character Occupation</div>
          //   <div class="cartoon">Is a Cartoon?</div>
          //   <div class="weapon">Character Weapon</div>
          // </div> 
          // We are going to create character info div.
          characters.forEach(characterData => {
            const characterInfo = document.createElement('div');
            characterInfo.classList.add('character-info');

            characterInfo.innerHTML = `
            <div class="id">Id: ${characterData.id}</div>
            <div class="name">Name: ${characterData.name}</div>
            <div class="occupation">Occupation: ${characterData.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${characterData.cartoon}</div>
            <div class="weapon">Weapon: ${characterData.weapon}</div>`;

            characterContainer.appendChild(characterInfo);
          });
        }
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterIdInput = document.querySelector('input[name="character-id"]');
    console.log(characterIdInput.value)
    charactersAPI.getOneRegister(characterIdInput.value)
      .then(res => {
        console.log(res.data)
        const characterData = res.data;

        const characterContainer = document.querySelector('.characters-container');
        characterContainer.innerHTML = `
        <div class="character-info">
            <div class="id">Id: ${characterData.id}</div>
            <div class="name">Name: ${characterData.name}</div>
            <div class="occupation">Occupation: ${characterData.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${characterData.cartoon}</div>
            <div class="weapon">Weapon: ${characterData.weapon}</div>
        </div>`;
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteButton = document.getElementById('delete-one')
    const characterIdInput = document.querySelector('input[name="character-id-delete"]');
    console.log(characterIdInput.value)
    charactersAPI.deleteOneRegister(characterIdInput.value)
      .then(() => {
        deleteButton.style.backgroundColor = 'green';
      }).catch(() => {
        deleteButton.style.backgroundColor = 'red';
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    //console.dir(document) try it
    event.preventDefault(); // Prevent the form from submitting
    const form = document.getElementById('edit-character-form');
    const updateButton = form.querySelector('button[id="send-data"]')

    let id = form.querySelector('input[name="chr-id"]').value;
    let name = form.querySelector('input[name="name"]').value;
    let occupation = form.querySelector('input[name="occupation"]').value;
    let weapon = form.querySelector('input[name="weapon"]').value;
    let isCartoon = document.querySelector('input[name="cartoon"]').checked;

    console.log('Name:', name);
    console.log('Occupation:', occupation);
    console.log('Weapon:', weapon);
    console.log('Is Cartoon:', isCartoon);
    const edit_character = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon
    }
    charactersAPI.updateOneRegister(id, edit_character)
      .then(() => {
        updateButton.style.backgroundColor = 'green';
      }).catch(() => {
        updateButton.style.backgroundColor = 'red';
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const form = document.getElementById('new-character-form');


    let name = form.querySelector('input[name="name"]').value;
    let occupation = form.querySelector('input[name="occupation"]').value;
    let weapon = form.querySelector('input[name="weapon"]').value;
    let isCartoon = document.querySelector('input[name="cartoon"]').checked;


    console.log('Name:', name);
    console.log('Occupation:', occupation);
    console.log('Weapon:', weapon);
    console.log('Is Cartoon:', isCartoon);
    const character = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon
    }
    charactersAPI.createOneRegister(character)
  });
});
