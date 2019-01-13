class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //get all characters
  getFullList() {
    return axios.get(this.BASE_URL + "/characters");
  }

  //get info by id
  getOneRegister() {
    let charId = $("#character-id").val();
    return axios.get(this.BASE_URL + "/characters/" + charId);
  }

  //create new character
  createOneRegister() {
    event.preventDefault();

    const characterInfo = {
      name: $("#new-character-form")
        .find('[name="name"]')
        .val(),
      occupation: $("#new-character-form")
        .find('[name="occupation"]')
        .val(),
      weapon: $("#new-character-form")
        .find('[name="weapon"]')
        .val(),
      cartoon: $("#new-character-form")
        .find('[name="cartoon"]')
        .prop("checked")
    };

    return axios.post(this.BASE_URL + "/characters/", characterInfo);
  }

  //update character by id
  updateOneRegister() {
    event.preventDefault();

    let charId = $("#edit-character-form")
      .find('[name="chr-id"]')
      .val();

    let updatedcharacterInfo = {
      name: $("#edit-character-form")
        .find('[name="name"]')
        .val(),
      occupation: $("#edit-character-form")
        .find('[name="occupation"]')
        .val(),
      weapon: $("#edit-character-form")
        .find('[name="weapon"]')
        .val(),
      cartoon: $("#edit-character-form")
        .find('[name="cartoon"]')
        .prop("checked")
    };

    return axios.patch(
      this.BASE_URL + "/characters/" + charId,
      updatedcharacterInfo
    );
  }

  //delete character by id
  deleteOneRegister() {
    event.preventDefault();
    let charId = $("#character-id-delete").val();
    return axios.delete(this.BASE_URL + "/characters/" + charId);
  }
}
