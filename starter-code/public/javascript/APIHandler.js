class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // See full list

  getFullList () { 
    axios.get(`${this.BASE_URL}/characters`)
    .then((response) => {
      let mainContainer = document.getElementsByClassName('characters-container');
      mainContainer[0].innerHTML = '';

      response.data.forEach(element => {
        let text = `
        <div class="character-info">
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
        </div>`;
        mainContainer[0].innerHTML += text;
      })
    })
    .catch(err => {
      console.log(err);
    })
};

// See one character
  
getOneRegister() {
  const id = $('input[name=character-id]').val();

  axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((response) => {
      let mainContainer = document.getElementsByClassName('characters-container');
      mainContainer[0].innerHTML = '';

      let text = `
      <div class="character-info">
      <div class="name">Name: ${response.data.name}</div>
      <div class="occupation">Occupation: ${response.data.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
      <div class="weapon">Weapon: ${response.data.weapon}</div>
      </div>`;

      containerPrincipal[0].innerHTML = text;
    })

    .catch(err => {
      console.log(err);
    })
}

// Create new carachter

createOneRegister() {
  const name = $('input[name=name-create]').val();
  const occupation = $('input[name=occupation-create]').val();
  const weapon = $('input[name=weapon-create]').val();
  const cartoon = $('input[name=cartoon-create]').val();

  axios.post(`${this.BASE_URL}/characters`, { name, occupation, weapon, cartoon })
    .then(() => {
      console.log('Done');
    })
    .catch(err => {
      console.log(err);
    })
}

// Update

updateOneRegister() {
  const name = $('input[name=name-update]').val();
  const occupation = $('input[name=occupation-update]').val();
  const weapon = $('input[name=weapon-update]').val();
  const cartoon = $('input[name=cartoon-update]').val();
  const id = $('input[name=chr-id]').val();

  axios.put(`${this.BASE_URL}/characters/${id}`, { name, occupation, weapon, cartoon })
    .then((response) => {
      console.log('Updated');
    })
    .catch(err => {
      console.log(err);
    })
}

// Delete

deleteOneRegister() {
  const id = $('input[name=character-id-delete]').val();

  axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then((response) => {
      console.log(response.data); 
    })
    .catch(err => {
      console.log(err);
    })
}

}







