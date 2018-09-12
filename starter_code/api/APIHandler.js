const apiURL = "http://localhost:8000";
const axios = require('axios');
const axiosIns = axios.create({
    baseURL: apiURL
});


class APIHandler {
   async getAllCharacters() {
       try {
           let characters = await axiosIns.get("/characters");
           characters = characters.data;
           console.log(characters);

       } catch(ex) {
           console.log(ex);
       }

    }

    async getCharacterInfo(id) {
        try {
            let character = await axiosIns.get(`/characters/${id}`);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }

    async createCharacter(opt) {
        try {
            let character = await axiosIns.post(`/characters`, opt);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }

    async delCharacter(id) {
        try {
            let character = await axiosIns.delete(`/characters/${id}`);
            console.log("The character was deleted!");

        } catch(ex) {
            console.log(ex);
        }
    }

    async editCharacter({ id , ...opt}) {
        try {
            let character = await axiosIns.put(`/characters/${id}`, opt);
            character = character.data;
            console.log(character);

        } catch(ex) {
            console.log(ex);
        }
    }
}

const apiHandler = new APIHandler();
// apiHandler.getAllCharacters();
// apiHandler.getCharacterInfo(2);

// const characterInfo = {
//     name: "Batman",
//     occupation: "He can fly",
//     weapon: "Everything",
//     cartoon: true
// };
//
// apiHandler.createCharacter(characterInfo);
//
// apiHandler.delCharacter(4);
//
// const character = {
//     id:4,
//     name: "Batman",
//     occupation: "He can fly",
//     weapon: "Gun",
//     cartoon: true
// };
// apiHandler.editCharacter(character);