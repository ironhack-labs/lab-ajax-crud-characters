class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get(`${this.BASE_URL}/characters`);
    }

    getOneRegister(id) {
        return axios.get(`${this.BASE_URL}/characters/${id}`);
    }

    createOneRegister(character) {
        return axios.post(`${this.BASE_URL}/characters`, character);
    }

    updateOneRegister(character) {
        return axios.pacth(`${this.BASE_URL}/characters`, character);
    }

    deleteOneRegister(id) {
        return axios.delete(`${this.BASE_URL}/characters/${id}`);
    }
}