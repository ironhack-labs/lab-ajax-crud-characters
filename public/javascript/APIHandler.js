class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    axios.get(this.BASE_URL + "/characters")
      .then(reponseFromApi => {

        let charactersContainer = document.querySelector(".characters-container").innerHTML;
        charactersContainer = "";

        reponseFromApi.data.forEach(ele => {

          charactersContainer += `<div class="character-info">
                                    <div class="id">Id: ${ele.id}</div>
                                    <div class="name">Name: ${ele.name}</div>
                                    <div class="occupation">Occupation: ${ele.occupation}</div>
                                    <div class="cartoon">Is a Cartoon?: ${ele.cartoon}</div>
                                    <div class="weapon">Weapon: ${ele.weapon}</div>
                                  </div>`;

        })

        // console.log(charactersContainer)
        console.log(reponseFromApi.data);

      })
      .catch(error => console.log(error))

  }

  getOneRegister (id) {

    axios.get(this.BASE_URL + "/characters/" + id)
      .then(reponseFromApi => {

        // console.log(reponseFromApi.data.name);

        const data = reponseFromApi.data;

        let charactersContainer = document.querySelector('.characters-container').innerHTML;
        charactersContainer = "";

        charactersContainer = `<div class="character-info">
                                  <div class="id">Id: ${data.id}</div>
                                  <div class="name">Name: ${data.name}</div>
                                  <div class="occupation">Occupation: ${data.occupation}</div>
                                  <div class="cartoon">Is a Cartoon?: ${data.cartoon}</div>
                                  <div class="weapon">Weapon: ${data.weapon}</div>
                                </div>`;
      })
      .catch(error => console.log(error));

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
