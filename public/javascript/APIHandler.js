class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
			.get(`${this.BASE_URL}/characters`)
      .then(response => {
        const data = response.data;
        console.log('Response from API is:', response.data)

        const charactersContainer = document.querySelector('.characters-container');
        charactersContainer.innerHTML = '';

        data.forEach(character => {
          charactersContainer.innerHTML += `
          <div class="character-info">
            <div class="id">Id: ${character.id}</div>
            <div class="name">Character Name: ${character.name}</div>
            <div class="occupation">Character Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
            <div class="weapon">Character Weapon: ${character.weapon}</div>
          </div>`;
        });
      })
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  getOneRegister(charId) {
		axios
      .get(`${this.BASE_URL}/characters/${charId}`)
      .then(response => {
        const { id, name, occupation, cartoon, weapon } = response.data;
        console.log('Response from API is:', response.data)

        const charactersContainer = document.querySelector('.characters-container');
        charactersContainer.innerHTML = `
        <div class="character-info">
          <div class="id">Id: ${id}</div>
          <div class="name">Character Name: ${name}</div>
          <div class="occupation">Character Occupation: ${occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
          <div class="weapon">Character Weapon: ${weapon}</div>
        </div>`;
      })
      .catch(err => console.log(`Error while getting character: ${err}`));
  }

  createOneRegister(newChar) {
		axios
			.post(`${this.BASE_URL}/characters`, newChar)
			.then(response => {
        console.log('Created a new character', response.data)
        getFullList();
      })
      .catch(err => console.log(`Error while getting character: ${err}`));
	}

	updateOneRegister(charId, editChar) {
		axios
			.put(`${this.BASE_URL}/characters/${charId}`, editChar)
			.then(response => {
        console.log("Response from the API: ", response.data)
        getFullList();
      })
			.catch(err => console.log(`Error while updating a character: ${err}`));
	}

	deleteOneRegister(charId) {
		axios
      .delete(`${this.BASE_URL}/characters/${charId}`)
      .then(response => {
        console.log('A character has been deleted', response.data)
        getFullList();
      })
      .catch(err => console.log(`Error while saving a new character: ${err}`));
	}
}
