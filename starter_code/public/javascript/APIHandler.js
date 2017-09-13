class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return $.get(`${this.BASE_URL}/characters/`, +id)
  }

  createOneRegister(user) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      type: "POST",
      data: user
    })
  }

  updateOneRegister(user) {
    return $.ajax({
      url: this.BASE_URL + "/characters/" + user.id,
      method: "PUT",
      data: user

    })

  }

  deleteOneRegister(id) {
    return $.ajax({
      method: 'DELETE',
      url: (`${this.BASE_URL}/characters/${id}`)
    });

  }
}
