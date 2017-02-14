/* jshint esversion: 6 */

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (callback) {
    this.ajaxCall('/characters', 'get', null, callback);
  }

  getOneRegister (id, callback) {
    this.ajaxCall('/characters/' + id, 'get', null, callback);
  }

  createOneRegister (characterObj, callback) {
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
    this.ajaxCall('/characters', 'post', characterObj, callback);
    return wrongFields;
  }

  updateOneRegister (id, characterInfo, callback) {
    this.ajaxCall("/characters/" + id, "PUT", characterInfo, callback);
  }

  deleteOneRegister (id, callback) {
    this.ajaxCall("/characters/" + id, "DELETE", null, callback);
  }

  ajaxCall(url, method, data, callback){
    $.ajax({
        url: this.BASE_URL + url,
        method,
        data: "In case we need to send data**",
        success: callback,
        error: function (err){
          console.log(err);
        }
    });
  }
}
