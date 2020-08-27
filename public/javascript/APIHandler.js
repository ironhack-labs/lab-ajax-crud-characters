class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(() => {
      
    })
    .catch(err => console.error(err));
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {

      document.getElementById('edit-id').value = res.data.id;
      document.getElementById('edit-name').value = res.data.name;
      document.getElementById('edit-occupation').value = res.data.occupation;
      document.getElementById('edit-weapon').value = res.data.weapon;
      document.getElementById('edit-cartoon').checked = res.data.cartoon;

    })
    .catch(err => console.error(err));
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    axios.post(`${this.BASE_URL}/characters`, {
      name,
      occupation,
      weapon,
      cartoon
    })
    .then(what => {
      console.log(what);
    })
    .catch(err => console.error(err))
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {
      name, 
      occupation, 
      weapon, 
      cartoon
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => console.log(`deleted ${id}`))
    .catch(err => console.log(err))
  }
}
