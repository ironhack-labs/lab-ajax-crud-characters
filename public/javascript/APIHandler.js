class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + "/characters").then(function (res) {
      console.log(res);
    });
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + "/characters/" + id).then(function (res) {
      document.getElementById("chr_name").innerText = "name: " + res.data.name;
      document.getElementById("chr_occupation").innerText =
        "occupation: " + res.data.occupation;
      document.getElementById("chr_cartoon").innerText =
        "is cartoon?  " + res.data.cartoon;
      document.getElementById("chr_weapon").innerText =
        "weapon: " + res.data.weapon;
    });
  }

  createOneRegister() {
    let name = document.getElementById("new_name").value;
    let occupation = document.getElementById("new_occupation").value;
    let cartoon = document.getElementById("new_cartoon").value;
    let weapon = document.getElementById("new_weapon").value;
    axios
      .post(this.BASE_URL + "/characters", {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      })
      .then(function (res) {});
  }

  updateOneRegister(id) {
    let name = document.getElementById("edit_name").value;
    let occupation = document.getElementById("edit_occupation").value;
    let cartoon = document.getElementById("edit_cartoon").value;
    let weapon = document.getElementById("edit_weapon").value;
    axios
      .put(this.BASE_URL + "/characters/" + id, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      })
      .then(function (res) {});
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + "/characters/" + id).then(function (res) {
      console.log(res);
    });
  }
}
