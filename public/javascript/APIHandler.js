class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    async getFullList() {
        const { data: characters } = await axios.get(`${this.BASE_URL}/characters`)
        return characters;
    }

    async getOneRegister(id) {
        const character = await axios.get(`${this.BASE_URL}/characters/${id}`)
        return character;
    }

    createOneRegister() {

    }

    updateOneRegister() {

    }

    deleteOneRegister() {

    }
}