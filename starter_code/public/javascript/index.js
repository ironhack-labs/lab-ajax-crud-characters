const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
    $('#fetch-all').on('click', (e) => {
        getAll();
    })

    $('#fetch-one').on('click', (e) => {
        getOne();
    })

    $('#delete-one').on('click', (e) => {
        deleteOne();
        getAll();
    })

    $('#edit-character-form').on('submit', (e) => {

    })

    $('#new-character-form').on('submit', (e) => {

    })
})

function getAll() {
    charactersAPI.getFullList((response)=>{
        $(".character-info").remove();
        response.forEach((characterObj)=>{
            $(".characters-container").append(assembleCharacterDiv(characterObj));
        });
    });
}

function getOne() {
    charactersAPI.getOneRegister($("[name=character-id]").val(), (response) => {
        $(".character-info").remove();
        $(".characters-container").append(assembleCharacterDiv(response));
    });
}

function deleteOne() {
    charactersAPI.deleteOneRegister($("[name=character-id-delete]").val(), (response) => {
        $("[name=character-id-delete]").val("");

    });
}

function assembleCharacterDiv(characterObj) {
    let tempHTML = `<div class="character-info">
                        <div class="name">${characterObj.name}</div>
                        <div class="occupation">${characterObj.occupation}</div>
                        <div class="debt">${characterObj.debt}</div>
                        <div class="weapon">${characterObj.weapon}</div>
                        <div class="id">${characterObj.id}</div>
                    </div>`;
    return tempHTML;
}
