class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   axios.get(this.BASE_URL + `/characters`)
    .then(response => {
       console.log(response.data);
    
  }).catch(error => {
            console.log("Oh No! Error!");
            console.log(error);
  })
  }
   
  getOneRegister () {
    const charId = document.getElementById("char-id").value;
    axios.get(this.BASE_URL + `/characters/${charId}`)
    .then(response => {
       console.log(response.data);
    
  }).catch(error => {
            console.log("Oh No! Error!");
            console.log(error);
  })

}

  createOneRegister (e) {
    const charInfo = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      debt: e.target.debt.checked,
      weapon: e.target.weapon.value
      };
    axios.post(this.BASE_URL + `/characters`, charInfo)
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })

  }

  //getting error with update
  updateOneRegister(e) {
    const updateChar = {
       name: e.target.name.value,
       occupation: e.target.occupation.value,
       debt: e.target.debt.checked,
       weapon: e.target.weapon.value
       };
      const charId = e.target.charId.value;

    axios.patch(this.BASE_URL + `/characters/${charId}`, updateChar)
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })
  }
  

  deleteOneRegister () {
      const charIdDelete = document.getElementById("char-id-delete").value;
       axios.delete(this.BASE_URL + `/characters/${charIdDelete}`)
       .then(result => {
        console.log(result.data)
      }).catch(error => {
         console.log(error);
       })
  }
}

