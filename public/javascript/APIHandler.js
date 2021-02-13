class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    const charactersContainer = document.querySelector('.characters-container')

    axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => {

        // return res.data

        res.data.forEach(e => {
          
          let element = document.createElement("div");
          element.className = "character-info";
          element.innerHTML = `
            <div class="name"><b>Name:</b> ${e.name}</div>
            <div class="occupation"><b>Occupation:</b> ${e.occupation}</div>
            <div class="cartoon"><b>Cartoon:</b> ${e.cartoon}</div>
            <div class="weapon"><b>Weapon:</b> ${e.weapon}</div>
          `
          charactersContainer.appendChild(element)

        });
      })
      .catch(e => console.log(e))
  }

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  }

  createOneRegister (body) {
    axios
    .post(`${this.BASE_URL}/characters`, body)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  }

  updateOneRegister (body) {
    axios
    .put(`${this.BASE_URL}/characters`, body)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  }

  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  }
}
