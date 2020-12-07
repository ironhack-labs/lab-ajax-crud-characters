class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(this.BASE_URL + '/characters')
    .then( response => {
      console.log(response.data);

      let str = '';

      response.data.forEach(character => {
        str +=`
        <li class="list-group-item">
          <div class="character-info">
              <div>Id: ${character.id}</div>
              <div>Name: ${character.name}</div>
              <div>Occupation: ${character.occupation}</div>
              <div>Cartoon?: ${character.cartoon}</div>
              <div>Weapon: ${character.weapon}</div>
          </div>
        </li>`
      });

      document.getElementById('characters-list').innerHTML = str;
      //make list visible      
      document.getElementById('full-list').setAttribute('style', 'display:block')

    } )
    .catch(err => {
      console.log(err);
    })
    
  }

  getOneRegister (charId) {
    axios
    .get(`${this.BASE_URL}/characters/${charId}`)
    .then( response => {
      console.log(response);
      let character = response.data;

      let charNode = `
        <div class="character-info">
        <div>Id: ${character.id}</div>
        <div>Name: ${character.name}</div>
        <div>Occupation: ${character.occupation}</div>
        <div>Cartoon?: ${character.cartoon}</div>
        <div>Weapon: ${character.weapon}</div>
      </div>
     `
     document.getElementById('single-character-info').innerHTML = charNode;
     document.getElementById('single-chararacter-name').innerText = character.name;
     document.getElementById('siingle-character').setAttribute('style', 'display:block'); 
    })
    .catch(err => {
      console.log(err);
    })
  }

  createOneRegister () {
    axios
    .post(this.BASE_URL + '/characters', {})
    .then( () => {
      //this should redirect to the list of all the characters.
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateOneRegister () {
    axios
    .put(this.BASE_URL + '/characters/:id', {})
    .then( () => {

    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteOneRegister (charId) {
    axios
    .delete(`${this.BASE_URL}/characters/${charId}`)
    .then( response => {
     console.log(response.data);
     document.getElementById('delete-one').setAttribute('class', 'delete-success');
    })
    .catch(err => {
      console.log(err);
      document.getElementById('delete-one').setAttribute('class', 'delete-fail');
    })
}
}
