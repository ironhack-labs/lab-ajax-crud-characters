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
    console.log(updateInfo, "hello!!")
  }

  deleteOneRegister(ID) {
    axios.delete(`${this.BASE_URL}/characters/${ID}`)
  }
}
