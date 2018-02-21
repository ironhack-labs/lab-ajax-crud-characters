class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      axios.get(this.BASE_URL + "/characters")
      .then(response => {
        document.getElementsByClassName('character-info')[0].innerHTML = ""
        response.data.forEach(character => {
            var Char = 
            `
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="debt">${character.debt}</div>
            <div class="weapon">${character.weapon}</div>
            <br>
            `;
            document.getElementsByClassName('character-info')[0].innerHTML += Char
        });
     
      })
      .catch(err => {
        console.error(err)
      })
  }

  getOneRegister(id) {

      axios.get(this.BASE_URL + "/characters/" + id)
      .then(response => {
         console.log(response.data)
         document.getElementsByClassName('character-info')[0].innerHTML = ""
         var Char = 
         `
         <div class="name">${response.data.name}</div>
         <div class="occupation">${response.data.occupation}</div>
         <div class="debt">${response.data.debt}</div>
         <div class="weapon">${response.data.weapon}</div>
         `;
         document.getElementsByClassName('character-info')[0].innerHTML += Char
        })
      .catch(err => {
        console.error(err)
      })
  }

  createOneRegister () {
    const characterInfo = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      weapon: document.getElementsByName('weapon')[0].value,
      debt: document.getElementsByName('debt')[0].value,
    }

    console.log(characterInfo)
     
      axios.post(this.BASE_URL + "/characters", characterInfo)
      .then(response => {
          document.getElementsByClassName('submit-button')[0].style.backgroundColor = "green";
      })
      .catch(error => {
        document.getElementsByClassName('submit-button')[0].style.backgroundColor = "red";
        console.log(error)
      })
  }

  updateOneRegister () {
      var updates = {
        name: document.getElementsByName('name')[1].value,
        occupation: document.getElementsByName('occupation')[1].value,
        weapon: document.getElementsByName('weapon')[1].value,
        debt: document.getElementsByName('debt')[1].value,
      }

      var id = document.getElementsByName('chr-id')[0].value

     axios.patch(this.BASE_URL + "/characters/" + id, updates)
     .then(response => {
      document.getElementsByClassName('submit-button')[1].style.backgroundColor = "green";
     })
     .catch(error => {
      document.getElementsByClassName('submit-button')[1].style.backgroundColor = "red";
       console.error(error)
     }
     ) 
  }

  deleteOneRegister () {
    var id = document.getElementsByName('character-id-delete')[0].value;

    axios.delete(this.BASE_URL + "/characters/" + id)
    .then( response => {
      document.getElementById('delete-one').style.backgroundColor = "green"
    })
    .catch(error =>{
      document.getElementById('delete-one').style.backgroundColor = "red"
      console.error(error)
    });
  }
}
