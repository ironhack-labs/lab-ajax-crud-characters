class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'GET',
    });
  }

  getOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      dataType: 'JSON',
      method: 'GET',
    });
  }

  createOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      data: { name: string, occupation: string, debt: boolean, weapon: string },
      dataType: 'JSON',
      method: 'POST',
      success: showRegisterSuccess,
      error: showRegisterError
    });
  }

  updateOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      data: { name: string, occupation: string, debt: boolean, weapon: string },
      dataType: 'JSON', text,
      method: 'PATCH',
      success: showUpdateSuccess,
      error: showUpdateError
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      dataType: text,
      method: 'DELETE',
      success: showDeleteSuccess,
      error: showDeleteError
    });
  }
}

function showRegisterSuccess (postSuccess) {
  console.log({});
  console.log(postSuccess);
}
function showRegisterError (postError) {
  console.log("Wrong fields");
  console.log(postError);
}

function showUpdateSuccess (postSuccess) {
  console.log({});
  console.log(postSuccess);
}
function showUpdateError (postError) {
  console.log("Character not found");
  console.log(postError);
}

function showDeleteSuccess (postSuccess) {
  console.log("Character has been successfully deleted");
  console.log(postSuccess);
}

function showDeleteError (postError) {
  console.log("Character not found");
  console.log(postError);
}
