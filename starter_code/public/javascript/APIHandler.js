class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

    function showFeedback(postResponse) {
      console.log('post success');
      console.log(postResponse);
    }

    function handleError(err) {
      console.log('Oh no! Error:');
      console.log(err);
    }
  }
}


getFullList() {
  $.ajax({
    url: "http://ih-crud-api.herokuapp.com/characters",
    method: "GET",
    success: showFeedback
  });
}

getOneRegister(id) {
  $.ajax({
    url: "http://ih-crud-api.herokuapp.com/characters/:" + id,
    method: "GET",
    success: showFeedback
  });
}

createOneRegister(id) {
  const characterInfo = {

    "name": string,
    "occupation": string,
    "debt": boolean,
    "weapon": string,
  };

  $.ajax({
    method: 'POST',
    url: 'http://ih-crud-api.herokuapp.com/characters/:id',
    data: characterInfo,
    success: showFeedback,
    error: handleError
  });
}



updateOneRegister() {

  const updateInfo = {
    name: $('name').val(),
    occupation: $('occupation').val(),
    weapon: $('weapon').val(),
    debt: $('debt').val()
  };

  const charId = $('id').val();

  $.ajax({
    method: 'PATCH',
    url: "https://ih-crud-api.herokuapp.com/characters/${charId}",
    data: updateInfo,
    success: showFeedback,
    error: handleError
  });
}

deleteOneRegister() {
  $.ajax({
    url: 'http://ih-crud-api.herokuapp.com/characters/:id',
    type: 'DELETE',
    success: showFeedback
  });
}
