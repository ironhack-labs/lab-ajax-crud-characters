const charactersAPI = new APIHandler('http://localhost:8000');
const $charactersContainer = document.querySelector('.characters-container')
const $inputFetchOne = document.querySelector('input[name="character-id"]')
const $fetchOneButton = document.querySelector('#fetch-one')
const $inputDeleteOne = document.querySelector('input[name="character-id-delete"]')
const $deleteOneButton = document.querySelector('#delete-one')
const $newCharacterName = document.querySelector('#new-character-form input[name="name"]')
const $newCharacterOccupation = document.querySelector('#new-character-form input[name="occupation"]')
const $newCharacterWeapon = document.querySelector('#new-character-form input[name="weapon"]')
const $newCharacterCartoon = document.querySelector('#new-character-form input[name="cartoon"]')
const $addNewButton = document.querySelector('#new-data')
const $inputEditOne = document.querySelector('#edit-character-form input[name="chr-id"]')
const $inputEditName = document.querySelector('#edit-character-form input[name="name"]')
const $inputEditOccupation = document.querySelector('#edit-character-form input[name="occupation"]')
const $inputEditWeapon = document.querySelector('#edit-character-form input[name="weapon"]')
const $inputEditCartoon = document.querySelector('#edit-character-form input[name="cartoon"]')
const $editButton = document.querySelector('#send-data')


window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', async function(event) {
        const characters = await charactersAPI.getFullList();
        $charactersContainer.innerHTML = ''
        characters.forEach(character => {
            $charactersContainer.innerHTML += `
          <div class='character-info'>
            <div class='name'>Name: ${character.name}</div>
            <div class='occupation'>Occupation: ${character.occupation}</div>
            <div class='cartoon'>Is it a cartoon? ${character.cartoon?"Yes":"No"}</div>
            <div class='weapon'>Weapon: ${character.weapon}</div>
          </div>
          `
        })
    });

    document.getElementById('fetch-one').addEventListener('click', async function(event) {
        const characterId = $inputFetchOne.value
        const character = await charactersAPI.getOneRegister(characterId);
        $charactersContainer.innerHTML = `
        <div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Is it a cartoon? ${character.cartoon?"Yes":"No"}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
        </div> `
    });

    document.getElementById('delete-one').addEventListener('click', async function(event) {
        const characterId = $inputDeleteOne.value;
        try {
            await charactersAPI.deleteOneRegister(characterId)
            $deleteOneButton.style.backgroundColor = 'green'
        } catch (err) {
            console.log(err)
            $deleteOneButton.style.backgroundColor = 'red'
        }
    });

    document.getElementById('edit-character-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const characterId = $inputEditOne.value;
        const name = $inputEditName.value;
        const occupation = $inputEditOccupation.value;
        const weapon = $inputEditWeapon.value;
        const cartoon = $inputEditCartoon.checked;
        try {
            await charactersAPI.updateOneRegister(characterId, { name, occupation, weapon, cartoon })
            $editButton.style.backgroundColor = 'green'
        } catch (err) {
            console.log(err)
            $editButton.style.backgroundColor = 'red'
        }
    });

    document.getElementById('new-character-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const name = $newCharacterName.value
        const occupation = $newCharacterOccupation.value
        const weapon = $newCharacterWeapon.value
        const cartoon = $newCharacterCartoon.checked
        try {
            await charactersAPI.createOneRegister({
                name,
                occupation,
                weapon,
                cartoon
            })
            $addOneButton.style.backgroundColor = 'green'
        } catch (err) {
            console.log(err)
            $addOneButton.style.backgroundColor = 'red'
        }
    });

    $inputEditOne.onchange = async() => {
        const characterId = $inputEditOne.value;
        const { name, occupation, weapon, cartoon } = await charactersAPI.getOneRegister(characterId)
        $inputEditName.value = name
        $inputEditOccupation.value = occupation
        $inputEditWeapon.value = weapon
        $inputEditCartoon.checked = cartoon
    };
});