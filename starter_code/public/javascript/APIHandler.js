class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "GET",
      success: response => {
        return response;
      }
    });
  }

  getOneRegister() {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${$('#id').val()}`,
      method: "GET",
      success: response => {
        return response;
      }
    });
  }

  createOneRegister() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "POST",
      data: {
        "name": `${$('#name').val()}`,
        "occupation": `${$('#occupation').val()}`,
        "debt": `${$('#debt').val()}`,
        "weapon": `${$('#weapon').val()}`
      },
    });
  }

  updateOneRegister() {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${$('#editing').val()}`,
      method: 'PATCH',
      data: {
        "name": `${$('#ename').val()}`,
        "occupation": `${$('#eoccupation').val()}`,
        "debt": `${$('#edebt').val()}`,
        "weapon": `${$('#eweapon').val()}`
      },
    });
  }

  deleteOneRegister() {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${$('#delete').val()}`,
      type: 'DELETE',
    });
  }

}
