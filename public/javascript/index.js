const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
    document
        .getElementById('fetch-all')
        .addEventListener('click', async function (event) {
            try {
                const { data: allCharacters } =
                    await charactersAPI.getFullList();
                allCharacters.forEach((character) => {
                    charactersContainer.innerHTML += `
                      <div id="${character.id}" class="character-info">
                      <div>id: <span>${character.id}</span></div>
                        <div class="name">name: <span>${character.name}</span></div>
                        <div class="occupation">occupation: <span>${character.occupation}</span></div>
                        <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
                        <div class="weapon">weapon: <span>${character.weapon}</span></div>
                      </div>
                  `;
                });
            } catch (err) {
                console.log(err);
            }
        });

    document
        .getElementById('fetch-one')
        .addEventListener('click', async function (event) {
            try {
                const id = document.querySelector('#character-id').value;
                const { data: character } = await charactersAPI.getOneRegister(
                    id
                );
                if (!character) {
                    throw new Error('insert a valid Id');
                }
                charactersContainer.innerHTML = `
                <div id="${character.id}" class="character-info">
                  <div>id: <span>${character.id}</span></div>
                  <div class="name">name: <span>${character.name}</span></div>
                  <div class="occupation">occupation: <span>${character.occupation}</span></div>
                  <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
                  <div class="weapon">weapon: <span>${character.weapon}</span></div>
                </div>
            `;
            } catch (err) {
                console.error(err);
            }
        });

    document
        .getElementById('delete-one')
        .addEventListener('click', async function (event) {
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

    document
        .getElementById('edit-character-form')
        .addEventListener('submit', async function (event) {
            event.preventDefault();
            const sendBtn = document.querySelector('#update-data');
            try {
                const id = document.querySelector('[name="chr-id"]').value;
                const name = document.querySelector('#update-name').value;
                const occupation =
                    document.querySelector('#update-occupation').value;
                const weapon = document.querySelector('#update-weapon').value;
                const cartoon =
                    document.querySelector('#update-cartoon').checked;

                if (!name || !occupation || !weapon || !id) {
                    throw new Error('fill all input fields');
                }

                const { data: updatedCharacter } =
                    await charactersAPI.updateOneRegister(id, {
                        name,
                        occupation,
                        weapon,
                        cartoon,
                    });

                console.log('the updated created: ', updatedCharacter);
                sendBtn.classList.add('active');
            } catch (err) {
                sendBtn.classList.add('error');
                console.error(err);
            }
        });

    document
        .getElementById('new-character-form')
        .addEventListener('submit', async function (event) {
            event.preventDefault();
            const sendBtn = document.querySelector('#send-data');
            try {
                const name = document.querySelector('[name="name"]').value;
                const occupation = document.querySelector(
                    '[name="occupation"]'
                ).value;
                const weapon = document.querySelector('[name="weapon"]').value;
                const cartoon =
                    document.querySelector('[name="cartoon"]').checked;

                if (!name || !occupation || !weapon) {
                    throw new Error('fill all input fields');
                }

                const { data: newCharacter } =
                    await charactersAPI.createOneRegister({
                        name,
                        occupation,
                        weapon,
                        cartoon,
                    });

                console.log('new character created: ', newCharacter);
                sendBtn.classList.add('active');
            } catch (err) {
                sendBtn.classList.add('error');
                console.error(err);
            }
        });
});
