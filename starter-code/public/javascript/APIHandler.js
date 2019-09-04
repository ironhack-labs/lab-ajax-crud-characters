class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList(url){
    // Get all the characters info from http://localhost:8000/characters
    return this.handler.get(url);
  }

  getOneRegister(id) {
    // Get a single character info from http://localhost:8000/characters/:id
    return this.handler.get(`/characters/${id}`);    
  }

  createOneRegister( name, occupation, cartoon, weapon ) { // OR (data)
    // Create a single character posting the data to http://localhost:8000/characters
    return this.handler.post("/characters",{name, occupation, cartoon, weapon}); // instead of the object just data
  }

  updateOneRegister(data, id) {
    // Edit a single character through his id in http://localhost:8000/characters/:id
    return this.handler.patch(`/characters/${id}`, {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      cartoon: data.cartoon
    });
  }

  deleteOneRegister(id) {
    // Delete a single character through his id in http://localhost:8000/characters/:id
    return this.handler.delete(`/characters/${id}`);
  }
}



