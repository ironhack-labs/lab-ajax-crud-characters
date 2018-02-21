class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+ "/characters")
    .then(response => {
        $(".characters-container").empty();
        response.data.forEach(oneResponse => {
          const myHtml = $(`
            <div class="character-info">
            <div class="name">Char name: <span>${oneResponse.name}</span> </div>
            <div class="occupation">Occupation: <span>${oneResponse.ccupation}</span></div>
            <div class="debt">Debt:<span>${oneResponse.debt}</span></div>
            <div class="weapon">Weapon: <span>${oneResponse.weapon}</span></div>
            </div>
          `)
          $(".characters-container").append(myHtml);
        });
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error);
    })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
        console.log(response);
        $(".characters-container").empty();
        const myHtml = $(`
            <div class="character-info">
            <div class="name">Char name: <span>${response.data.name}</span> </div>
            <div class="occupation">Occupation: <span>${response.data.occupation}</span></div>
            <div class="debt">Debt:<span>${response.data.debt}</span></div>
            <div class="weapon">Weapon: <span>${response.data.weapon}</span></div>
            </div>
          `)
          $(".characters-container").append(myHtml);
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error);
    })
  }

  createOneRegister () {
    const characterInfo = {
      name: document.getElementById("new-name").value,
      occupation: document.getElementById("new-occupation").value,
      debt: document.getElementById("new-debt").value,
      weapon: document.getElementById("new-weapon").value
    };
  
    axios.post(this.BASE_URL + "/characters", characterInfo)
      .then(response => {
          this.getFullList();
      })
      .catch(error => {
          console.log(error)
      })
  }

  updateOneRegister () {
    
    const charId = document.getElementById("edit-id").value;
    
    const editedCharacterInfo = {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      debt: document.getElementById("edit-debt").value,
      weapon: document.getElementById("edit-weapon").value
    };
  
    axios.patch(`${this.BASE_URL}/characters/${charId}`, editedCharacterInfo)
      .then(response => {
          this.getFullList();
      })
      .catch(error => {
          console.log(error)
      })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      this.getFullList();
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error);
    })  
  }
}
