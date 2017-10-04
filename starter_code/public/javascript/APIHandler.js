class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get('https://ih-crud-api.herokuapp.com/characters').then
    (response => {
      return response.data
      console.log(response.data)
    })
  }

  getOneRegister (id) {
    return axios.get("https://ih-crud-api.herokuapp.com/characters/" + id).then
      (response => {
        return response.data
        console.log(response)
      }
    )
  }

  createOneRegister (name, occupation, debt, weapon) {
    return axios.post("http://ih-crud-api.herokuapp.com/characters", {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateOneRegister (id, name, occupation, debt, weapon) {
    return axios.patch("http://ih-crud-api.herokuapp.com/characters/" + id, {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log("Character not found")
    })}

  deleteOneRegister (id) {
    return axios.delete("http://ih-crud-api.herokuapp.com/characters/" + id).then
    (response => {
     return response.data
      console.log(response)
    })
  }
}
