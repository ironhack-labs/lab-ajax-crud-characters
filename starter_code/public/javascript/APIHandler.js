// const api = axios.create({
//   baseURL: 
// })

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
      .then(response => {
        return response.data
      })
      .catch(err => console.log(err))
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
      .then(response => {
        return response.data
      })
  }

  createOneRegister(obj) {
    // const info = {
    //   name: obj.name,
    //   occupation: obj.occupation,
    //   cartoon: obj.cartoon,
    //   weapon: obj.weapon
    // };
    return axios.post(this.BASE_URL + "/characters", obj)
      .then(character => { return character.data })
      .catch(err => { console.log(err) })
  }

  updateOneRegister(id, obj) {
    // axios.get(this.BASE_URL + "/characters/" + id)
    //   .then(resp => {
    //     if (resp.data === {}) { return "Character not found" }
    //   })
    return axios.patch(this.BASE_URL + "/characters/" + id, obj)
      .then(character => { return character.data })
      .catch(err => { return "Character not found" })
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
      .then(sth => { return "Character has been successfully deleted" })
      .catch(sth => { return "Character not found" })
  }
}
