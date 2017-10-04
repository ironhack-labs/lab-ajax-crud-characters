const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready(() => {
    $('#fetch-all').on('click', (e) => {
        charactersAPI.getFullList().then(characters => {
            characters.forEach(appendCharacter)
        })
    });

    $('#fetch-one').on('click', (e) => {
        charactersAPI.getOneRegister($("input[name=character-id]").val())
            .then(appendCharacter)
    });



    $('#delete-one').on('click', (e) => {
        charactersAPI.deleteOneRegister($("input[name=character-id-delete]").val())
            .then(Response => {
                $('#delete-one').css("background-color", "green")
            })
            .catch(error => {
                $('#delete-one').css("background-color", "red")
            })

    });

    $('#edit-character-form').on('submit', (e) => {

    })

    $('#new-character-form').on('submit', (e) => {

    })
})

function appendCharacter(character) {
    const newCharacterHtml = `<div class="character-info">
    <div class="name">${character.name}</div>
    <div class="occupation">${character.occupation}</div>
    <div class="debt">${character.debt}</div>
    <div class="weapon">${character.weapon}</div>
    </div>`;
    $('.characters-container').append(newCharacterHtml);
};