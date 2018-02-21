

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+"characters")
    .then(response => {
      

      var arrChar = response.data;
      var content = ''
      $('.characters-container').append(content);
      
      arrChar.forEach(char => { 
      content += `
      <div class="character-info">
        <div class="id">Id: <b>${char.id}</b></div>
        <div class="name">Name:  <b>${char.name}</b></div>
        <div class="occupation">Occupation: <b>${char.occupation}</b></div>
        <div class="weapon">Weapon:  <b>${char.weapon}</b></div>
        <div class="debt">Debt: <b>${char.debt}</b></div>
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
        <div class="id">Id: <b>${idChar.id}</b></div>
        <div class="name">Name: <b>${idChar.name}</b></div>
        <div class="occupation">Occupation: <b>${idChar.occupation}</b></div>
        <div class="weapon">Weapon: <b>${idChar.weapon}</b></div>
        <div class="debt">Debt: <b>${ (idChar.id=== "on") ?true : false}</b></div>
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
      debt: $("#debt").is(':checked') 
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
      debt: $("#debt2").is(':checked')
    };
    console.log(updateInfo)
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
