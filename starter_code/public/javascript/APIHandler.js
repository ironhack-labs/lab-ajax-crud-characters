class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL)
    .then(res => {
      this.fetchAll(res.data);
    })
    .catch(err => {
      this.cardMessage('Error at getFullList: ' + err);
    })
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + id)
      .then(res => {
        this.fetchOne(res.data);
      })
      .catch(err => {
        this.cardMessage(`Error at getOneRegister: ${err}`);
      })
  }

  createOneRegister(character) {
    axios.post(this.BASE_URL,character)
    .then(res => {
      this.cardMessage('The character has been created');      
    })
    .catch(err => {
      this.cardMessage('Error at createOneRegister: ' + err);
    })
  }

  updateOneRegister(character,id) {
    axios.patch(this.BASE_URL+id, character )
      .then(res => {
        this.cardMessage(res.data.name + ' has been updated success');
      })
      .catch(err => {
        this.cardMessage('Error at updateOneRegister: ' + err)
      })
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + id )
      .then(res => {
        this.cardMessage("Element has been deleted success");
      })
      .catch(err => {
        this.cardMessage(err)
      })
  }

  fetchAll(data){
      let mainDiv = document.getElementsByClassName('characters-container');
      mainDiv[0].innerHTML = '';
      //console.log('Entro al fetchAll '+ data[0].name);
      data.forEach(character => {
        let div = this.createCard(character);
        mainDiv[0].appendChild(div);
      });
  }
  fetchOne(character){
      let mainDiv = document.getElementsByClassName('characters-container');
      mainDiv[0].innerHTML = '';
      let div = this.createCard(character);
      mainDiv[0].appendChild(div);
      
  }

  createCard(character){
    let isCartoon = (character.cartoon === true) ? 'YES' : 'NO';
    let div     = document.createElement('div'),
        divName = document.createElement('div'),
        divOccu = document.createElement('div'),
        divCart = document.createElement('div'),
        divWeap = document.createElement('div');
    
    div.setAttribute("class", "character-info");
    divName.setAttribute("class", "name");
    divOccu.setAttribute("class", "occupation");
    divCart.setAttribute("class", "cartoon");
    divWeap.setAttribute("class", "weapon");

    divName.append(character.name);
    divOccu.append(character.occupation);
    divCart.append(`Is a Cartoon? ${isCartoon}`);
    divWeap.append(character.weapon);

    div.appendChild(divName);
    div.appendChild(divOccu);
    div.appendChild(divCart);
    div.appendChild(divWeap);
    return div;
  }

  cardMessage(mje){
    let mainDiv = document.getElementsByClassName('characters-container');
    mainDiv[0].innerHTML = '';
    let div     = document.createElement('div'),
        divName = document.createElement('div');
    
    div.setAttribute("class", "character-info");
    divName.setAttribute("class", "name");
    divName.append(mje);
    div.appendChild(divName);

    mainDiv[0].appendChild(div);
  }
}
