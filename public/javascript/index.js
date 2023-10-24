const charactersAPI = new APIHandler('http://localhost:8000');

const name = document.getElementsByClassName("name");
const occupation = document.getElementsByClassName("occupation");
const cartoon = document.getElementsByClassName("cartoon");
const weapon = document.getElementsByClassName("weapon");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const { data: allCharacters } = await charactersAPI.getFullList();
            allCharacters.forEach((character) => {
              charactersContainer.innerHTML += `
              <div class="name">Name: ${character.name}</div>
              <div class="occupation">Occupation: ${character.occupation}</div>
              <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
              <div class="weapon">Character weapon: ${character.weapon}</div> `;
                });
            } catch (err) {
              console.log(err);
          }
        });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const id = document.querySelector('#character-id').value;
      const { data: character } = await charactersAPI.getOneRegister(id);
      if (!character) {
          throw new Error('Give an ID correct');
      }
      characterContainer.innerHTML = `
        <div class="name">Name:${character.name}</div>
        <div class="occupation">Occupation:${character.occupation}</div>
        <div class="cartoon">Is a cartoon?:${character.cartoon}</div>
        <div class="weapon">Character weapon:${character.weapon}</div>`;
  } catch (err) {
      console.error(err);
  }
});

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
    try {
        const id = document.querySelector('#character-id-delete').value;
        await charactersAPI.deleteOneRegister(id);
        event.target.classList.add('active');
    } catch (err) {
        event.target.classList.add('error');
        console.log(err);
    }
});

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const sendBtn = document.querySelector('#send-data');
    try {
        const id = document.querySelector('[name="character-id"]').value;
        const name = document.querySelector('#update-name').value;
        const occupation =
            document.querySelector('#update-occupation').value;
        const weapon = document.querySelector('#update-weapon').value;
        const cartoon = document.querySelector('##update-cartoon').checked;
        const { data: editCharacter } = await charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon,});
        sendBtn.classList.add('active');
    } catch (err) {
        console.error(err);
    }
});

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
            const sendBtn = document.querySelector('#send-data');
            try {
                const name = document.querySelector('[name="name"]').value;
                const occupation = document.querySelector(
                    '[name="occupation"]'
                ).value;
                const weapon = document.querySelector('[name="weapon"]').value;
                const cartoon = document.querySelector('[name="cartoon"]').checked;
                const { data: newCharacter } = await charactersAPI.createOneRegister({name, occupation, weapon, cartoon,});
                sendBtn.classList.add('active');
            } catch (err) {
                sendBtn.classList.add('error');
                console.error(err);
            }
        });
      })


