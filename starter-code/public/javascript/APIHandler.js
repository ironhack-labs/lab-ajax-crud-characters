class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {  
    let {data}=await axios.get(`${this.BASE_URL}/characters`)
    return data;
    
  }


  async getOneRegister (id) {
    if(id<=0){
      return 0
    }else{
    let {data}=await axios.get(`${this.BASE_URL}/characters/${id}`)
    return data;
    }
  }

  createOneRegister (obj) {
    console.log(obj)
    axios.post(`${this.BASE_URL}/characters`, {
        id: obj.id,
        name: obj.name,
        occupation: obj.occupation,
        weapon: obj.weapon,
        cartoon: obj.cartoon
    })
  }

  updateOneRegister (obj) {
    axios.put(`${this.BASE_URL}/characters/${onj.id}` , {
      id: obj.id,
      name: obj.name,
      occupation: obj.occupation,
      weapon: obj.weapon,
      cartoon: obj.cartoon
  })
  }

  deleteOneRegister (id) {
    if(id<=0){
      return 0
    }else{
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    }
  }
}