class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters')
      .then(fullListFromApi => {
        
        const data = fullListFromApi.data
        
        let str = '';

        data.forEach(character => {
          str += `
            <div class="characters-container">
              <div class="character-info">
                <div class="name">Character Name: ${character.name}</div>
                <div class="occupation">Character Occupation: ${character.occupation}</div>
                <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
                <div class="weapon">Character Weapon: ${character.weapon}</div>
              </div>
            </div>`;
        });
        document.getElementById('characters-container').innerHTML = str;
        
      })
      .catch(err => console.log(err));
  }

  getOneRegister () {
    const id = document.querySelector('.operation input').value;

    console.log(`The id is = ${id}`)

    axios.get(this.BASE_URL + `/characters/${id}`)
      .then(oneRegisterFromApi => {
        const data = oneRegisterFromApi.data
        
        let str = `
            <div class="characters-container">
            <div class="character-info">
              <div class="name">Character Name: ${data.name}</div>
              <div class="occupation">Character Occupation: ${data.occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${data.cartoon}</div>
              <div class="weapon">Character Weapon: ${data.weapon}</div>
            </div>
          </div>`;

        document.getElementById('characters-container').innerHTML = str;
        
      })
      .catch(err => console.log(err));
  }

  createOneRegister () {
    axios.post(this.BASE_URL + '/characters', {name, occupation, weapon, cartoon})
      .then(createOneApi => {
        console.log(createOneApi);
      })
      .catch(err => console.log(err));
  }

  updateOneRegister () {
    axios.put(this.BASE_URL + `/characters/${id}`)
      .then(updateOneApi => {
        console.log(updateOneApi)
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister () {
    const id = document.querySelector('.operation input').value;
    
    console.log(`delete ID =${id}`)

    axios.delete(this.BASE_URL + `/characters/${id}`)
      .then(deleteOneApi => {
        
        
        
      })
      .catch(err => console.log(err));
  }
}
