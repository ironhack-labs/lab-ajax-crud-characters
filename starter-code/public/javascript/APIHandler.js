class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {

    return axios.get(`${this.BASE_URL}/characters`)
      .then(elem => {
        console.log(elem.data);
        return elem;

      })
  }

  getOneRegister(id) {

    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(elem => {
        // console.log(elem.data);
        return elem;

      })
  }


createOneRegister() {

}

updateOneRegister() {

}

deleteOneRegister() {

}
}
