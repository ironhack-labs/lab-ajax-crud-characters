class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + "/characters")
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err)
    })
  }

  getOneRegister () {
    const id = document.getElementById("charatid").value;
    axios.get(this.BASE_URL + `characters/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err)
    })
  }
 
  createOneRegister (e) {
    const characterInfo = {
        name: e.target.name.value,
        occupation: e.target.occupation.value,
        weapon: e.target.weapon.value,
        debt: e.target.debt.value
      };
      console.log(e.target);
    
      axios.post(this.BASE_URL+"/characters", characterInfo)
        .then(response => {
          console.log(response.data)
            // const newCharacterHtml = `
            // <li>
            //   <h3> ${response.data.name} </h3>
            //   <p> Id: ${response.data.id} </p>
            // </li>
            // `;
            //document.getElementById("character-info").innerHTML += newCharacterHtml;
        })
        .catch(error => {
            console.log(error)
        })
    
  }

  updateOneRegister () {

  }

  deleteOneRegister () {
 const id = document.getElementById("delete").value;
    axios.delete(this.BASE_URL + `characters/${id}`)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err)
    })
  }
  }

