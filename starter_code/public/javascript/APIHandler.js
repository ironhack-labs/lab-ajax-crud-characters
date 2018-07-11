class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL)
    .then( (res) => {
      console.log(res.data);
      let container = $('.characters-container');
      let html = "";
      res.data.forEach( (e) => {
        html+=`<div class="character-info">`
        html+=`<div class="name"><b>Name:</b> ${e.name}</div>`
        html+=`<div class="occupation"><b>Occupation:</b> ${e.occupation}</div>`
        html+=`<div class="cartoon"><b>Is it a cartoon?</b> ${e.debt}</div>`
        html+=`<div class="weapon"><b>Weapon:</b> ${e.weapon}</div>`
        html+="</div>"
      })
      container.html(html);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
    .then( (res) => {
      console.log(res.data);
      let container = $('.characters-container');
      let html = "";
      html+=`<div class="character-info">`
      html+=`<div class="name"><b>Name:</b> ${res.data.name}</div>`
      html+=`<div class="occupation"><b>Occupation:</b> ${res.data.occupation}</div>`
      html+=`<div class="cartoon"><b>Is it a cartoon?</b> ${res.data.debt}</div>`
      html+=`<div class="weapon"><b>Weapon:</b> ${res.data.weapon}</div>`
      html+="</div>"
      container.html(html);
    })
    
  }

  createOneRegister (data) {
    axios.post(this.BASE_URL, {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      debt: data.debt
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  updateOneRegister (id, data) {
    axios.put(`${this.BASE_URL}/${id}`, {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      debt: data.debt
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/${id}`)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
