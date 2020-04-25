class APIHandler {
  constructor(baseUrl) {
    // this.BASE_URL = baseUrl;
    // "http://localhost:8000"
    this.service = axios.create({
      baseURL: baseUrl,
    });
  }
  getFullList() {
    return this.service.get("/characters")
    //  this.service
    //    .get("/characters")
    //    .then((result) => {
    //      let characters = result.data;
    //      charcaters.forEach(character => console.log(character));
    //      return result.status(200).json(result);
    //    }).catch((err) => {
    //      console.log(err);
    //    });
  }
  getOneRegister(id) {
    return this.service.get(`/characters/${id}`);
  };
  createOneRegister(character) {
    return this.service.post(`/characters/`, character);
  };
  updateOneRegister(id, character) {
    return this.service.patch(`/characters/${id}`, character);
  };
  deleteOneRegister(id) {
    return this.service.delete(`/characters/${id}`);
  };

}