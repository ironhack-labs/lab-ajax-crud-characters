class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {
        return axios.get(`${this.BASE_URL}/characters`);
    }

    getOneRegister(persId) {
        return axios.get(`${this.BASE_URL}/characters/${persId}`);
    }

    createOneRegister(addPers) {
        axios.post(`${this.BASE_URL}/characters`, addPers);
    }

    updateOneRegister(charId, actPers) {
        axios.put(`${this.BASE_URL}/characters/${charId}`, actPers);
    }

    deleteOneRegister(persId) {
        axios.delete(`${this.BASE_URL}/characters/${persId}`);
    }
}