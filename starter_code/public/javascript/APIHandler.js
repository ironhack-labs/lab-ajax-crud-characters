class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return $.ajax({
      url: $.get(`${this.BASE_URL}characters`)
    }).catch(err => {
      console.log('Error')
    })
  };



  getOneRegister(id) {
    return $.ajax({
      url: $.get(`${this.BASE_URL}characters/` + id)
    })
  }



  createOneRegister(data) {
    return $.ajax({
      url: `${this.BASE_URL}characters`,
      method: "POST",
      data: data
    })
  }



  updateOneRegister(data, id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/` + id,
      method: "PATCH",
      data: data,
    })
  }



  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/` + id,
      method: "DELETE"
    })
  }

}

