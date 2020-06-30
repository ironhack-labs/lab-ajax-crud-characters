

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    this.axiosApp = axios.create({ baseURL: baseUrl })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
      .then(res => {
        console.log('Get full list: ', res.data)
        return res.data
      })
      .catch(error => console.log('Error getting character list', error))
  }

  getOneRegister(id) {
    return this.axiosApp.get(`/characters/${id}`)
      .then(res => {
        console.log('Get one register: ', res.data)
        return res.data
      })
      .catch(error => console.log('Error fetching one character', error))
  }

  createOneRegister(createdChar) {
    return this.axiosApp.post(`/characters`, createdChar)
      .then(res => {
        console.log('Create one register:', res.data)
        return res.data

      })
      .catch(error => console.log('Error creating new character', error))
  }

  updateOneRegister(id, updatedChar) {
    return this.axiosApp.put(`/characters/${id}`, updatedChar)
      .then(res => console.log('Update one register:', res.data))
      .catch(error => console.log(error))
  }

  deleteOneRegister(id) {
    return this.axiosApp.delete(`/characters/${id}`)
      .then(res => console.log('Delete one register: ', res.data))
      .catch(error => console.log(error))
  }
}

