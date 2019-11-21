class APIHandler {
  constructor (baseUrl) {
    this.minionApi = baseUrl
    //   {
    //     baseURL: baseUrl
    //   }

    // )
  }

  getFullList () {

    return axios.get(`${this.minionApi}/characters`)


    
}

  getOneRegister (id) {

    return axios.get(`${this.minionApi}/characters/${id}`)


  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
