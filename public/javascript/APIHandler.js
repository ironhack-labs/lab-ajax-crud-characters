class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;

    }

    async getFullList() {
        const { data: characters } = await axios.get(`${this.BASE_URL}/characters`)
        return characters

    }

    async getOneRegister(id) {
        const { data: character } = await axios.get(`${this.BASE_URL}/characters/${id}`)
        return character

    }

    async createOneRegister(character) {
        await axios.post(`${this.BASE_URL}/characters`, character)

    }

    async updateOneRegister(id, character) {
        await axios.patch(`${this.BASE_URL}/characters/${id}`, character)
    }

    async deleteOneRegister(id) {
        await axios.delete(`${this.BASE_URL}/characters/${id}`)

    }
}