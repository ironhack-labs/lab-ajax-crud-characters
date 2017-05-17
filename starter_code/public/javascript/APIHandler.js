/* jshint esversion: 6 */

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (callbackSuccess, callbackError) {
    this.ajaxCall('/characters', 'get', null, callbackSuccess, callbackError);
  }

  getOneRegister (id, callbackSuccess, callbackError) {
    this.ajaxCall('/characters/' + id, 'get', null, callbackSuccess, callbackError);
  }

  createOneRegister (characterObj, callbackSuccess, callbackError) {
    // verify that characterObj has all required fields.
    let wrongFields = [];
    if (!characterObj){
      wrongFields.push('all');
      return wrongFields;
    }
    if (!characterObj.name || typeof(characterObj.name) !== 'string')
      wrongFields.push('name');
    if (!characterObj.occupancy || typeof(characterObj.occupancy) !== 'string')
      wrongFields.push('occupancy');
    if (!characterObj.debt || typeof(characterObj.debt) !== 'boolean')
      wrongFields.push('debt');
    if (!characterObj.weapon || typeof(characterObj.weapon) !== 'string')
      wrongFields.push('weapon');
    if (wrongFields.length !== 0) return wrongFields;
    this.ajaxCall('/characters', 'post', characterObj, callbackSuccess, callbackError);
    return wrongFields;
  }

  updateOneRegister (id, characterInfo, callbackSuccess, callbackError) {
    this.ajaxCall("/characters/" + id, "PUT", characterInfo, callbackSuccess, callbackError);
  }

  deleteOneRegister (id, callbackSuccess, callbackError) {
    this.ajaxCall("/characters/" + id, "DELETE", null, callbackSuccess, callbackError);
  }

  ajaxCall(url, method, data, callbackSuccess, callbackError){
    $.ajax({
        url: this.BASE_URL + url,
        method,
        data: "In case we need to send data**",
        success: callbackSuccess,
        error: callbackError
    });
  }
}
