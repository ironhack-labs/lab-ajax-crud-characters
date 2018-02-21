class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.characterAPI=axios.create({
      baseUrl:this.BASE_URL
    })
  }

      //console.log("getFullList");
      return axios.get(this.BASE_URL)
      .then(r=>{
        //console.log(r);
        //console.log(r.data);
        return r.data;
      });
    }
  
    getOneRegister (id) {
      //console.log("getOneRegister");
      return axios.get(this.BASE_URL+id)
      .then(r=>{
        //console.log(r);
        //console.log(r.data);
        return r.data;
      });
    }
  
    createOneRegister () {
      //console.log("createOneRegister");
      return axios.post(this.BASE_URL, element)
      .then(r=>{
        //console.log(r);
        //console.log(r.data);
        //console.log(r.statusText);
        return r.data;
      });
    }
  
    updateOneRegister () {
      return axios.put(this.BASE_URL+id, update)
      .then(r=>{
       // console.log(r);
        //console.log(r.statusText);
        return r.data;
      });
    }
  
    deleteOneRegister (id) {
      return axios.delete(this.BASE_URL+id)
      .then(r=>{
        //console.log(r);
        //console.log(r.statusText);
        return r.data;
      });
    }
  