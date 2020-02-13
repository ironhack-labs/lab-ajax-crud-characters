class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl
    })

  }




  getFullList() {

    return this.axiosApp.get()
      .then(response => response.data)
      .catch(error => console.log('Oh No! Error is: ', error))

  }

  getOneRegister(id) {

    return this.axiosApp.get(id)
      .then(response => response.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  createOneRegister(newMinion) {


    return this.axiosApp.post("/", newMinion)
      .then(response => response)
      .catch(error => console.log('Oh No! Error is: ', error))


  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {

    return this.axiosApp.delete(id)
      .then(response => response.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }
}