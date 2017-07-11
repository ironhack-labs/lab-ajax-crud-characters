class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
  return  $.ajax({
      method: 'GET',
      dataType: 'json',
      url:  `${this.BASE_URL}/characters`,
    });
  }

  getOneRegister (id) {
    return  $.ajax({
        method: 'GET',
        dataType: 'json',
        url:  `${this.BASE_URL}/characters/${id}`,
      });
  }

  createOneRegister (name,occupation,weapon,hasdeb) {
    const data = {
      name,
      occupation,
      weapon,
      hasdeb};
    return  $.ajax({
        method: 'POST',
        dataType: 'json',
        url:  `${this.BASE_URL}/characters`,
        data: data
      });
  }

  updateOneRegister (id,name,occupation,weapon,hasdeb) {
    const data = {
      name,
      occupation,
      weapon,
      hasdeb
    };
    return  $.ajax({
        method: 'PUT',
        dataType: 'json',
        url:  `${this.BASE_URL}/characters/${id}`,
        data: data
      });
  }

  deleteOneRegister (id) {
    return  $.ajax({
        method: 'DELETE',
        dataType: 'json',
        url:  `${this.BASE_URL}/characters/${id}`,
      });
  }
}
