const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        try {
            var result = await charactersAPI.getFullList();
            document.querySelector('.characters-container').innerHTML = '';
            result.data.forEach((character) => {
                const html = `
                  <div class="character-info">
                    <div class="id">Id: ${character.id}</div>
                    <div class="name">Name: ${character.name}</div>
                    <div class="occupation">Occupation: ${character.occupation}</div>
                    <div class="cartoon">Is a cartoon? : ${character.cartoon}</div>
                    <div class="weapon">Weapon: ${character.weapon}</div>
                  </div>`;
                document.querySelector('.characters-container').innerHTML += html;
            });
        } catch (error) {
            console.log(error);
        }
    });

    document.getElementById('fetch-one').addEventListener('click', async function(event) {
        try {
            var id = document.querySelector('input[name=character-id]').value;
            var result = await charactersAPI.getOneRegister(id);
            document.querySelector('.characters-container').innerHTML = '';
            const html = `
              <div class="character-info">
                <div class="id">Id: ${result.data.id}</div>
                <div class="name">Name: ${result.data.name}</div>
                <div class="occupation">Occupation: ${result.data.occupation}</div>
                <div class="cartoon">Is a cartoon? : ${result.data.cartoon}</div>
                <div class="weapon">Weapon: ${result.data.weapon}</div>
              </div>`;
            document.querySelector('.characters-container').innerHTML += html;

        } catch (error) {
            console.log(error);
        }
    });

    document.getElementById('delete-one').addEventListener('click', function(event) {

    });

    document.getElementById('edit-character-form').addEventListener('submit', function(event) {

    });

    document.getElementById('new-character-form').addEventListener('submit', function(event) {

    });
});