class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then((result)=>{
        document.getElementById('characters-container').innerHTML = ''
        result.data.forEach((character) => {
          const newDiv = document.createElement('div')
          newDiv.innerHTML = `
          <div class="character-info">
            <div class="id">Id: ${character.id}</div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
          document.getElementById('characters-container').append(newDiv)
        });
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  getOneRegister () {
    const id = document.getElementById('character-id').value
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((result)=>{
        document.getElementById('characters-container').innerHTML = '';
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="character-info">
          <div class="id">Id: ${result.data.id}</div>
          <div class="name">Name: ${result.data.name}</div>
          <div class="occupation">Occupation: ${result.data.occupation}</div>
          <div class="cartoon">Cartoon: ${result.data.cartoon}</div>
          <div class="weapon">Weapon: ${result.data.weapon}</div>
        </div>
        `
        document.getElementById('characters-container').append(newDiv)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  createOneRegister () {
    const button = document.getElementById('send-data-create')
    const name = document.getElementById('name-create').value
    const occupation = document.getElementById('occupation-create').value
    const weapon = document.getElementById('weapon-create').value
    const cartoon = document.getElementById('cartoon-create').value
    axios.post(`${this.BASE_URL}/characters`, {name, occupation, weapon, cartoon})
      .then((result)=>{
        console.log(result)
        button.setAttribute("style", "background: green")
      })
      .catch((err)=>{
        console.log(err)
        button.setAttribute("style", "background: red")
      })
  }

  updateOneRegister () {
    const button = document.getElementById('send-data')
    const id = document.getElementById('id-edit').value
    const name = document.getElementById('name-edit').value
    const occupation = document.getElementById('occupation-edit').value
    const weapon = document.getElementById('weapon-edit').value
    const cartoon = document.getElementById('cartoon-edit').value
    axios.put(`${this.BASE_URL}/characters/${id}`, {name, occupation, cartoon, weapon})
      .then((result)=>{
        console.log(result)
        button.setAttribute("style", "background: green")
      })
      .catch((err)=>{
        console.log(err)
        button.setAttribute("style", "background: red")
      })
  }

  deleteOneRegister () {
    const id = document.getElementById('character-id-delete').value
    const button = document.getElementById('delete-one')
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((result)=>{
        button.setAttribute("style", "background: green")
      })
      .catch((err)=>{
        button.setAttribute("style", "background: red")
      })
  }
}
