const charactersAPI = new APIHandler("http://localhost:8000")
let allCharacters = [];

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function() {

        charactersAPI.getFullList()
            .then(allcharacters => {
                updateCharacters(allcharacters)
            })
    }

    document.getElementById('fetch-one').onclick = function() {

    }

    document.getElementById('delete-one').onclick = function() {

    }

    document.getElementById('edit-character-form').onsubmit = function() {

    }

    document.getElementById('new-character-form').onsubmit = function() {

    }
})

// update characters receives a JSON payload with all the characters and paints it in the DOM
function updateCharacters(allCharactersPayload) {
    const characterContainerDOMEl = document.querySelector(".characters-container")

    // here we clear out all the previous list items (characters) so we always start the list from scratch
    characterContainerDOMEl.innerHTML = ""

    // here we globalize the received axios payload from our API so we use it in multiple places 
    // for example to edit (remember the function edit(idx) works with this array)
    allCharacters = allCharactersPayload.data

    // here we traverse the whole list of characters and make list items and edit links available for the user
    allCharactersPayload.data.forEach((character, idx) => {

        const divCharactDOMEl = document.createElement("div")
        divCharactDOMEl.className = "character-info"
        characterContainerDOMEl.appendChild(divCharactDOMEl)

        const divCharactIDDOMEl = document.createElement("div")
        divCharactIDDOMEl.className = "id"
        divCharactIDDOMEl.innerHTML = `Id:<span>${character.id}</span>`
        divCharactDOMEl.appendChild(divCharactIDDOMEl)

        const divCharactNameDOMEl = document.createElement("div")
        divCharactNameDOMEl.className = "name"
        divCharactNameDOMEl.innerHTML = `Name:<span>${character.name}</span>`
        divCharactDOMEl.appendChild(divCharactNameDOMEl)

        const divCharactOccupationDOMEl = document.createElement("div")
        divCharactOccupationDOMEl.className = "occupation"
        divCharactOccupationDOMEl.innerHTML = `Ocuppation:<span>${character.occupation}</span>`
        divCharactDOMEl.appendChild(divCharactOccupationDOMEl)

        const divCharactCartoonDOMEl = document.createElement("div")
        divCharactCartoonDOMEl.className = "cartoon"
        divCharactCartoonDOMEl.innerHTML = `Is a Cartoon?:<span>${character.cartoon}</span>`
        divCharactDOMEl.appendChild(divCharactCartoonDOMEl)

        const divCharactWeaponDOMEl = document.createElement("div")
        divCharactWeaponDOMEl.className = "weapon"
        divCharactWeaponDOMEl.innerHTML = `Weapon:<span>${character.weapon}</span>`
        divCharactDOMEl.appendChild(divCharactWeaponDOMEl)

    })
}