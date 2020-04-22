class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
    // print list
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const characterObject = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon,
    };
    return axios.post(`${this.BASE_URL}/characters`, characterObject);
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    const characterObject = {};
    if (name) characterObject.name = name;
    if (occupation) characterObject.occupation = occupation;
    if (weapon) characterObject.weapon = weapon;
    characterObject.cartoon = cartoon;
    return axios.patch(`${this.BASE_URL}/characters/${id}`, characterObject);
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
