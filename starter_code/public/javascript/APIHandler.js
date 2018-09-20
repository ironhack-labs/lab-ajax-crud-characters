class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get("http://localhost:8000/characters")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  getOneRegister(id) {
    
    
    axios.get("http://localhost:8000/characters/" + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }



  createOneRegister(newName,newOccupation,newWeapon,newCartoon) {
    const objet = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newCartoon
    };
    axios.post("http://localhost:8000/characters", objet)
      .then(response => {
        console.log("Añadido!!");
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }

  updateOneRegister(id,edName,edOccupation,edWeapon,edCartoon) {
    const objet = {
      name: edName,
      occupation: edOccupation,
      weapon: edWeapon,
      cartoon: edCartoon
    };
    axios.put(`http://localhost:8000/characters/`+id , objet)
    .then(response => {
      console.log("Actualizado!!");
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }



  deleteOneRegister(id) {
    axios.delete("http://localhost:8000/characters/" + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

}

