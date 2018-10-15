class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL)
    .then(res => {
      console.log('data getFull ' + res.data[0].name);
      return res.data;
    })
    .catch(err => {
      console.log('Error: ' + err);
    })
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  createOneRegister(character) {
    axios.post(this.BASE_URL,character)
    .then(res => {
      console.log('The character has been created');      
    })
    .catch(err => {
      console.log('error ' + err);
    })
  }

  updateOneRegister(character,id) {
    axios.patch(this.BASE_URL+id, character )
      .then(res => {
        console.log(res.name + ' has been updated success');
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + id )
      .then(res => {
        console.log("Element has been deleted success");
      })
      .catch(err => {
        console.log(err)
      })
  }
}
