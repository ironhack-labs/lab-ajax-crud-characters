class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    console.log(`Starting axios with base URL: ${this.BASE_URL}`)
  }

  getFullList() {
    console.log(`GET request at URL: ${this.BASE_URL}/characters`)
    return axios.get(`${this.BASE_URL}/characters`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }

  getOneRegister(id) {
    console.log(`GET:id request at URL: ${this.BASE_URL}/characters/${id}`)
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }

  createOneRegister(charData) {
    console.log(`PUT request at URL: ${this.BASE_URL}/characters`, "Data: ", charData)
    return axios.post(`${this.BASE_URL}/characters`, charData)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }

  updateOneRegister(id, updatedCharacterInfo) {
    console.log(`PATCH request at URL: ${this.BASE_URL}/characters/${id}`, "Data: ", updatedCharacterInfo)
    return axios.patch(`${this.BASE_URL}/characters/${id}`, updatedCharacterInfo)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  }

  deleteOneRegister(id) {
    console.log(`DELETE request at URL: ${this.BASE_URL}/characters/${id}`)
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })
  }
}
