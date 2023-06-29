class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    // this.api = axios.create({baseUrl: this.baseUrl})
  }

  getFullList() {
    axios
      .get(this.BASE_URL)
      .then((allCharacters) => {
        console.log(allCharacters.data);
        return allCharacters.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getOneRegister(id) {
    if (id.length < 1) {
      return;
    }
    axios
      .get(this.BASE_URL + "/" + id)
      .then((character) => {
        console.log(character.data);
        let { id, name, occupation, weapon, cartoon } = character.data;

        console.log(id, name, occupation, weapon, cartoon);

        document.getElementById("name-field").innerText = name;
        document.getElementById("occupation-field").innerText = occupation;
        document.getElementById("cartoon-field").innerText = cartoon;
        document.getElementById("weapon-field").innerHTML = weapon;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createOneRegister() {
    axios
      .post(this.BASE_URL)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateOneRegister(id) {
    axios
      .put(this.BASE_URL + "/" + id)
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/" + id)
      .then((data) => {
        console.log(`DELETED ITEM FROM DB ${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
