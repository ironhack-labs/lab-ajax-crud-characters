class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(id) {
    return $.get(`${this.BASE_URL}/characters/` + id);
  }

  createOneRegister(data) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      type: "POST",
      data: data
    });
  }

  updateOneRegister(id, data) {
  return $.ajax({
          url: `${this.BASE_URL}/characters/` + id,
          type: "PUT",
          data: data
        })
  deleteOneRegister(id) {
    return $.ajax({
            url: `${this.BASE_URL}/characters/` + id,
            type: "DELETE",
          })
        }
}
}
