'use strict';

const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

window.onload = function() {
    document.getElementById('fetch-all').addEventListener('click', (e) => {
        e.preventDefault();
        charactersAPI.getFullList();
    });

    document.getElementById('fetch-one').addEventListener('click', (e) => {
        e.preventDefault();
        const registerId = document.querySelectorAll('[name=character-id]')[0].value;
        charactersAPI.getOneRegister(registerId);
    });

    document.getElementById('delete-one').addEventListener('click', (e) => {
        e.preventDefault();
        const submit_button = document.getElementById('delete-one');
        const registerId = document.querySelectorAll('[name=character-id-delete]')[0].value;
        charactersAPI.deleteOneRegister(registerId, submit_button);
    });

    document.getElementById('edit-character-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const submit_button = document.getElementsByClassName('submit-button')[0];
        const registerId = document.querySelectorAll('[name=chr-id]')[0].value;
        const updateInfo = {
            name: document.querySelectorAll('[name=name]')[0].value,
            occupation: document.querySelectorAll('[name=occupation')[0].value,
            weapon: document.querySelectorAll('[name=weapon]')[0].value,
            debt: document.querySelectorAll('[name=debt]')[0].value
        };

        charactersAPI.updateOneRegister(registerId, updateInfo, submit_button);
    });

    document.getElementById('new-character-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const submit_button = document.getElementsByClassName('submit-button')[0];
        const characterInfo = {
            name: document.querySelectorAll('[name=name]')[0].value,
            occupation: document.querySelectorAll('[name=occupation')[0].value,
            weapon: document.querySelectorAll('[name=weapon]')[0].value,
            debt: document.querySelectorAll('[name=debt]')[0].value
        };

        charactersAPI.createOneRegister(characterInfo, submit_button);
    });
};
