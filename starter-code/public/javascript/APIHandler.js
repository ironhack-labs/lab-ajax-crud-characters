class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = 'http://localhost:8000';
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(res => res)
      .catch(err => console.log(err));
  }

  createOneRegister() {
    return axios.post(`${this.BASE_URL}/characters`)
      .then(res => res)
      .catch(err => console.log(err));
  }

  updateOneRegister(id) {
    const char = {
      id: document.querySelector('#edit-character-form #chr-id').value,
      name: document.querySelector('#edit-character-form #name').value,
      occupation: document.querySelector('#edit-character-form #occupation').value,
      weapon: document.querySelector('#edit-character-form #weapon').value,
      cartoon: document.querySelector('#edit-character-form #cartoon').checked,
    };
    console.log(char);
    const charId = document.querySelector('#character-id-edit').value;
    return axios.put(`${this.BASE_URL}/characters/${id}`, char)
      .then(res => res)
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(res => res)
      .catch(err => console.log(err));
  }
}
