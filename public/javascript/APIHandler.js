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

  createOneRegister() {
    const url = this.BASE_URL + `/characters`;
    const formElements = document.getElementById("new-character-form").elements;
    console.log(formElements[3]);
    const newCharacterInfo = {
      name: formElements[0].value,
      occupation: formElements[1].value,
      weapon: formElements[2].value,
      cartoon: formElements[3].checked,
    };
    console.log(newCharacterInfo);
    axios
      .post(url, newCharacterInfo)
      .then((response) => {
        const { name, id } = response.data;
        document.getElementById("send-data").className = "btn-del-success";
        alert(`The charcter with ID: ${id} is created successfully`);
        document.getElementById("new-character-form").reset();
      })
      .catch((err) => {
        document.getElementById("send-data").className = "btn-del-error";
        alert(`Error in creating new  character Information`);
        console.log(`Error while creating a new character: ${err}`);
      });
  }

  /**
   *  Fetch the character information basedon the ID entered
   */
  fetchCharacterInfo() {
    event.preventDefault();
    const id = document.querySelector("#edit-character-form input[name=chr-id]")
      .value;
    const url = this.BASE_URL + `/characters/${id}`;
    axios
      .get(url)
      .then((response) => {
        this.response = response.data;

        document.querySelector(
          "#edit-character-form input[name=chr-id]"
        ).value = this.response.id;
        document.querySelector(
          "#edit-character-form input[name=name]"
        ).value = this.response.name;
        document.querySelector(
          "#edit-character-form input[name=occupation]"
        ).value = this.response.occupation;
        document.querySelector(
          "#edit-character-form input[name=weapon]"
        ).value = this.response.weapon;
        document.querySelector(
          "#edit-character-form input[name=cartoon]"
        ).checked = this.response.cartoon;

        document.querySelector(
          "#edit-character-form input[name=chr-id]"
        ).disabled = true;
      })
      .catch((error) => (this.error = error));
  }

  /**
   *  Update the character information
   */
  updateOneRegister() {
    const updatedCharacter = {
      name: document.querySelector("#edit-character-form input[name=name]")
        .value,
      occupation: document.querySelector(
        "#edit-character-form input[name=occupation]"
      ).value,
      weapon: document.querySelector("#edit-character-form input[name=weapon]")
        .value,
      cartoon: document.querySelector(
        "#edit-character-form input[name=cartoon]"
      ).checked,
    };
    const id = document.querySelector("#edit-character-form input[name=chr-id]")
      .value;
    const url = this.BASE_URL + `/characters/${id}`;
    // alert(url);
    axios
      .put(url, updatedCharacter)
      .then((response) => {
        console.log(response);
        document.getElementById("update-data").className = "btn-del-success";
        alert(`The charcter with ID: ${id} is updated successfully`);
        document.getElementById("edit-character-form ").reset();
      })
      .catch((error) => {
        document.getElementById("update-data").className = "btn-del-error";
        alert(`Error while updating the character information : ${error}`);
      });
  }

  /**
   *  Requests the url to delete one characer information
   */
  deleteOneRegister() {
    const id = document.getElementsByName("character-id-delete")[0].value;
    const url = this.BASE_URL + `/characters/${id}`;
    console.log(url);
    axios
      .delete(url)
      .then((response) => {
        this.response = response.data;
        document.getElementById("delete-one").className = "btn-del-success";
        alert(`The charcter with ID: ${id} is deleted successfully`);
      })
      .catch((error) => {
        this.error = error;
        document.getElementById("delete-one").className = "btn-del-error";
        alert(`Error in deleting the charcter with ID: ${id}`);
      });
  }
}

//npm install -g json-server
