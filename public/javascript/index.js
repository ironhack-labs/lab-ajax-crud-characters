const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async (event) => {
        const data = await charactersAPI.getFullList();
        charactersAPI.domLoop(data);
    });

    document.getElementById('fetch-one').addEventListener('click', async (event) => {
        const charID = document.getElementById('single').value;
        const char = await charactersAPI.getOneRegister(charID);
        const parent = document.getElementById('parent');
        parent.innerHTML = `
        <div class="character-info">
            <div class="id">ID: ${char.id}</div>
            <div class="name">Name: ${char.name}</div>
            <div class="occupation">Occupation: ${char.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
            <div class="weapon">Weapon: ${char.weapon}</div>
        </div>`;
    });

    document.getElementById('delete-one').addEventListener('click', (event) => {
        const toDelete = document.getElementById('delete').value;
        charactersAPI.deleteOneRegister(toDelete);
        charactersAPI.refresh();
    });

    document.getElementById('send-data edit').addEventListener('click', (event) => {
        const charToEdit = {
            name: document.getElementById('edit-name').value,
            occupation: document.getElementById('edit-occupation').value,
            weapon: document.getElementById('edit-weapon').value,
            cartoon: !!document.getElementById('edit-cartoon').checked,
        };
        charactersAPI.updateOneRegister(document.getElementById('edit-id').value, charToEdit);
        document.getElementById('edit-character-form').reset();
        charactersAPI.refresh();
    });

    document.getElementById('send-data create').addEventListener('click', (event) => {
        const newChar = {
            name: document.getElementById('new-name').value,
            occupation: document.getElementById('new-occupation').value,
            weapon: document.getElementById('new-weapon').value,
            cartoon: !!document.getElementById('new-cartoon').checked,
        };
        charactersAPI.createOneRegister(newChar);
        document.getElementById('new-character-form').reset();
        charactersAPI.refresh();
    });
});
