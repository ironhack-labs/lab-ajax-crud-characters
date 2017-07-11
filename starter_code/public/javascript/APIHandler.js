class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: `${this.BASE_URL}/characters`,
        success: (data) => {
          resolve(data);
        }
      });
    });
  }

  getOneRegister(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: `${this.BASE_URL}/characters/` + id,
        success: (data) => {
          resolve(data);
        }
      });
    });
  }

  createOneRegister(char) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'POST',
        url: `${this.BASE_URL}/characters`,
        data: char,
        success: (data) => {
          resolve(data);
        }
      });
    });
  }

  updateOneRegister() {
    const updateInfo = {
      name: $('edit-name').val(),
      occupation: $('edit-occupation').val(),
      weapon: $('edit-weapon').val(),
      debt: $('edit-debt').val()
    };

    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'PATCH',
        url: `${this.BASE_URL}/characters/:id`,
        data: updateInfo,
        success: (patchResponse) => {
          resolve(patchResponse);
        }
      });
    });
  }

  deleteOneRegister(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'DELETE',
        dataType: 'json',
        url: `${this.BASE_URL}/characters/` + id,
        success: (data) => {
          resolve(data);
        }
      });
    });
  }
}
