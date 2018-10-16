const allData = (name, occupation, weapon, cartoon) => {
  $( ".characters-container" ).append( `<div class='character-info'><div class='name'><strong>Name:</strong> ${name}</div><div class='occupation'><strong>Occupation:</strong> ${occupation}</div><div class='cartoon'><strong>Is cartoon?</strong> ${cartoon}</div><div class='weapon'><strong>Has weapon?</strong> ${weapon}</div></div>` )
}

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
      axios.get(`${this.BASE_URL}/characters`)
      .then(res => {
        console.log(res.data);
        res.data.forEach(e => {
          allData(e.name, e.occupation, e.weapon, e.cartoon);
        });
      });
  }

  getOneRegister(charID) {
    axios.get(`${this.BASE_URL}/characters/${charID}`)
    .then(res => {
      allData(res.data.name, res.data.occupation, res.data.weapon, res.data.cartoon)
      console.log(res.data);
    });
}

createOneRegister(name, occupation, weapon, cartoon) {
  const newChar = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon
  }
  axios.post(`${this.BASE_URL}/characters`, newChar)
  .then( () => {
    this.getFullList();
  })
  console.log(newChar)
}

updateOneRegister(ID, name, occupation, weapon, cartoon) {
  const updateInfo = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon
  }
  axios.patch(`${this.BASE_URL}/characters/${ID}`, updateInfo)
  .then( () => {
    this.getFullList();
  })
}

deleteOneRegister(ID) {
  axios.delete(`${this.BASE_URL}/characters/${ID}`)
  .then( () => {
  this.getFullList();
})
}
}