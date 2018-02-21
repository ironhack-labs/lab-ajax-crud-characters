class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + `/characters`)
    .then(response => {
      let fetchAll = ""
      response.data.forEach(element => {
        fetchAll += `<div class="character-info">
        <div class="id">ID: ${element.id}</div>
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="debt">Debt: ${element.debt}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>`
      });
      document.getElementsByClassName("characters-container")[0].innerHTML=fetchAll;
    })
    .catch(err => {
      console.log(err)
    })
  }

  getOneRegister (e) {
    const charId = document.getElementById("character-id").value;
    axios.get(this.BASE_URL + "/characters/"+ charId)
    .then(response => {
      let fetchOne = ""
      let element = response.data
        fetchOne += `<div class="character-info">
        <div class="id">ID: ${element.id}</div>
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="debt">Debt: ${element.debt}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>`
      document.getElementsByClassName("characters-container")[0].innerHTML=fetchOne;
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister (e) {
    const characterInfo = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      debt: e.target.debt.checked,
      weapon: e.target.weapon.value
    };

    axios.post(this.BASE_URL + `/characters`, characterInfo)
    .then(response => {
      $("#new-character-form .submit-button").css({"background-color": "green"})
    })
    .catch(err => {
      $("#new-character-form .submit-button").css({"background-color": "red"})
    })
  }

  updateOneRegister (e) {
    const updateInfo = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      debt: e.target.debt.checked,
      weapon: e.target.weapon.value
    };
    const charId = e.target.chrId.value;
  
    axios.patch(this.BASE_URL + `/characters/${charId}`, updateInfo)
    .then(response => {
      $("#edit-character-form .submit-button").css({"background-color": "green"})
    })
    .catch(err => {
      $("#edit-character-form .submit-button").css({"background-color": "red"})
    })
  }

  deleteOneRegister () {
    const charId = document.getElementById("character-id-delete").value;

    axios.delete(this.BASE_URL + "/characters/"+ charId)
    .then(response => {
      $("#delete-one").css({"background-color": "green"})
    })
    .catch(err => {
      $("#delete-one").css({"background-color": "red"})
    })
  }
}
