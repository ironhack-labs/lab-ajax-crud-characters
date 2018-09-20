class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL+"/characters");
  }

  getOneRegister () {
    axios.get(this.BASE_URL+"/characters/:id")
    .then (res =>{
      //console.log("post success");
      console.log(res.data);
    })
    //.catch(error =>{
    //  console.log("Error!");
    //  console.log(error);
    //});
  }

  createOneRegister () {
    return axios.post(this.BASE_URL+"/characters");
  }

  updateOneRegister () {
    return axios.put('http://localhost:8000/characters');
  }

  deleteOneRegister () {
    return axios.delete('http://localhost:8000/characters');
  }
}
