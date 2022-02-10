class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then((results) => results.data);
  }

  getOneRegister(toSearch) {
    return axios
      .get(this.BASE_URL + "/characters/" + toSearch)
      .then((results) => results.data);
  }

  createOneRegister(information) {
    axios.post(this.BASE_URL + "/characters", information).then((results) => {
      console.log("created this guy ", results);
    });
  }

  updateOneRegister(information) {
    let { id, name, occupation, weapon, cartoon } = information;
    axios
      .patch(this.BASE_URL + "/characters/" + id, {
        name,
        occupation,
        weapon,
        cartoon,
      })
      .then((results) => {
        console.log("updated to this: ", results);
      });
  }

  deleteOneRegister(toDelete) {
    axios.delete(this.BASE_URL + "/characters/" + toDelete).then((results) => {
      console.log(results);
    });
  }
}
