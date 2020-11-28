class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then((result) => {
        document.querySelector('.characters-container').innerHTML = '';
        result.data.forEach((character) => {
          const newDiv = document.createElement('div');
          newDiv.innerHTML = `
            <div class="character-info">
              <div class="id">Id: ${character.name}</div>
              <div class ="name">Name: ${character.name}</div>
              <div class ="occupation">Occupation: ${character.occupation}</div>
              <div class ="cartoon">Cartoon: ${character.cartoon}</div>
              <div class ="weapon">Weapon: ${character.weapon}</div>
            </div>
          `;
          document.querySelector('.characters-container').append(newDiv);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getOneRegister () {
    const id = document.querySelector('#character-id').value;
    console.log(id);
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((result) => {
        console.log(result);
        document.querySelector('.characters-container').innerHTML = '';
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
          <div class="character-info">
            <div class="id">Id: ${result.data.id}</div>
            <div class="name">Id: ${result.data.name}</div>
            <div class="occupation">Id: ${result.data.occupation}</div>
            <div class="cartoon">Id: ${result.data.cartoon}</div>
            <div class="weapon">Id: ${result.data.weapon}</div>
        `;
        document.querySelector('.characters-container').append(newDiv);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  createOneRegister () {
    const btn = document.querySelector('#send-data-create');
    const name = document.querySelector('#name-create').value;
    const occupation = document.querySelector('#occupation-create').value;
    const cartoon = document.querySelector('#cartoon-create').value;
    const weapon = document.querySelector('#weapon-create').value;

    axios.post(`${this.BASE_URL}/characters`, {name, occupation, cartoon, weapon})
      .then((result) => {
        const {name, occupation, cartoon, weapon} = result.data;
      })
  }

  updateOneRegister () {
    const btn = document.querySelector('#send-data-update');
    const name = document.querySelector('#name-edit').value;
    const occupation = document.querySelector('#occupation-edit').value;
    const cartoon = document.querySelector('#cartoon-edit').value;
    const weapon = document.querySelector('#weapon-edit').value;

    axios.put(`${this.BASE_URL}/characters/${id}`, {id, name, occupation, cartoon, weapon})
      .then((result) => {
        const {id, name, occupation, cartoon, weapon} = result.data;
      })
  }

  deleteOneRegister () {

  }
}
