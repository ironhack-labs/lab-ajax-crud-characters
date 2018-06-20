class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(data => {
        console.log(data.data)
        return data.data
      })
      .catch (err => {
        console.log(err);
      })
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(data => {
        console.log(data.data)
        return (data.data)
      })
      .catch (err => {
        console.log(err);
      })
  }

  createOneRegister (chr) {
    axios.post(`${this.BASE_URL}/characters/`, chr)
      .then(data => {
        console.log(data.data)
      })
      .catch (err => {
        console.log(err);
      })
  }

  updateOneRegister (chr) {
    axios.patch(`${this.BASE_URL}/characters/${chr.id}`, chr)
    .then(data => {
      console.log(data.data)
    })
    .catch (err => {
      console.log(err);
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(data => {
        console.log(id + "deleted successfully")
      })
      .catch (err => {
        console.log(err);
      })
  }
}
