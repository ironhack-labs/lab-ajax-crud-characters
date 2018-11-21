class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get("http://localhost:8000/characters")
            .then((fullListCharacters) => {
                return fullListCharacters.data;
            })
            .catch((error) => {
                console.log(`getFullList of characters error:${error}`)
            })

    }

    getOneRegister(id) {
        return axios.get(`http://localhost:8000/characters/${id}`)
            .then((oneCharacter) => {
                return oneCharacter.data;
            })
            .catch((error) => {
                console.log(`get one  character error:${error}`)
            })

    }

    createOneRegister(newChar) {
        console.log(newChar + 'newchar');
        return axios.post(`http://localhost:8000/characters`, newChar)
            .then((newCharacter) => {
                console.log(newCharacter);
                return newCharacter.data;
            })
            .catch((error) => {
                console.log(`get one  character error:${error}`)
            })
    }

    updateOneRegister(editChar) {
        console.log(editChar);
        return axios.put(`http://localhost:8000/characters/${editChar.id}`, editChar)
            .then((editCharacter) => {
                // console.log(editCharacter);
                return editCharacter.data;
            })
            .catch((error) => {
                console.log(`get one  character error:${error}`)
            })
    }

    deleteOneRegister(id) {
        console.log(id)
        return axios.delete(`http://localhost:8000/characters/${id}`)
            .then((deleteCharacter) => {
                console.log(deleteCharacter);
                return `Character has been successfully deleted`;
            })
            .catch((error) => {
                console.log(`Character not found:${error}`)
            })
    }
}