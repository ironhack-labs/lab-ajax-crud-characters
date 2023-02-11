class APIHandler {
  constructor() {
    this.BASE_URL = "http://localhost:8000";
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList = () => {
    return this.api.get("/characters");
  };

  getOneRegister = (charId) => {
    return this.api.get(`/characters/${charId}`);
  };

  createOneRegister = (newChar) => {
    return this.api.post(`/characters`, newChar);
  };

  updateOneRegister() {}

  deleteOneRegister() {}
}
