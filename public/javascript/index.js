const charactersAPI = new APIHandler('http://localhost:8000');
const $charCon = document.querySelector('.characters-container')

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        const characters = await charactersAPI.getFullList()
            //console.log(characters)


        $charCon.innerHTML = ''

        characters.forEach(character => {
            // const characterInfo = document.createElement('div')
            // characterInfo.className = 'character-info'
            $charCon.innerHTML += `
        <div class="character-info">
          <div class='id'>Id: ${character.id}</div>
          <div class='name'>Name: ${character.name}</div>
          <div class='occupation'>Occupation: ${character.occupation}</div>
          <div class='weapon'>Weapon: ${character.weapon}</div>
          <div class='cartoon'>Cartoon: ${character.cartoon}</div>
        </div>
        `
                // document.querySelector('.character-container').appendChild(characterInfo)

        })
    });

    document.getElementById('fetch-one').addEventListener('click', async function(event) {
        const $inputId = document.querySelector('input[name="character-id"]')
        const idValue = $inputId.value
        const character = await charactersAPI.getOneRegister(idValue)
        $charCon.innerHTML = ''
        $charCon.innerHTML += `
        <div class="character-info">
          <div class='id'>Id: ${character.id}</div>
          <div class='name'>Name: ${character.name}</div>
          <div class='occupation'>Occupation: ${character.occupation}</div>
          <div class='weapon'>Weapon: ${character.weapon}</div>
          <div class='cartoon'>Cartoon: ${character.cartoon}</div>
        </div>
        `

    });

    document.getElementById('delete-one').addEventListener('click', async function(event) {
        const $inputDeleteId = document.querySelector('input[name="character-id-delete"]')
        const deleteIdValue = $inputDeleteId.value
        await charactersAPI.deleteOneRegister(deleteIdValue)
    });

    document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
        event.preventDefault()
        const $editId = document.querySelector('#edit-character-form input[name="chr-id"]')
        const $editName = document.querySelector('#edit-character-form input[name="name"]')
        const $editOccupation = document.querySelector('#edit-character-form input[name="occupation"]')
        const $editWeapon = document.querySelector('#edit-character-form input[name="weapon"]')
        const $editCartoon = document.querySelector('#edit-character-form input[name="cartoon"]')

        const characterId = $editId.value;
        const name = $editName.value;
        const occupation = $editOccupation.value;
        const weapon = $editWeapon.value;
        const cartoon = $editCartoon.checked;

        await charactersAPI.updateOneRegister(characterId, { name, occupation, weapon, cartoon })

    });

    document.getElementById('new-character-form').addEventListener('submit', async function(event) {
        const $createCharName = document.querySelector('#new-character-form input[name="name"]')
        const $createCharOccupation = document.querySelector('#new-character-form input[name="occupation"]')
        const $createCharWeapon = document.querySelector('#new-character-form input[name="weapon"]')
        const $createCharCartoon = document.querySelector('#new-character-form input[name="cartoon"]')

        const name = $createCharName.value
        const occupation = $createCharOccupation.value
        const weapon = $createCharWeapon.value
        const cartoon = $createCharCartoon.checked

        await charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })

    });
});