class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(todos => {
        return todos.data;
      })
      .catch(error => {
        return error;
      });
  }

  getOneRegister() {
    let id = document.querySelector(".numero").value
      return axios
      
      .get(`http://localhost:8000/characters/${id}`)
      .then(uno => {
        return uno.data;
      })
      .catch(error => {
        return error;
      });
     
  }

  createOneRegister() {

    const characterInfo = {
      name: name[0].value,
      occupation: occupation[0].value,
      weapon: weapon.value,
      cartoon: cartoon.value   
    }

    return axios 
    .post(`http://localhost:8000/characters`, characterInfo)
    .then(uno => {
      console.log(uno.data)
      return uno.data;
    })
    .catch(error => {
      return error;
    });
  }

  updateOneRegister() {}

  deleteOneRegister() {
    // let id = document.querySelector(".delete").value
    //   return axios
    //   .(`http://localhost:8000/characters/${id}`)
    //   .then(uno => {
    //     return uno.data;
    //   })
    //   .catch(error => {
    //     return error;
    //   });
  }
}
