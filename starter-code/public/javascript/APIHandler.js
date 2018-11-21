class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList () {
    $(".characters-container").empty()
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

  createOneRegister (name, occupation, weapon, cartoon) {

    var name = document.getElementsByName("name")[0].value;
    var occupation = document.getElementsByName("occupation")[0].value;
    var weapon = document.getElementsByName("weapon")[0].value;
    var IsAcartoon = document.getElementsByName("cartoon")[0].checked;

    const creating = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: IsAcartoon,
   };
  
    axios.post(this.BASE_URL + `/characters`,creating)

    .then(response => {
        console.log('post successful and the response is: ',response );
    })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })

   
  };
  

  updateOneRegister (editId) {
  
      let datosDeUnPersonaje = respuestaDelServidor.data;
    console.log(datosDeUnPersonaje)

    var name = document.getElementById("name1").value;
    var occupation = document.getElementById("occupation1").value;
    var weapon = document.getElementById("weapon1").value;
    var IsAcartoon = document.getElementById("cartoon1").checked;

    const updating = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: IsAcartoon,
   };
  
    axios.patch(this.BASE_URL + `/characters/${editId}`,updating)

    .then(response => {
        console.log('post successful and the response is: ',response );
    })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })

    
  }

  deleteOneRegister (idDel) {
      axios.delete(this.BASE_URL + `/characters/${idDel}` )
      .then((respuestaDelServidor) => {
        let datosDeUnPersonaje = respuestaDelServidor.data;
      console.log(datosDeUnPersonaje)
      })
     
      }}
