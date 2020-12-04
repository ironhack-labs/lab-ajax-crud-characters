class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
    .get(this.BASE_URL + '/characters')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getOneRegister(id) {
    axios
    .get(this.BASE_URL + `/characters/${id}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  createOneRegister() {
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    const isCartoon = document.getElementById('cartoon-input').value;

    axios
    .post(this.BASE_URL + '/characters', { name, occupation, weapon, isCartoon })
    .then(() => {
      this.getFullList();
      document.getElementById('new-character-form').reset();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  updateOneRegister(id) {
    const newName = document.getElementById('edit-name-input').value;
    const newOccupation = document.getElementById('edit-occupation-input').value;
    const newWeapon = document.getElementById('edit-weapon-input').value;
    const newIsCartoon = document.getElementById('edit-cartoon-input').value;

    axios
    .put(this.BASE_URL + `/characters/${id}`, { name: newName, occupation: newOccupation, weapon: newWeapon, cartoon: newIsCartoon })
    .then(response => {
      document.getElementById('edit-character-form').reset();
      this.getFullList();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteOneRegister(id) {
    const toDelete = confirm('Are you sure you want to delete this character?');
    if (toDelete) {
    axios
    .delete(this.BASE_URL + `/characters/${id}`)
    .then(response => {
      this.getFullList();
    })
    .catch((err) => {
      console.log(err);
    });
    }
  }
}
