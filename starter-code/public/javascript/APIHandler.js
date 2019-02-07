class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   return axios.get(this.BASE_URL + "/characters")
  .then(data => {
    return data.data
  }) 
  .catch(err => {
    console.log(err)
  })
  }

  getOneRegister (culo) {
    return axios.get(this.BASE_URL + "/characters/" + culo)
    .then(data => {
      return data.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister (new1, new2, new3, new4) {
    return axios.post(this.BASE_URL  + "/characters", {
    name: new1,
    occupation: new2,
    cartoon: new3,
    weapon: new4
  })
  .then(data => {
    return data
  })
  .catch(err => {
    console.log(err)
  })
  }

  updateOneRegister (nepe,new1,new2,new3,new4) {
    return axios.put(this.BASE_URL + "/characters/" + nepe, {
    name: new1,
    occupation: new2,
    cartoon: new3,
    weapon: new4
    })
    .then(data => {
      console.log(data)
      return data.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteOneRegister (teta) {
    return axios.delete(this.BASE_URL + "/characters/" + teta)
    .then(data => {
      return data.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}

