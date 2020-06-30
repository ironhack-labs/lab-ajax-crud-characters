class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl
    })
  }
  getFullList() {
    return this.axiosApp.get("/characters")
      .then(response => response.data)
      .catch(err => {
        throw new Error(err)
      })
  }
  getOneRegister(id) {
    return this.axiosApp.get(`/characters/${id}`)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err)
      })
  }
  createOneRegister(character) {
    return this.axiosApp.post("/characters", character)
      .then(response => response.data)
      .catch(err => {
        throw new Error(err)
      })
  }
  updateOneRegister(id, characterToUpdate) {
    return this.axiosApp.put(`/characters/${id}`, characterToUpdate)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 404) {
          throw new Error("Character not found")
        } else {
          throw new Error("Unknown error")
        }
      })
  }
  deleteOneRegister(id) {
    return this.axiosApp.delete(`/characters/${id}`)
      .then(() => "Character has been successfully deleted")
      .catch(err => {
        if (err.response.status === 404) {
          throw new Error("Character not found")
        } else {
          throw new Error("Unknown error")
        }
      })
  }
}