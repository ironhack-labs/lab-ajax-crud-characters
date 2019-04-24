class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response =>{
        console.log(response.data)
        document.querySelector('.characters-container').innerHTML = JSON.stringify(response.data)
        //return response

    }).catch(error=>{
        console.log(error)
    })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response =>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  createOneRegister (obje) {
    axios.post(`${this.BASE_URL}/characters`, obje)
    .then(response =>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  updateOneRegister (id, obje) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, obje)
    .then(response =>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response =>{
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }
}
