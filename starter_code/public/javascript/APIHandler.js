class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (cb) {
    this._callAjax("/characters", "GET", cb);
  }

  getOneRegister (id, cb) {
    this._callAjax("/characters/"+id, "GET", cb);
  }

  createOneRegister (newCharacter, cb) {
    this._callAjax("/characters", "POST", cb, newCharacter);
  }

  updateOneRegister (id, updateCharacter, cb) {
    this._callAjax("/characters/"+id, "PUT", cb,  updateCharacter);
  }

  deleteOneRegister (id, cb) {
     this._callAjax("/characters/"+id, "DELETE", cb);
  }


  _callAjax(url, method, cb, data) {
    $.ajax({
      url: this.BASE_URL+url,
      method: method,
      data: data ,
      success: function (response) {
        cb(response);
      },
      error: function (err) {
        cb({error:err});
      },
    })
  }
}
