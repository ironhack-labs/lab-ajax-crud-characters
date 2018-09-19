class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return  axios.get(`${this.BASE_URL}/characters`)

  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)

  }

  createOneRegister (inputs) {
    let id;
    axios.get(`${this.BASE_URL}/characters`).then( chars => {
      id = chars.data.length+1;
    })
    .then(chars => {
      axios.post(`${this.BASE_URL}/characters`, {
        id: id,
        name: inputs.name,
        occupation: inputs.occupation,
        weapon: inputs.weapon,
        isACartoon: inputs.isACartoon,
      })
    }).catch(e => {
      console.log(e)
    })
    console.log('Created New Register')
  }

  updateOneRegister (inputs) {
    axios.patch(`${this.BASE_URL}/characters/${inputs["chr-id"]}`, {
      id: inputs["chr-id"],
      name: inputs.name,
      occupation: inputs.occupation,
      weapon: inputs.weapon,
      isACartoon: inputs.isACartoon,
    }).catch(e => {
      console.log(e)
    })
    console.log('Updated Register')
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }
}
