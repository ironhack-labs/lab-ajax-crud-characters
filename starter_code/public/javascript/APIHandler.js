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

  getOneRegister() {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        dataType: 'json',
        url: `${this.BASE_URL}/characters/:id`,
        success: (data) => {
          resolve(data);
        }
      });
    });
  }

  createOneRegister() {
    const characterInfo = {
      name: $('create-name').val(),
      occupation: $('create-occupation').val(),
      weapon: $('create-weapon').val(),
      debt: $('create-debt').val()
    };

    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'POST',
        url: `${this.BASE_URL}/characters`,
        data: characterInfo,
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

  deleteOneRegister() {

  }
}
