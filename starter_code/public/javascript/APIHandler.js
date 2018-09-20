class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
      axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        response.data.forEach(e => {
          allData(e.name, e.occupation, e.weapon, e.cartoon);
        });
        console.log(response.data);
      });
  }

  getOneRegister(charID) {
      axios.get(`${this.BASE_URL}/characters/${charID}`)
      .then(response => {
        allData(response.data.name, response.data.occupation, response.data.weapon, response.data.cartoon)
        console.log(response.data);
      });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    axios.post(`${this.BASE_URL}/characters`, newChar)
    .then( () => {
      this.getFullList();
    })
    console.log(newChar)
  }

  updateOneRegister(ID, name, occupation, weapon, cartoon) {
    const updateInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    axios.patch(`${this.BASE_URL}/characters/${ID}`, updateInfo)
    .then( () => {
      this.getFullList();
    })
  }

  deleteOneRegister(ID) {
    axios.delete(`${this.BASE_URL}/characters/${ID}`)
    .then( () => {
    this.getFullList();
  })
  }
}
