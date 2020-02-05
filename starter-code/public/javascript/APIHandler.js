class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL});
  }
  
  getFullList () {
     return this.api.get("/characters");
  }

  getOneRegister(cid) {
     return this.api.get("/characters/"+cid);
  }

  createOneRegister (newElement) {
     return this.api.post("/characters", 
        newElement
     );
  }

  updateOneRegister (newElement) {
     return this.api.patch("/characters/"+newElement.id , newElement );
  }

  deleteOneRegister (cid) {
     return this.api.delete("/characters/"+cid);
  }
}

export default APIHandler;