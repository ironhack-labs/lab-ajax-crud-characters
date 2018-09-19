class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then((res) => {
        let chrtInfo = "";
        res.data.forEach((each) => {
          chrtInfo += `<div class="character-info">`
          chrtInfo += `<div class="id"><b>Id:</b> ${each.id}</div>`
          chrtInfo += `<div class="name"><b>Name:</b> ${each.name}</div>`
          chrtInfo += `<div class="occupation"><b>Occupation:</b> ${each.occupation}</div>`
          chrtInfo += `<div class="cartoon"><b>Is it a cartoon?</b> ${each.cartoon}</div>`
          chrtInfo += `<div class="weapon"><b>Weapon:</b> ${each.weapon}</div>`
          chrtInfo += "</div>"
        })
        $('.characters-container').html(chrtInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(res => {
        let chrtInfo = "";
        chrtInfo += `<div class="character-info">`
        chrtInfo += `<div class="id"><b>Id:</b> ${res.data.id}</div>`
        chrtInfo += `<div class="name"><b>Name:</b> ${res.data.name}</div>`
        chrtInfo += `<div class="occupation"><b>Occupation:</b> ${res.data.occupation}</div>`
        chrtInfo += `<div class="cartoon"><b>Is it a cartoon?</b> ${res.data.cartoon}</div>`
        chrtInfo += `<div class="weapon"><b>Weapon:</b> ${res.data.weapon}</div>`
        chrtInfo += "</div>"

        $('.characters-container').html(chrtInfo);
      })
      .catch(function (error) {
        alert("Character not found");
      });
  }

  createOneRegister(characterInfo) {
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
      .then(response => {
        $("#send-data").addClass("active")
        this.getFullList();
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateOneRegister(id, characterInfo) {
    axios.put(`${this.BASE_URL}/characters/${id}`,characterInfo)
      .then(response => {
        $("#send-data-2").addClass("active")
        this.getFullList();
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('post success');
        console.log(response)
        $("#delete-one").addClass("active")
        this.getFullList();
      })
      .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
        $("#delete-one").addClass("error")
      })
  }
}