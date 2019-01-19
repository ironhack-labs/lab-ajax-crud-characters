//Fonction pour recuperer les donnees de json et les affichier sur le fichier html
function renderCharacter(json) {
  return `<div class="character-info">
  <div class="name">${json.name}</div>
  <div class="occupation">${json.occupation}</div>
  <div class="cartoon">${json.cartoon}</div>
  <div class="weapon">${json.weapon}</div>
</div>`;
}


class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Get all the characters info from http://localhost:8000/characters

  getFullList() {
    axios.get('http://localhost:8000/characters')
      .then(response => {
        console.log(response.data, response.data.length) // renvoie un tableau [ {}, {},{} ]
        let str = ""; //variable vide a remplir
        response.data.forEach(character => { //fonction pour afficher les données json pour chaque objet listé
          str += renderCharacter(character);
        })
        document.getElementById("character-info").innerHTML = str;

      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }



getOneRegister(id) {
  axios.get('http://localhost:8000/characters/' + id)
    .then(response => {
    console.log (response.data);
    })
    .catch(error => {
      console.log('Oh No! Error is: ', error);
    })
}
}

// createOneRegister () {

// }

// updateOneRegister () {

// }

// deleteOneRegister () {

// }
// }