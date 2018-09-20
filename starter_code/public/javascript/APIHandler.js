class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
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

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then (res => {
      return res.data
    })
    .catch (e => console.log(e));
  }

  createOneRegister (newCharact) {
    return axios.post(`${this.BASE_URL}/characters`, newCharact)
    .then (res => {
      return res.data
    })
    .catch (e => console.log(e));
  }

  updateOneRegister (obj,id) {
    return axios.put(`${this.BASE_URL}/characters/${id}`,obj)
    .then (res => {
      return res.data
    })
    .catch (e => "Character not found");
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then (() => {
      return "Character has been successfully deleted"
    })
    .catch (() => "Character not found");
  }
}
