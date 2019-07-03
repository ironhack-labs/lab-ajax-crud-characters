const charactersAPI = new APIHandler("http://localhost:8000")
let allCharacters = [];

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function() {

        charactersAPI.getFullList()
            .then(allcharacters => {
                updateCharacters(allcharacters)
            }).catch((err) => {
                console.log(err)
            })
    }

    document.getElementById('fetch-one').onclick = function() {
        let characterId = +document.querySelector("input[name='character-id']").value
        charactersAPI.getOneRegister(characterId)
            .then(onecharacter => {
                updateCharacters(onecharacter)
            }).catch((err) => {
                console.log(err)
            })
        resetFormFields()
    }
    document.getElementById('new-character-form').onsubmit = function(e) {
        e.preventDefault()
        const newCharacterJSONPayload = {
            name: document.querySelector("form#new-character-form input[name=name]").value,
            occupation: document.querySelector("form#new-character-form input[name=occupation]").value,
            weapon: document.querySelector("form#new-character-form input[name=weapon]").value,
            cartoon: (document.querySelector("form#new-character-form input[name=cartoon]").checked == 'on' ? false : true)
        }
        charactersAPI.createOneRegister(newCharacterJSONPayload)
            .then(newcharacter => {
                console.log("onecharacter=" + newcharacter)

            }).catch((err) => {
                console.log(err)
            })
        resetFormFields()
    }

    document.getElementById('edit-character-form').onsubmit = function(e) {
        e.preventDefault()
        let characterId = document.querySelector("form#edit-character-form input[name=chr-id]").value
        const editCharacterJSONPayload = {
            name: document.querySelector("form#edit-character-form input[name=name]").value,
            occupation: document.querySelector("form#edit-character-form input[name=occupation]").value,
            weapon: document.querySelector("form#edit-character-form input[name=weapon]").value,
            cartoon: (document.querySelector("form#edit-character-form input[name=cartoon]").checked == 'on' ? false : true)
        }
        charactersAPI.updateOneRegister(characterId, editCharacterJSONPayload)
            .then(editcharacter => {
                console.log("onecharacter=" + editcharacter)
            }).catch((err) => {
                console.log(err)
            })
        resetFormFields()
    }

    document.getElementById('delete-one').onclick = function(e) {
        e.preventDefault()
        let characterId = document.querySelector("input[name='character-id-delete']").value
        charactersAPI.deleteOneRegister(characterId)
            .then(editcharacter => {
                console.log("onecharacter=" + editcharacter)
            }).catch((err) => {
                console.log(err)
            })
        resetFormFields()
    }
})


function resetFormFields() {
    document.querySelector("input[name='character-id']").value = ""

    document.querySelector("form#new-character-form input[name=name]").value = ""
    document.querySelector("form#new-character-form input[name=occupation]").value = ""
    document.querySelector("form#new-character-form input[name=weapon]").value = ""
    document.querySelector("form#new-character-form input[name=cartoon]").checked = false

    document.querySelector("form#edit-character-form input[name=chr-id]").value = ""
    document.querySelector("form#edit-character-form input[name=name]").value = ""
    document.querySelector("form#edit-character-form input[name=occupation]").value = ""
    document.querySelector("form#edit-character-form input[name=weapon]").value = ""
    document.querySelector("form#edit-character-form input[name=cartoon]").checked = false

    document.querySelector("input[name='character-id-delete']").value = ""
}

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