class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters')
     .then(response => {
       var CharacterHtml = "";
      for(var i = 0; i < response.data.length; i++){
        CharacterHtml += `
        <li>
          <div class="character-info">
            <div class="name"><h2>${response.data[i].name}</h2></div>
            <div class="occupation"><b>Character Occupation: </b> ${response.data[i].occupation}</div>
            <div class="debt"><b>Character Debt: </b> ${response.data[i].debt}</div>
            <div class="weapon"><b>Character Weapon: </b> ${response.data[i].weapon} </div>
            <div class="id"><b>Character ID: </b> ${response.data[i].id} </div>
          </div>
        </li>
        `;
      }
      document.getElementById("characters-list").innerHTML = CharacterHtml;
      
     })
     .catch(error => {
         console.log('Oh No! Error!');  
         console.log(error);
     })
}

  getOneRegister (id) {
    axios.get(this.BASE_URL + '/characters/' + id)
     .then(response => {
        var CharacterHtml = `
        <li>
          <div class="character-info">
            <div class="name"><h2>${response.data.name}</h2></div>
            <div class="occupation"><b>Character Occupation: </b> ${response.data.occupation}</div>
            <div class="debt"><b>Character Debt: </b> ${response.data.debt}</div>
            <div class="weapon"><b>Character Weapon: </b> ${response.data.weapon} </div>
          </div>
        </li>
        `;
        document.getElementById("characters-list").innerHTML = CharacterHtml;
      
     })
     .catch(error => {
         console.log('Oh No! Error!');  
         console.log(error);
     })
  }

  createOneRegister (characterInfo) {
      axios.post(this.BASE_URL + '/characters/', characterInfo)
      .then(response => {
    
      })
      .catch(error => {
          console.log(error)
      })
}

  updateOneRegister (charId, characterInfo) {
    axios.patch(this.BASE_URL + '/characters/' + charId, characterInfo)
    .then(response => {
     
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error);
    })
 }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + '/characters/' + id)
     .then(response => {
      
     })
     .catch(error => {
         console.log('Oh No! Error!');  
         console.log(error);
     })
  }
}

