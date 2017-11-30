class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      method: 'GET',
      url: `${BASE_URL}`
    }).then(allCharacters => {
      return allCharacters;
    }).catch(error => {
      return error;
    });
  }

  getOneRegister (charId) {
    $.ajax({
      method: 'GET',
      url: `${BASE_URL}/${charId}`,
      data: {
        id: charId
      }
    }).then(oneCharacter => {
      return oneCharacter;
    }).catch(error =>{
      return error;
    });
  }

  createOneRegister (charObj) {
    $.ajax({
      method: 'POST',
      url: `${BASE_URL}`,
      data: {
        name: charObj.name,
        occupation: charObj.occupation,
        debt: charObj.debt,
        weapon: charObj.weapon
      }
    }).then(postedChar => {
      return postedChar;
    }).catch(error => {
      return error;
    });
  }

  updateOneRegister (charId, charObj) {
    $.ajax({
      method: 'PUT',
      url: `${BASE_URL}/${charId}`,
      data: {
        id: charId,
        name: charObj.name,
        occupation: charObj.occupation,
        debt: charObj.debt,
        weapon: charObj.weapon
      }
    }).then(oneCharacter => {
      return oneCharacter;
    }).catch(error =>{
      return "character not found.";
    });
  }

  deleteOneRegister (charId) {
    $.ajax({
      method: 'DELETE',
      url: `${BASE_URL}/${charId}`,
      data: {
        id: charId
      }
    }).then(oneCharacter => {
      return "character has been successfully deleted";
    }).catch(error =>{
      return "character not found.";
    });
  }
}
