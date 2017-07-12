class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    });
    // return new Promise((resolve, reject) => {
    //   $.ajax({
    //     method: 'GET',
    //     dataType: 'json',
    //     url: `${this.BASE_URL} /characters`,
    //     success: data => {
    //       resolve(data);
    //     }
    //   }).catch(e => {
    //     return [1, 2, 3];
    //   });
    // });
  }

  getOneRegister(id) {
    return $.ajax({
      method: 'GET',
      dataType: 'json',
      url: `${this.BASE_URL}/characters/${id}`
    });
  }

  createOneRegister(e) {
    return $.ajax({
      method: 'POST',
      dataType: 'json',
      url: `${this.BASE_URL}/characters`,
      data: e
    });
  }

  updateOneRegister(id, e) {
    return $.ajax({
      method: 'PATCH',
      dataType: 'json',
      url: `${this.BASE_URL}/characters/${id}`,
      data: e
    });
  }

  deleteOneRegister(id) {
    return $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: `${this.BASE_URL}/characters/${id}`
    });
  }

}
