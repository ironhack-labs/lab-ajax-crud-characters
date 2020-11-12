//supongoo que debes d requerir axis s

console.log();

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
      .then(() => console.log(this.BASE_URL))
      .catch(error => console.log(error))

  }

  getOneRegister() {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then()
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios.post(`${this.BASE_URL}/characters/`, {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateOneRegister() {
    async () => {
      await axios.patch(`${this.BASE_URL}/${id}`, {
        name,
        occupation,
        weapon
      })


      // expected output: "resolved"
    }

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
