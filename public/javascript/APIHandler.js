// const axios = require('axios');

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

class APIHandler {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8000'
        });
    }

    // Get all characters info
    getAllCharacters() {
        this.api.get(`/characters`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    // Get a single character info
    getCharacter(id) {
        this.api.get(`/characters/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    // Create a single character
    createCharacter(characterData) {
        this.api.post(`/characters`, characterData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    // Delete a single character
    deleteCharacter(id) {
        this.api.delete(`/characters/${id}`)
            .then(() => console.log(`Character with id ${id} has been deleted`))
            .catch(error => console.log(error));
    }

    // Edit a single character
    updateCharacter(id, characterData) {
        this.api.patch(`/characters/${id}`, characterData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }
}

module.exports = APIHandler;