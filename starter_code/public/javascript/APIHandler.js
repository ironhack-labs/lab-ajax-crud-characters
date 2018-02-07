class APIHandler {
  constructor(baseUrl) {
    this.instanceAxios = axios.create({
      baseURL: baseUrl
    });
  }
  getFullList() {
    return this.instanceAxios
      .get(`/characters`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    return this.instanceAxios
      .get(`/characters/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        $("#fetch-one").removeClass("green");
        $("#fetch-one").addClass("red");
      });
  }

  createOneRegister(creatInfo) {
    return this.instanceAxios
      .post("/characters", creatInfo)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        $("#create-one").removeClass("green");
        $("#create-one").addClass("red");
      });
  }

  updateOneRegister(id, info) {
    return this.instanceAxios
      .patch(`/characters/${id}`, info)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        $("#edit-one").removeClass("green");
        $("#edit-one").addClass("red");
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    return this.instanceAxios
      .delete(`/characters/${id}`)
      .then(response => {
        $("#delete-one").removeClass("red");
        $("#delete-one").addClass("green");
      })
      .catch(err => {
        $("#delete-one").removeClass("green");
        $("#delete-one").addClass("red");
      });
  }
}
