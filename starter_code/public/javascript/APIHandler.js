class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`http://localhost:8000/characters`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getOneRegister() {
    axios.get(`http://localhost:8000/characters/` + $('#fetchOne').val())
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  createOneRegister() {
    axios.post(`http://localhost:8000/characters/`, {
      "name": $('#name').val(),
      "occupation": $('#occupation').val(),
      "debt": $('#debt').val(),
      "weapon": $('#weapon').val(),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateOneRegister() {
    console.log('yolo');
    axios.put(`http://localhost:8000/characters/` + $('#chr-id').val(), {
      "name": $('#nameuor').val(),
      "occupation": $('#occupationuor').val(),
      "debt": $('#debtuor').val(),
      "weapon": $('#weaponuor').val()
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteOneRegister() {
    axios.delete(`http://localhost:8000/characters/` + $('#deleteOne').val())
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}