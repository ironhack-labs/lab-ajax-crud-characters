class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters', )
    .then((respuestaDelServidor) => {
      let datosDePersonajes = respuestaDelServidor.data

      datosDePersonajes.forEach((personaje) => {

      const chartId = personaje.id;
      const chartName = personaje.name;
      const chartOccupation = personaje.occupation;
      const chartCartoon = personaje.cartoon;
      const chartWeapon = personaje.weapon;
      // 
      const newCharacterHtml = `
     
      <div class="characters-container">
      <div class="character-info">
        <div class="name">Id: ${chartId}</div>
        <div class="name">Name: ${chartName}</div>
        <div class="occupation">Ocuppation: ${chartOccupation}</div>
        <div class="cartoon">Is a Cartoon?: ${chartCartoon}</div>
        <div class="weapon">Weapon: ${chartWeapon}</div>
      </div>
          `;
          document.getElementsByClassName("characters-container")[0].innerHTML += newCharacterHtml;

        // Clear the form after submitting:
          // document.getElementById("characters-container").reset();
      })
    })
  }


  getOneRegister (id) {
    axios.get(this.BASE_URL + `/characters/${id}` )
    .then((respuestaDelServidor) => {
      let datosDeUnPersonaje = respuestaDelServidor.data;
      
      const chartId = datosDeUnPersonaje.id;
      const chartName = datosDeUnPersonaje.name;
      const chartOccupation = datosDeUnPersonaje.occupation;
      const chartCartoon = datosDeUnPersonaje.cartoon;
      const chartWeapon = datosDeUnPersonaje.weapon;
      // 
      const newCharacterHtml = `
     
      <div class="characters-container">
      <div class="character-info">
        <div class="name">Id: ${chartId}</div>
        <div class="name">Name: ${chartName}</div>
        <div class="occupation">Ocuppation: ${chartOccupation}</div>
        <div class="cartoon">Is a Cartoon?: ${chartCartoon}</div>
        <div class="weapon">Weapon: ${chartWeapon}</div>
      </div>
          `;
          document.getElementsByClassName("characters-container")[0].innerHTML += newCharacterHtml;
     
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
