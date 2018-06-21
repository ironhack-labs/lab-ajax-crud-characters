class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + "/characters")
    .then(response => {
      console.log("response.data in API Handler",response.data);
        for (let i = 0; i < response.data.length; i++) {
          $(".characters-container").append(`
            <div class="character-info ${response.data[i].id}">
            <div class="name">${response.data[i].name}</div>
            <div class="occupation">${response.data[i].occupation}</div>
            <div class="cartoon">${response.data[i].cartoon}</div>
            <div class="weapon">${response.data[i].weapon}</div>
          </div>
            `)
        }
      })
     
  }

  getOneRegister(charId) {
    console.log("chardID in getOneRegister",charId);
    console.log("URL getOneRegister",this.BASE_URL + `/` + `${charId}`)

    // axios.get(this.BASE_URL + `/1`)
    axios.get(this.BASE_URL + `/characters/` + `${charId}`)
    .then(response => {
      console.log("getOneRegister response",response);
      
          $(".characters-container").append(`
            <div class="character-info ${response.data.id}">
            <div class="name">${response.data.name}</div>
            <div class="occupation">${response.data.occupation}</div>
            <div class="cartoon">${response.data.cartoon}</div>
            <div class="weapon">${response.data.weapon}</div>
          </div>
            `)
        
      })
    .catch(error => {
      console.log('Oh No! Error!');  
      console.log(error)
  })
  }

  createOneRegister(charId) {

    const characterInfo = {
        name: $("#new-character-form").find('input[name="name"]').val(),
        occupation: $("#new-character-form").find('input[name="occupation"]').val(),
        weapon: $("#new-character-form").find('input[name="weapon"]').val(),
        cartoon: true
      
    }
    
    axios.post(this.BASE_URL + `/characters/`,characterInfo)
    
    .then(response => {
      console.log('post success');
      console.log(response)
    })
    .catch(error => {
      console.log('Oh No! Error!');  
      console.log(error)
    })
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
