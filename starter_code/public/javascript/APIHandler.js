class APIHandler {
  constructor (baseUrl) {

    // What does "this" refer to?
    this.axios = axios.create({baseURL: baseUrl});
  }

  
  // How is this handling the error? Still working through the Promise syntax.
  errorHandler(err) {
    console.error(err);
    return Promise.reject(err);
  }

  getFullList() {
    // axios.get('/characters')
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.error(err)
    // });


    // Can we do a line-by-line review of what's
    // going on here?
    return this.axios
    .get("")
    .then(response => response.data)
    .catch(this.errorHandler);
  }

  getOneRegister (id) {
    // axios.get('/characters/:id')
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.error(err)
    // });

    return this.axios
    .get(id)
    .then(response => response.data)
    .catch(this.errorHandler);
  }

  createOneRegister (data) {
    // axios.post('/characters')
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.error(err)
    // });

    return this.axios
    .post("", data)
    .then(response => response.data)
    .catch(this.errorHandler);
  }

  updateOneRegister (data) {
    
    // Does it matter whether we use "PUT" or "PATCH" here?
    // axios.put('/characters/:id')
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.error(err)
    // });

    return this.axios
    .put(data.id, data)
    .then(respond => response.data)
    .catch(this.errorHandler);
  }

  deleteOneRegister (id) {
    // axios.delete('/characters/:id')
    // .then(response => {
    //   console.log(response.data)
    // })
    // .catch(err => {
    //   console.error(err)
    // });
    return this.axios
    .delete(id)
    .then(response => response.data)
    .catch(this.errorHandler);
  }
}
