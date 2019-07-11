class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //
  // .methods() by CRUD order
  //

  // Create a single character posting the data to this.BASE_URL
  createOneRegister(name, occupation, weapon, cartoon) {
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
      .then((response) => {
        const okCreate = document.getElementById('delete-one');
        okCreate.style.backgroundColor = 'green';
        console.log(response.data);
      })
      .catch(err => {
        const failCreate = document.getElementById('delete-one');
        failCreate.style.backgroundColor = 'red';
        console.log(err)
      });
  }

  // Get all the characters info from this.BASE_URL
  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then((response) => {
        const card = document.querySelector('.characters-container');
        card.innerHTML = '';

        response.data.forEach((element) => {
          card.innerHTML += `
            <div class="character-info">
              <div class="name">Id: <span>${element.id}</span></div>
              <div class="name">Name: <span>${element.name}</span></div>
              <div class="occupation">Occupation: <span>${element.occupation}</span></div>
              <div class="cartoon">Is a Cartoon?: <span>${element.cartoon}</span></div>
              <div class="weapon">Weapon: <span>${element.weapon}</span></div>
            </div>
          `;
        });
      })
      .catch(err => console.log(err));
  }

  // Get a single character info from this.BASE_URL/:id
  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        const findOne = document.getElementById('fetch-one-input').value;
        if (findOne === '') return;

        const card = document.querySelector('.characters-container');
        card.innerHTML = '';

        card.innerHTML += `
          <div class="character-info">
            <div class="name">Id: <span>${response.data.id}</span></div>
            <div class="name">Name: <span>${response.data.name}</span></div>
            <div class="occupation">Occupation: <span>${response.data.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${response.data.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${response.data.weapon}</span></div>
          </div>
        `;

        const edit = document.getElementById('edit-character-form');
        edit.innerHTML = '';

        if (response.data.cartoon === true) {
          edit.innerHTML = `
            <div class="field">
                <label for="id">ID: </label>
                <input type="text" name="chr-id" value="${response.data.id}" disabled />
              </div>
              <div class="field">
                <label for="name">Name: </label>
                <input type="text" name="name" value="${response.data.name}" />
              </div>
              <div class="field">
                <label for="occupation">Occupation: </label>
                <input type="text" name="occupation" value="${response.data.occupation}" />
              </div>
              <div class="field">
                <label for="weapon">Weapon: </label>
                <input type="text" name="weapon" value="${response.data.weapon}" />
              </div>
              <div class="field">
                <label for="cartoon">Is a Cartoon: </label>
                <input name="cartoon" type="checkbox" checked />
              </div>
              <button id="send-data">Update</button>
            `;
        } else {
          edit.innerHTML = `
            <div class="field">
                <label for="id">ID: </label>
                <input type="text" name="chr-id" value="${response.data.id}" disabled />
              </div>
              <div class="field">
                <label for="name">Name: </label>
                <input type="text" name="name" value="${response.data.name}" />
              </div>
              <div class="field">
                <label for="occupation">Occupation: </label>
                <input type="text" name="occupation" value="${response.data.occupation}" />
              </div>
              <div class="field">
                <label for="weapon">Weapon: </label>
                <input type="text" name="weapon" value="${response.data.weapon}" />
              </div>
              <div class="field">
                <label for="cartoon">Is a Cartoon: </label>
                <input name="cartoon" type="checkbox" />
              </div>
              <button id="send-data">Update</button>
            `;
        }
      })
      .catch(err => console.log(err));
  }

  // Edit a single character through his id in this.BASE_URL/:id
  updateOneRegister(id) {
    const editCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    return axios.post(`${this.BASE_URL}/characters/${id}`, editCharacter)
      .then((response) => {
        const okUpdate = document.getElementById('delete-one');
        okUpdate.style.backgroundColor = 'green';
      })
      .catch(err => {
        const failUpdate = document.getElementById('delete-one');
        failUpdate.style.backgroundColor = 'red';
        console.log(err)
      });
  }

  // Delete a single character through his id in this.BASE_URL/:id
  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        const deleteOne = document.getElementById('delete-one-input').value;
        if (deleteOne === '') return;
        const okDelete = document.getElementById('delete-one');
        okDelete.style.backgroundColor = 'green';
      })
      .catch(err => {
        const failDelete = document.getElementById('delete-one');
        failDelete.style.backgroundColor = 'red';
        console.log(err)
      });
  }
}
