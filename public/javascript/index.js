const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then((res) => {
        card(res.data)
      })
      .catch((err) => console.error(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id)
      .then((res) => {
        let data = [res.data]
        card(data);
      })
      .catch((err) => { alert('Not found'); console.error(err) })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(id)
      .then(() => {
        alert('Character removed');
      })
      .catch((err) => { alert('Not found'); console.error(err) })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let data = characterUpdated("edit-character-form")
    charactersAPI.updateOneRegister(data.id, data)
      .then((res) => {
        alert('Updated character');
      })
      .catch((err) => { alert(err); console.error(err) })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let data = characterUpdated("new-character-form")
    if (!data.name || !data.occupation || !data.weapon) {
      alert('Complete all the writing fields')
    } else {
      charactersAPI.createOneRegister(data)
        .then((res) => {
          console.log('Created character');
        })
        .catch((err) => console.error(err))
    }
  });
})

const characterUpdated = (idForm) => {
  const myForm = document.getElementById(idForm);
  let formData = new FormData(myForm);
  formData = ([...formData.entries()])
  let data = {}
  formData.forEach(e => {
    if (e[1]) {
      data[`${e[0]}`] = e[1]
    }
  })
  if (!data.cartoon) { data.cartoon = "false" }
  return data;
}

const card = (data) => {
  document.querySelector('.characters-container').innerHTML = "";
  data.forEach(character => {
    console.log(character.name)
    let { id, name, occupation, weapon, cartoon } = character;
    let div = document.createElement("div");
    div.className = "character-info";
    div.innerHTML = `
    <div class="name"><u>Id:</u><span> ${id}</span></div>
    <div class="name"><u>Name:</u><span> ${name}</span></div>
    <div class="occupation"><u>Occupation:</u> <span>${occupation}</span></div>
    <div class="weapon"><u>Weapon:</u> <span>${weapon}</span></div>
    <div class="cartoon"><u>Is a Cartoon?</u> <span>${cartoon}</span></div>`
    document.querySelector('.characters-container').appendChild(div);
  });
}
