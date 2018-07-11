class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(
      this.BASE_URL
    )
    .then(function(data) {
      console.log(data)
  
      return data
    });
};
  

  getOneRegister (id) {
    return axios
    .get (
      this.BASE_URL
    )
    .then(function(data) {
      console.log(data)
      return data
    });
};

  
 
  
  
  

// createOneRegister () {
// return this.axios.post('', characterInfo)
// //   }

//   updateOneRegister () {

//   }

deleteOneRegister (id) {
    return axios
    .delete (
      `${this.BASE_URL}/${id}`
    )
    .then(function(data) {
      console.log(data)
      return data
    });
  };
}
