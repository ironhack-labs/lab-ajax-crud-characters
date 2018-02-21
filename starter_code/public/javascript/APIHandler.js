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

  createOneRegister () {
    const nameNew = $("#nameId").val(); 
    const occupationNew = $("#occupationId").val(); 
    const weaponNew = $("#weaponId").val(); 
    const debtNew = $("#debtId").val(); 
    const characterInfo = {
      name:  nameNew,
      occupation: occupationNew,
      weapon: weaponNew,
      debt: debtNew 
    };

    axios.post(this.BASE_URL+`/characters/`, characterInfo)
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })
    

  }

  updateOneRegister () {
    const idEdit = $("#idEdit").val(); 
    const nameNew = $("#nameEdit").val(); 
    const occupationNew = $("#occupationEdit").val(); 
    const weaponNew = $("#weaponEdit").val(); 
    const debtNew = $("#debtEdit").val(); 
    const characterInfo = {
      id:idEdit,
      name:  nameNew,
      occupation: occupationNew,
      weapon: weaponNew,
      debt: debtNew 
    };
    axios.patch(this.BASE_URL+"/characters/"+idEdit, characterInfo)
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })
    

  }

  deleteOneRegister () {
    const charId = document.getElementById("char-id1").value;
    axios.delete(this.BASE_URL + `/characters/${charId}`)
    .then(response => {
       console.log(response.data);
    
  }).catch(error => {
            console.log("Oh No! Error!");
            console.log(error);
  })
  }
}