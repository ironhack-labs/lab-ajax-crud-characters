class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList(cb) {
    $.ajax({
      url: `${this.BASE_URL}`,
      method: 'GET',
      success(response) {
        cb(response);
      },
      error(err) {
        cb({ error: err });
      },
    });
  }

  getOneRegister(charId, cb) {
    $.ajax({
      url: `${this.BASE_URL}/${charId}`,
      method: 'GET',
      success(response) {
        cb(response);
      },
      error(err) {
        cb({ error: err });
      },
    });
  }

  createOneRegister(char, cb) {
    /*    const characterInfo = {
          name: 'WALL-E',
          occupation: 'Waste Allocation Robot',
          weapon: 'Head laser',
        };*/
    $.ajax({
      url: `${this.BASE_URL}`,
      method: 'POST',
      data: char,
      success(response) {
        cb(response);
      },
      error(err) {
        cb({ error: err });
      },
    });
  }

  updateOneRegister(charId, char, cb) {
    $.ajax({
      method: 'PATCH',
      url: `${this.BASE_URL}/${charId}`,
      data: char,
      success(response) {
        cb(response);
      },
      error(err) {
        cb({ error: err });
      },
    });
  }

  deleteOneRegister(charId, cb) {
    $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/${charId}`,
      success(response) {
        cb(response);
      },
      error(err) {
        cb({ error: err });
      },
    });
  }
}

function showFeedback(postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError(err) {
  console.log('Oh no! Error:');
  console.log(err);
}