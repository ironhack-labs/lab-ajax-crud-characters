class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get("/characters")
  .then(data => {
    console.log(data)
  }) 
  .catch(err => {
    console.log(err)
  })

  }

  getOneRegister () {
    axios.get("/characters/:id")
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })

  }

  createOneRegister () {
  axios.post("/characters", {
    name: "string",
    occupation: "string",
    cartoon: "string",
    weapon: "string"
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


  }

  updateOneRegister () {
    axios.put("/characters/:id", {
    name: "string",
    occupation: "string",
    cartoon: "string",
    weapon: "string"
      
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })


  }

  deleteOneRegister () {
    axios.delete("/characters/:id")
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })


  }
}
