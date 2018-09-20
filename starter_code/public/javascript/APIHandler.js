class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(chars => {
        for (let i = 0; i < chars.data.length; i++) {
          pushToContainer(chars.data[i].name, chars.data[i].occupation, chars.data[i].weapon, chars.data[1].cartoon)
        }
        console.log(chars.data.length);
      })
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}/`)
      .then(res => {
        console.log(res.data);
      })
  }

  createOneRegister(newChar) {
    axios.post(`${this.BASE_URL}/characters`, newChar)
    console.log(newChar, 'ajsdjhahjashj');
  }

  updateOneRegister(id, charUpdate) {
    axios.put(`${this.BASE_URL}/characters/${id}/`, charUpdate)
      .then(res => console.log(res.data))
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}/`)
      .then(res => console.log('succesfull delete!'))
  }
}
