class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data)
      }
  )}

  getOneRegister(id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response.data)  
    })
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
    const characterInfo = {
      name: $("#new-character-form input[name*='name']" ).val(),
      occupation : $("#new-character-form input[name*='occupation']" ).val(),
      weapon : $("#new-character-form input[name*='weapon']").val(),
      cartoon : $("#new-character-form input[name*='cartoon']").is(':checked'),
    }
    .post(`${this.BASE_URL}/characters`,characterInfo)
    .then(response => {
      const {name,occupation,weapon,cartoon} = response.data;
      console.log(response.data)  
    }) 
  }

//   updateOneRegister() {}

//   deleteOneRegister() {}
}
