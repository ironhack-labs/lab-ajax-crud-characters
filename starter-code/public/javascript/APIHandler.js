class APIHandler {
  constructor(baseUrl) {
    // this.minions = axios.create({ baseURL: baseUrl });
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}characters`)
      .then(theMinion => {
        $(".characters-container").empty();
        theMinion.data.forEach(allTheMinions => {
          const theHtml = $(
            `<div class="character-info">
            <div class="id">Id: ${allTheMinions.id}</div>
            <div class="name">Name: ${allTheMinions.name}</div>
            <div class="occupation">Occupation: ${
              allTheMinions.occupation
            }</div>
            <div class="cartoon">Cartoon: ${allTheMinions.cartoon}</div>
            <div class="weapon">Weapon: ${allTheMinions.weapon}</div>
            </div>`
          );
          $(".characters-container").append(theHtml);
        });
      })
      .catch(err => console.log(err));
  }

  getOneRegister() {
    axios
      .get(`${this.BASE_URL}characters/:id`)
      .then(theMinion => {
        $(".characters-container").empty();
        const theHtml = $(
          `<div class="character-info">
            <div class="id">Id: ${theMinion.data.id}</div>
            <div class="name">Name: ${theMinion.data.name}</div>
            <div class="occupation">Occupation: ${
              theMinion.data.occupation
            }</div>
            <div class="cartoon">Cartoon: ${theMinion.data.cartoon}</div>
            <div class="weapon">Weapon: ${theMinion.data.weapon}</div>
            </div>`
        );
        $(".characters-container").append(theHtml);
      })
      .catch(err => console.log(err));
  }

  createOneRegister() {
    const theName = document.getElementsByClassName("the-name");
    const theOccupation = document.getElementsByClassName("the-occupation");
    const theWeapon = document.getElementsByClassName("the-weapon");

    const characterToCreate = {
      name: theName[0].value,
      occupation: theOccupation[0].value,
      weapon: theWeapon[0].value
    };
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
