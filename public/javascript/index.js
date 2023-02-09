const charactersAPI = new APIHandler('http://localhost:8000')

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', function (event) {
        charactersAPI.getFullList()
        .then(response => {
            const characters = response.data

            let cards = ``
            characters.forEach(character => {
                cards +=
                `
                <div class="character-info">
                    <div class="name">Name: ${character.name}</div>
                    <div class="occupation">Occupation: ${character.occupation}</div>
                    <div class="cartoon">Cartoon: ${character.cartoon ? "Yes" : "No"}</div>
                    <div class="weapon">Weapon: ${character.weapon}</div>
                </div>
                `
            })
            document.querySelector(".characters-container").innerHTML = cards
        })
        .catch(err => console.log(err))
    })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
