

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+"characters")
    .then(response => {
      var arrChar = response.data;
      var content = ''
      arrChar.forEach(char => { 
        console.log(char)
      content += `
      <div class="character-info">
        <div class="name">Name: ${char.name}</div>
        <div class="occupation">Occupation: ${char.occupation}</div>
        <div class="debt">Debt: ${char.debt}</div>
        <div class="weapon">Weapon: ${char.weapon}</div>
        <div class="id">Id: ${char.id}</div>
      </div>`
      });
      
      $('.characters-container').append(content);
  })
  .catch(err => {
    console.error(err)
  })
 
  }
  

  getOneRegister (id) {
    axios.get(this.BASE_URL+"characters/"+id)
    .then(response => {
      var idChar = response.data
      var content = `
      <div class="character-info">
        <div class="name">Name: ${idChar.name}</div>
        <div class="occupation">Occupation: ${idChar.occupation}</div>
        <div class="debt">Debt: ${idChar.debt}</div>
        <div class="weapon">Weapon: ${idChar.weapon}</div>
        <div class="id">Id: ${idChar.id}</div>
      </div>`
      $('.characters-container').append(content);
  })
  .catch(err => {
    console.error(err)
  })
  }

  createOneRegister () {
    const characterInfo = {
      name: $("#name").val() ,
      occupation: $("#occupation").val(),
      weapon: $("#weapon").val(),
      debt: $("#debt").val() 
    };

    axios.post(charactersAPI.BASE_URL+`characters/`, characterInfo)
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })
    

  }

  updateOneRegister () {
    const updateInfo = {
      id: $("#chr-id").val(),
      name: $("#name2").val() ,
      occupation: $("#occupation2").val(),
      weapon: $("#weapon2").val(),
      debt: $("#debt2").val()
    };
    const id = $("#chr-id").val()
  
    axios.patch(this.BASE_URL+"characters/"+id, updateInfo)
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL+"characters/"+id)
    .then(response => {
      console.log('delete success');
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error);
    })
  }
}
