'use strict';

const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
    $('#fetch-all').on('click', (e) => {
        charactersAPI.getFullList();
    });

    $('#fetch-one').on('click', (e) => {

        const charId = document.getElementById("character-id").value;
        charactersAPI.getOneRegister(charId);
    });

    $('#delete-one').on('click', (e) => {
        const charId = document.getElementById("del-character-id").value;
        charactersAPI.deleteOneRegister(charId);

    });

    $('#edit-character-form').on('submit', (e) => {
        e.preventDefault();
        const charId = document.getElementById("chr-id").value;

        const updateInfo = {
            name: document.getElementById('update-name-input').value,
            occupation: document.getElementById('update-occupation-input').value,
            weapon: document.getElementById('update-weapon-input').value,
            debt: document.getElementById("update-debt-input").value
        };

        charactersAPI.updateOneRegister(charId, updateInfo);
    });

    $('#new-character-form').on('submit', (e) => {
        e.preventDefault();

        const characterInfo = {
            name: document.getElementById("the-name-input").value,
            occupation: document.getElementById("the-occupation-input").value,
            weapon: document.getElementById("the-weapon-input").value,
            debt: document.getElementById("the-debt-input").value
        };

        charactersAPI.createOneRegister(characterInfo);
    });
});
