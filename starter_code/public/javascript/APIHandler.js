class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return $.ajax(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (data) {
    return $.ajax({
      method: 'post',
      data: data,
      url:`${this.BASE_URL}/characters`
    })
  }

  updateOneRegister (id, data) {
    console.log(id)
    return $.ajax({
      method: 'put',
      data: data,
      url:`${this.BASE_URL}/characters/${id}`
    })
  }

  deleteOneRegister (id) {
    return $.ajax({
      method: 'delete',
      url:`${this.BASE_URL}/characters/${id}`
    })
  }
}
