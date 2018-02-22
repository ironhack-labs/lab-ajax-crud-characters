class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //return full character list
  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(response)
      response.data.forEach(oneChar)=>{
        const myHTML = ${`
        <div class="character-info">
          <div class="name">${oncChar.name}</div>
          <div class="occupation">${oncChar.occupation}</div>
          <div class="debt">${oncChar.debt}</div>
          <div class="weapon">${oncChar.weapon}</div>
        </div>
        
        `}
        ${".characters-container"}.append(myHTML);
      }
    })
    .catch()
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log("response:" response);
      const singleChar = ${`
      <div class="character-info">
        <div class="name">${response.data.name}</div>
        <div class="occupation">${response.data.occupation}</div>
        <div class="debt">${response.data.debt}</div>
        <div class="weapon">${response.data.weapon}</div>
      </div>
      `}
      ${".characters-container"}.append(myHTML)
    })
    .catch()
    }
  

  createOneRegister (data) {
    axios.post(`${this.BASE_URL}/characters/`, data)
    .then(res=> {
      console.log(res.data);
    })
    .catch (
      err =>{
        throw err;
      }
    );
  }

  updateOneRegister (id, data) {
    axios.patch(this.BASE_URL+"/characters"+id)
    .then()
    .catch()
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+"/characers"+id)
    .then()
    .catch()
  }
}
