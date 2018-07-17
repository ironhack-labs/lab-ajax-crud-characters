class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.characterInfo = axios.create({
      baseURL: baseUrl    
    });
}

  getFullList () {
    this.characterInfo.get('/characters') //
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  getOneRegister (id) {
    this.characterInfo.get('characters/'+ id)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  createOneRegister (characterInfo) {
    this.characterInfo.post('/characters',characterInfo)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  updateOneRegister (characterInfo, id) {
    this.characterInfo.put('/characters/'+id,characterInfo) //patch no sirvió.
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  deleteOneRegister (id) {
    this.characterInfo.delete('/characters/'+id)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
