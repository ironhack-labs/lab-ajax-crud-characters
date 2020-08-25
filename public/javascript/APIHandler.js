class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then((charactersFromAPI) => {
        console.log(charactersFromAPI);

        const container = document.getElementsByClassName('characters-container')[0];
        const info = document.getElementsByClassName('character-info')[0];
        const { data } = charactersFromAPI;

        data.forEach(element => {
          const cloned = info.cloneNode(true);

          const [id, name, occupation, cartoon, weapon] = cloned.children;
      
          id.innerHTML = `${id.innerHTML}: ${element.id}`;
          name.innerHTML = `${name.innerHTML}: ${element.name}`;
          occupation.innerHTML = `${occupation.innerHTML}: ${element.occupation}`;
          cartoon.innerHTML = `${cartoon.innerHTML}: ${element.cartoon}`;
          weapon.innerHTML = `${weapon.innerHTML}: ${element.weapon}`;

          container.appendChild(cloned);
        });
      })
      .catch((err) => console.log(err))
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((characterFromAPI) => {
      console.log(characterFromAPI);
      const { data } = characterFromAPI;

      const info = document.getElementsByClassName('character-info')[0];
      const [id, name, occupation, cartoon, weapon] = info.children;
      
      id.innerHTML = `${id.innerHTML}: ${data.id}`;
      name.innerHTML = `${name.innerHTML}: ${data.name}`;
      occupation.innerHTML = `${occupation.innerHTML}: ${data.occupation}`;
      cartoon.innerHTML = `${cartoon.innerHTML}: ${data.cartoon}`;
      weapon.innerHTML = `${weapon.innerHTML}: ${data.weapon}`;
    })
    .catch((err) => console.log(err))
  }

  createOneRegister (newCharacterData) {
    axios.post(`${this.BASE_URL}/characters`, newCharacterData)
      .then((newCharacter) => {console.log(newCharacter)})
      .catch((err) => console.log(err))
  }

  updateOneRegister (updatedCharacterData) {
    axios.put(`${this.BASE_URL}/characters/${updatedCharacterData.id}`, updatedCharacterData)
      .then((updatedCharacter) => {console.log(updatedCharacter)})
      .catch((err) => console.log(err))
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((deletedCharacter) => {console.log(deletedCharacter)})
      .catch((err) => console.log(err))
  }
}
