class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then((response) => {
        const containerPrincipal = document.getElementsByClassName('characters-container');
        containerPrincipal[0].innerHTML = '';
        response.data.forEach((element) => {
          const text = `
          <div class="character-info">
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
          </div>`;
          containerPrincipal[0].innerHTML += text;
        });
      });
  }

  getOneRegister() {
    const inputId = $('input[name=character-id]').val();
    axios.get(`${this.BASE_URL}/characters/${inputId}`)
      .then((response) => {
        const containerPrincipal = document.getElementsByClassName('characters-container');
        containerPrincipal[0].innerHTML = '';
        const text = `
        <div class="character-info">
        <div class="name">Name: ${response.data.name}</div>
        <div class="occupation">Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
        <div class="weapon">Weapon: ${response.data.weapon}</div>
        </div>`;
        containerPrincipal[0].innerHTML = text;
      });
  }

  createOneRegister() {
    const name = $('input[name=name-create]').val();
    const occupation = $('input[name=occupation-create]').val();
    const weapon = $('input[name=weapon-create]').val();
    const cartoon = $('input[name=cartoon-update]').val();
    axios.post(`${this.BASE_URL}/characters`, { name, occupation, weapon, cartoon })
      .then(() => {
        console.log('created!');
      });
  }

  updateOneRegister() {
    const name = $('input[name=name-update]').val();
    const occupation = $('input[name=occupation-update]').val();
    const weapon = $('input[name=weapon-update]').val();
    const cartoon = $('input[name=cartoon-update]').val();
    const id = $('input[name=chr-id]').val();
    axios.put(`${this.BASE_URL}/characters/${id}`, { name, occupation, weapon, cartoon }).then((response) => {
      console.log('updated!');
    });
  }

  deleteOneRegister() {
    const inputId = $('input[name=character-id-delete]').val();
    axios.delete(`${this.BASE_URL}/characters/${inputId}`)
      .then((response) => {
        console.log(response.data);
      });
  }
}
