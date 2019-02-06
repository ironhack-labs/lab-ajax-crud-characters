class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getOneRegister() {
    const id = document.getElementById('fetch-id').value;
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  createOneRegister() {
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const cartoon = document.getElementById('new-cartoon').value;
    const obj = {
      name,
      weapon,
      cartoon,
      occupation
    };
    const button = document.getElementById('delete-one');
    return axios.post(`${this.BASE_URL}/characters`, obj)
      .then((response) => {
        console.log('post successful and the response is: ', response);
        button.css('background-color', 'green');
      })
      .catch((error) => { console.log(error), button.css('background-color', 'red'); });
  }

  updateOneRegister() {
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').value;
    const obj = {
      name,
      weapon,
      cartoon,
      occupation
    };
    return axios.put(`${this.BASE_URL}/characters/${id}`, obj)
      .then(response => console.log('post successful and the response is: ', response))
      .catch(error => console.log(error));
  }

  deleteOneRegister() {
    const id = document.getElementById('delete-id').value;
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }
}
