class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (functionDraw) {
    axios.get(`${this.BASE_URL}/characters`)
    .then( res => {
      functionDraw(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  getOneRegister (id, functionDraw) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      functionDraw([res.data]);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  createOneRegister (obj,functionBtn) {
    axios.post(`${this.BASE_URL}/characters`, obj)
    .then(() => {
      functionBtn(false);
    })
    .catch(err => {
      functionBtn(true);
      console.log(err);
    })
  }

  updateOneRegister (id, obj, functionBtn) {
    axios.patch(`${this.BASE_URL}/characters/${id}`,obj)
    .then(() => {
      functionBtn(false);
    })
    .catch(err => {
      functionBtn(true);
      console.log(err);
    })
  }

  deleteOneRegister (id, functionBtn) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => {
      functionBtn(false)
    })
    .catch(err => {
      functionBtn(true)
      console.log(err)
    })
  }
}