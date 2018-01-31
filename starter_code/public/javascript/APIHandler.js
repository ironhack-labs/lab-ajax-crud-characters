class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return $.ajax({
      url: $.get(`${this.BASE_URL}/characters`)
    }).catch(err => {
      console.log('Error')
    })
  };



  getOneRegister(id) {
    return $.ajax({
      url: $.get(`${this.BASE_URL}/characters/` + id)
    })
  }



  createOneRegister(data) {
    return $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters`,
      data: data
    })
  }



  updateOneRegister(data, id) {
    return $.ajax({
      method: "PATCH",
      data: data,
      url: `${this.BASE_URL}/characters/` + id
    })

  }



  deleteOneRegister(id) {
    return $.ajax({
      method: "DELETE",
      url: `${this.BASE_URL}/characters/` + id
    })

  }

}

