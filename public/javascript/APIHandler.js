class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        const data = response.data;
        let str = '';
        data.forEach(character => {
          str += `
            <li class="list-group-item">
                <h5>id: ${character.id}</h5>
                <h5>occupation: ${character.occupation}</h5>
                <h5>is a cartoon: ${character.cartoon}</h5>
                <h5>weapon: ${character.weapon}</h5>
            </li>
`
        })
        document.getElementById('characters-list').innerHTML = str;
      })
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        const data = response.data;
        let str = `
      <li class="list-group-item">
          <h5>id: ${data.id}</h5>
          <h5>occupation: ${data.occupation}</h5>
          <h5>is a cartoon: ${data.cartoon}</h5>
          <h5>weapon: ${data.weapon}</h5>
      </li>`;
        document.getElementById('characters-list').innerHTML = str;

      })
      .cath(err => console.log(err));
  }

  createOneRegister(character) {
    axios.post(this.BASE_URL, character)
      .then(response => {
        this.getFullList();
        return response;
      })
      .catch(err => console.log(err));
  }

  updateOneRegister(id, character) {
    axios.put(`${this.BASE_URL}/${id}`, character)
      .then(response => {
        this.getFullList();
        return response;
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister() {
    axios.delete(`${this.BASE_URL}/${id}`)
      .then(response => {
        alert('Character was deleted successfully')
        return response;
      })
      .catch(err => alert('Character not found'));
  }
}
