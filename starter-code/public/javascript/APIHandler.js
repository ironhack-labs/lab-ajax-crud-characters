class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(res => {
     console.log(res.data);
     
    })
    .catch(err => {
     console.log(err);
    })
    
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/` + id)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  createOneRegister (characterInfo) {
    axios.post(this.BASE_URL + '/characters/', characterInfo)
    .then(res=> {
      
      console.log("You just created this character:", res.data);
    })
    .catch(err => {
      console.log("Error creating character", err);
    })
  }

  updateOneRegister (id, updatedCharacter) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
    .then(res => {
      console.log("update successful:", res);
      document.getElementById("edit-character-form").reset();
    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/` + id)
    .then(res => {
      console.log("Character successfully deleted");
    })
    .catch(err => {
      console.log(err);
    })
  }
}
