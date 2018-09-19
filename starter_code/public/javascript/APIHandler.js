class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl; // http://localhost:8000
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then((res) => {
        let chrtInfo = "";
        res.data.forEach((each) => {
          chrtInfo += `<div class="character-info">`
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
    console.log("get one");
    return axios.get(`${this.BASE_URL}/characters/${id}`)
       .then((res) => {
        let chrtInfo = "";
          chrtInfo += `<div class="character-info">`
          chrtInfo += `<div class="name"><b>Name:</b> ${res.data.name}</div>`
          chrtInfo += `<div class="occupation"><b>Occupation:</b> ${res.data.occupation}</div>`
          chrtInfo += `<div class="cartoon"><b>Is it a cartoon?</b> ${res.data.cartoon}</div>`
          chrtInfo += `<div class="weapon"><b>Weapon:</b> ${res.data.weapon}</div>`
          chrtInfo += "</div>"
        $('.characters-container').html(chrtInfo);
       })
       .catch(function (error) {
        console.log(error);
      });
  }

  createOneRegister(obj) {
    return axios.post(`${this.BASE_URL}/characters`, obj)
    .then((res) => {
     console.log("created!!")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateOneRegister(obj, id) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, obj)
    .then((res) => {
      console.log("updated!!")
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
     .then((res) => {
      console.log("deleted!!")
    })
    .catch(function (error) {
     console.log(error);
    })
}
}
