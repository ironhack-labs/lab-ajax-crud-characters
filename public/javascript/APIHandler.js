

class APIHandler {
    constructor (){
      this.api = axios.create ({
      baseURL : "http://localhost:8000"
    })
  }
  getFullList = () => {
    return this.api.get("/characters");
  };

  getOneRegister = (registerId) => {
   return this.api.get('/register/${registerId}');
  };

  createOneRegister = (registerInfo) => {
    return this.api.post('/register',registerInfo);
  };

  updateOneRegister = (registerId) => {
    return this.api.update('/registerId/${registerId}', registerInfo);

  };

  deleteOneRegister = (registerId) => {
    return this.api.delete('/registerId/${registerId}', registerInfo)
  }
  

}
