class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
  }

  callToAPI (url, method, callback, error, data) {
    url = `${this.BASE_URL}${url}`
    $.ajax({
      method: method,
      url: url,
      data: data,
      success: callback,
      error: error,
      datatype: 'json'
    })
  }

  getFullList (callback) {
    let url = `/characters`
    this.callToAPI(url, 'GET', callback)
  }

  getOneRegister (id, callback) {
    let url = `/characters/${id}`
    this.callToAPI(url, 'GET', callback)
  }

  createOneRegister (data, callback, error) {
    let url = `/characters`
    this.callToAPI(url, 'POST', callback, error, data)
  }

  updateOneRegister (id, data, callback, error) {
    let url = `/characters/${id}`
    this.callToAPI(url, 'PUT', callback, error, data)
  }

  deleteOneRegister (id, callback, error) {
    let url = `/characters/${id}`
    this.callToAPI(url, 'DELETE', callback, error)
  }
}
