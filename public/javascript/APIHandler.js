class APIHandler {
  /**
   * Constructor
   * @param {*} baseUrl
   */
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /**
   * Requests the URL to fetch all the characters
   */
  getFullList() {
    const url = this.BASE_URL + `/characters`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.response = response.data;
        this.updateFullList();
      })
      .catch((error) => (this.error = error));
  }

  /**
   *  Updates the fetched characters  on the forntend
   */
  updateFullList() {
    let str = "";
    this.response.forEach((element) => {
      str += this.formCharacterElement(element);
    });
    document.querySelector(".characters-container").innerHTML = str;
  }

  /**
   *  Returns the character information in HTML form
   * @param {*} element
   */
  formCharacterElement(element) {
    return `<div class="character-info"> 
                <div class="name"> Id: <span> ${element.id} <span> </div>\
                <div class="name"> Name: <span> ${element.name} <span> </div>
                <div class="name"> Occupation: <span> ${element.occupation} <span> </div>
                <div class="name"> Is a Cartoon?: <span> ${element.cartoon} <span> </div>
                <div class="name"> Weapon: <span> ${element.weapon} <span> </div>                
              </div>`;
  }

  /**
   *  Requests the url to get one characer information
   */
  getOneRegister() {
    const id = document.getElementsByName("character-id")[0].value;
    const url = this.BASE_URL + `/characters/${id}`;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.response = response.data;
        this.updateOneCharacterInfo();
      })
      .catch((error) => (this.error = error));
  }

  /**
   *  Updates the fetched characters  on the forntend
   */
  updateOneCharacterInfo() {
    document.querySelector(
      ".characters-container"
    ).innerHTML = this.formCharacterElement(this.response);
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}

//npm install -g json-server
