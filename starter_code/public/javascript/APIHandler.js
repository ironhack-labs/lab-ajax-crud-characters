class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then((response) => {
      console.log("response: ", response)

      $(".characters-container").empty();

      response.data.forEach(oneChar => {
        const myHtml = $(`
        <div class="character-info">
        <div class="name">Name: ${oneChar.name}</div>
        <div class="occupation">Occupation: ${oneChar.occupation}</div>
        <div class="debt">Debt: ${oneChar.debt}</div>
        <div class="weapon">Weapon: ${oneChar.weapon}</div>
      </div>
      `)
      $(".characters-container").append(myHtml);
      });
    })
    .catch();

    }

  getOneRegister (id) {
axios.get(this.BASE_URL + "/characters/"+ id )
.then((response) => {
  console.log("response", response);
  $(".characters-container").empty();
  const singleChar = $(`
  <div class="character-info">
        <div class="name">Name: ${response.data.name}</div>
        <div class="occupation">Occupation: ${response.data.occupation} </div>
        <div class="debt">Debt: ${response.data.debt} </div>
        <div class="weapon">Weapon: ${response.data.weapon} </div>
      </div>
  `);
  $(".characters-container").append(singleChar);
})
.catch();

  }

  createOneRegister (data) {
    axios.post(this.BASE_URL + "/characters", data)
.then()
.catch()

  }

  updateOneRegister (id, data) {
    axios.patch(this.BASE_URL + "/characters" + id, data)
    .then()
    .catch()
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + "/characters/" + id)
    .then()
    .catch()

  }
}
