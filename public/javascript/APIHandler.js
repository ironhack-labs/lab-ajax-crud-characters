class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.axiosAPI = axios.create({ baseUrl: baseUrl })
        this.fetchAllURL = `${this.BASE_URL}characters`
        this.fetchOneURL = undefined
        this.fetchDeleteURL = undefined
        this.fetchcreateURL = undefined
    }

    getFullList() {
        return this.axiosAPI.get(this.fetchAllURL)
            .then(result => result.data)
            .catch(error => console.log(error))
    }

    getOneRegister(id) {
        this.fetchOneURL = `${this.fetchAllURL}/${id}`
        return this.axiosAPI.get(this.fetchOneURL)
            .then(result => result.data)
            .catch(error => console.log(error))
    }

    createOneRegister(objectToCreate) {
       return this.axiosAPI.post("https://minions-api.herokuapp.com/characters", objectToCreate)
            .then(result => result.data)
            .catch(error => console.log(error))
    }

    updateOneRegister(objectToUpdate) {
        this.fetchOneURL = `${this.fetchAllURL}/${objectToUpdate.id}`
        return this.axiosAPI.put(this.fetchOneURL, objectToUpdate)
            .then(result => result.data)
            .catch(error => console.log(error))
    }

    deleteOneRegister(objectToDelete) {
        this.fetchDeleteURL = `${this.fetchAllURL}/${objectToDelete.id}`
        return this.axiosAPI.delete(this.fetchDeleteURL)
            .then(result => console.log(result.data))
            .catch(error => console.log(error))
    }
}

const apiMethods = new APIHandler("https://minions-api.herokuapp.com/")
