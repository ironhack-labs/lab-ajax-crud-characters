class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL+"/characters")
    .then(res=>{
      return res.data;
    })
    .catch(e=>console.log(e));
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res=>{
      return res.data;
    })
    .catch(e=>console.log(e));
  }

  createOneRegister (name,occupation,weapon,cartoon) {
    const postData={
      name:name,
      occupation:occupation,
      weapon:weapon,
      cartoon:cartoon
    }
    return axios.post(this.BASE_URL+"/characters",postData)
    .then(res=>{
      return res.data;
    })
    .catch(e=>console.log(e));
  }
    
  updateOneRegister (id, name, occupation, weapon, cartoon) {
    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    return axios.patch(`${this.BASE_URL}/characters/${id}`, characterInfo)
    .then(res=>{
      return res.data;
    })
    .catch(e=>console.log(e));
  }
  

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res=>{
      return res.data;
    })
    .catch(e=>console.log(e));
  }

}

