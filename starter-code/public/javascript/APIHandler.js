class APIHandler {

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getCharacters() {
    axios.get(`${this.BASE_URL}/characters`)
      .then(function (response) {
        let characterHTML = ``
        response.data.forEach((character) => {
          characterHTML += `             
          <div class="character-info" id = "$"> 
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Cartoon: ${String(character.cartoon)}</div>
          <div class="weapon"> Weapon: ${character.weapon}</div>
          </div>`
        });
        document.querySelector(".characters-container").innerHTML = characterHTML;
      }).catch(function (error) {
        console.log(error)
      });
  }

  getID(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  deleteOne(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(function (response) {
        console.log("Sucessfully deleted" + response)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  editCharacter(id, obj) {
    axios.put(`${this.BASE_URL}/characters/${id}`, obj)
    .then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }

  createCharacter(obj) {
    axios.post(`${this.BASE_URL}/characters`, obj)
    .then(function (response) {
      console.log("Successfully added" + response)
      
      })
    .catch(function (error){
      console.log(error)
    });
  }
  

}
