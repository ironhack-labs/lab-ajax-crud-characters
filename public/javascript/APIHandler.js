class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    // this.api = axios.create({
    //   baseUrl: "/api/db.json",
    // });
  }

  getFullList = () => {
    return this.BASE_URL.get("/characters");
  };

  getOneRegister = (registerId) => {
    return this.BASE_URL.get(`/characters/${registerId}`);
  };

  createOneRegister = (registerInfo) => {
    return this.BASE_URL.post(`/characters`, registerInfo);
  };

  updateOneRegister = (registerId, registerInfo) => {
    return this.BASE_URL.put(`/characters/${registerId}`, registerInfo)
  }

  deleteOneRegister = (registerId) =>  {
    return this.BASE_URL.delete(`/characters/${registerId}`)
  }
}

//module.exports = APIHandler;
