class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(" http://localhost:8000/characters")
  }

  getOneRegister(id) {
    const i =id;
   return axios.get(`http://localhost:8000/characters?id=${i}`)
  }

  createOneRegister(char) {
    document.getElementById("character-form").onsubmit = function () {
      event.preventDefault();
      console.log(char);

    
  
      axios.post("http://localhost:8000/characters", char)
        .then(response => {
          console.log('post success');
          console.log(response)
        })
        .catch(error => {
          console.log('Oh No! Error!');
          console.log(error)
        })

    }
  }

  updateOneRegister(char,id) {
    document.getElementById("edit-character-form").onsubmit = function () {
      event.preventDefault();

      axios.patch(`http://localhost:8000/characters/${id}`, char)
        .then(response => {
          console.log("Update SUCCESS!")
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  deleteOneRegister(id) {
    axios.delete(`http://localhost:8000/characters?id=${id}`)
  }
}