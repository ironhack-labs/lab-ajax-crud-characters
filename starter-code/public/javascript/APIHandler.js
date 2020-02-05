class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList(url){
    return this.handler.get(url);
  }

  getOneRegister (id) {
    return this.handler.get(`/characters/${id}`);   
  }



  createOneRegister (name, occupation, cartoon, weapon) {
   return this.handler.post("/characters", {name, occupation, cartoon, weapon});
  }


  deleteOneRegister (id) {
    return this.handler.delete(`/characters/${id}`);
   }



  updateOneRegister (id, data) {
    return this.handler.patch(`/characters/${id}`, 
    {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      cartoon: data.cartoon
    })
  }
}



 




  

