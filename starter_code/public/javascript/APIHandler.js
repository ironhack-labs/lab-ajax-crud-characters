class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL,
      method: 'GET',
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  getOneRegister () {
    let id = $('#char-id').val();
    $('#char-id').val('');
    this.BASE_URL = this.BASE_URL + '/' + id;
    console.log(this.BASE_URL);
    $.ajax({
      url: this.BASE_URL,
      method: 'GET',
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  createOneRegister () {
    const createChar = {
      name: $('#newName').val(),
      occupation: $('#newOcc').val(),
      debt: $('#isDebt').is(':checked') ? true : false, //Comprobar esto
      weapon: $('#newWeapon').val(),
    };
    $('#newName').val('');
    $('#newOcc').val('');
    $('#newWeapon').val('');
    $.ajax({
      url: this.BASE_URL,
      method: 'POST',
      data: createChar,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Este método hay que repasarlo, no actualiza como debiera
  updateOneRegister () {
    let id = $('#editID').val();
    this.BASE_URL = this.BASE_URL + '/' + id;
    const editChar = {
      name: $('#rename').val(),
      occupation: $('#reocc').val(),
      debt: $('#recheck').is(':checked') ? true : false, //Comprobar esto
      weapon: $('#reweapon').val(),
    };
    $('#editID').val('');
    $('#rename').val('');
    $('#reocc').val('');
    $('#reweapon').val('');
    $.ajax({
      url: this.BASE_URL,
      method: 'PATCH',
      data: editChar,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteOneRegister () {
    let id = $('#charDel').val();
    $('#charDel').val('');
    this.BASE_URL = this.BASE_URL + '/' + id;
    console.log(this.BASE_URL);
    $.ajax({
      url: this.BASE_URL,
      method: 'DELETE',
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
