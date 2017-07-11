class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Requests to API
  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: 'GET',
      dataType: 'json',
    });
  }

  getOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'GET',
      dataType: 'json'
    });
  }

  createOneRegister(obj, err) {
    if (err){
      console.log('err',err);
      return 'Error. Cannot create new char';
    }
    else
      return $.ajax({
        url: `${this.BASE_URL}/characters/`,
        method: 'POST',
        dataType: 'json',
        data: obj
      });
  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
