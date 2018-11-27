class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = `${baseUrl}characters`;
    this.charContainer = $(".characters-container");
  }

  getFullList() {
    return axios.get(this.BASE_URL).then(res => {
      const chars = res.data;
      this.charContainer.empty();
      chars.forEach(char => {
        this.printCharacter(char.id, char.name, char.occupation, char.cartoon, char.weapon);
      });
    });
  }

  getOneRegister(charID) {
    this.charContainer.empty();
    return axios.get(`${this.BASE_URL}/${charID}`).then(res => {
      const char = res.data;
      this.printCharacter(char.id, char.name, char.occupation, char.cartoon, char.weapon);
    });
  }

  createOneRegister(data, e) {
    return axios.post(this.BASE_URL, data)
      .then(res => {
        this.getOneRegister(res.data.id);
        //this.getFullList();
        this.buttonColor('right', e);
      })
      .catch(err => {
        console.log(err, `Can't create character`);
        this.buttonColor('wrong', e);
      });
  }

  updateOneRegister(data, charID, e) {
    return axios.patch(`${this.BASE_URL}/${charID}`, data)
      .then(res => {
        this.getOneRegister(res.data.id);
        //this.getFullList();
        this.buttonColor('right', e);
      })
      .catch(err => {
        console.log(err, `Can't edit character`);
        this.buttonColor('wrong', e);
      });
  }

  deleteOneRegister(charID, e) {
    return axios.delete(`${this.BASE_URL}/${charID}`).then(() => {
      this.getFullList();
      this.buttonColor('right', e);
    })
    .catch(err => {
      console.log(err, `Can't delete character`);
      this.buttonColor('wrong', e);
    });
  }

  printCharacter(id, name, occupation, cartoon, weapon) {
    const charBox =
      `<div class="character-info">
        <div class="id"><p>Character ID: <span class="color">${id}</span></p></div>
        <div class="name"><p>Character name: <span class="color">${name}</span></p></div>
        <div class="occupation"><p>Character occupation: <span class="color">${occupation}</span></p></div>
        <div class="cartoon"><p>Is a cartoon? <span class="color">${cartoon}</span></p></div>
        <div class="weapon"><p>Character weapon: <span class="color">${weapon}</span></p></div>
      </div>`;
    this.charContainer.append(charBox);
  }

  buttonColor(resp, e) {
    let target = $(e.target).is('button') ? $(e.target) : $(e.target).children('button');
    target.addClass(resp);
    setTimeout(() => {$('button').removeClass(resp)}, 1500);
  }
}
