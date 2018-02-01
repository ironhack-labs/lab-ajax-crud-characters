class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return $.get(`${this.BASE_URL}characters`)
    .catch(err => {
      console.log('Error')
    })
  }



  getOneRegister(id) {

    return $.get(`${this.BASE_URL}characters/` + id)
    
    .catch(err => {
      console.log('Error')
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
      url: `${this.BASE_URL}characters/` + id,
      method: "PATCH",
      data: data,
      
    })
    charactersAPI.getFullList()
  }



  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}characters/` + id,
      method: "DELETE"
    })
  }

}

