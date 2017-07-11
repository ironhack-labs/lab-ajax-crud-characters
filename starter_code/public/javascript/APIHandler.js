class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "GET",
      type: "json"
    });
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
        data: evento
      });
    }

    updateOneRegister(id, e) {
      return $.ajax({
        method: 'PATCH',
        dataType: 'json',
        url: `${this.BASE_URL}/characters/${id}`,
        data: evento
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
