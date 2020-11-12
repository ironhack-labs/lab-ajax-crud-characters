class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl
    }

    getFullList() {
        return axios.get(`${this.BASE_URL}/characters`)
    }

    getOneRegister(id) {
        return axios.get(`${this.BASE_URL}/characters/${id}`)

    }

    createOneRegister(obj) {
        const { name, occupation, cartoon, weapon } = obj
        axios.post(`${this.BASE_URL}/characters/`, { name, occupation, cartoon, weapon })
    }

    updateOneRegister(id, obj) {
        const { name, occupation, cartoon, weapon } = obj
        axios.patch(`${this.BASE_URL}/characters/${id}`, { name, occupation, cartoon, weapon })
    }

    deleteOneRegister(id) {
        axios.delete(`${this.BASE_URL}/characters/${id}`)
    }
}