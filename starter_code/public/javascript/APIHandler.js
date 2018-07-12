class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(list=>{
        return list;
      })
      .catch(e=>console.log(e.message));
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
        .then((char)=>{
          console.log(`Character ${id} getted`);
          return char;
        })
        .catch(e=>console.log(e.message));
  }

  createOneRegister (obj) {
    return axios.post(`${this.BASE_URL}/characters`, obj)
          .then(char=>{
            console.log(`Obj ${obj} created`);
            return char;
          })
          .catch(e=>console.log(e.message));
  }

  updateOneRegister (obj, id) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, obj)
          .then(char=>{
            console.log(`Character ${id} updated`);
            return char;
          })
          .catch(()=> {throw new Error("Character doesn't exist")});
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
          .then(()=>{
            console.log(`Character ${id} deleted`);
          })
          .catch(e=>console.log(e.message));
  }
}
