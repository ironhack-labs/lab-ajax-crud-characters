class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
        console.log('Response from API is: ', responseFromAPI.data);

        responseFromAPI.data.forEach((obj)=> {
          // let $characters = $('.character-info').clone();
          
          // $('.characters-container').append($characters);
          // $('.name').text("Character Name: " + obj.name);
          // $('.occupation').text("Character Occupation: " + obj.occupation);
          // $('.cartoon').text("Cartoon?: " + obj.cartoon);
          // $('.weapon').text("Character Weapon: " + obj.weapon);
          // $('.id').text("ID: " + obj.id);
          // debugger;
            let html = `
            <div class="character-info">
            <div class="name">Character Name: ${obj.name}</div>
            <div class="occupation">Character Occupation: ${obj.occupation}</div>
            <div class="cartoon">Cartoon?: ${obj.cartoon}</div>
            <div class="weapon">Character Weapon: ${obj.weapon}</div>
            <div class="id">ID:${obj.id}</div>
            </div>
          `
          $('.characters-container').append(html)
        });
      })
      .catch(err => {
        console.log('Error is: ', err);
      })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(responseFromAPI => {
        console.log('Response from API is: ', responseFromAPI.data);
        let html = `
            <div class="character-info">
            <div class="name">Character Name: ${responseFromAPI.data.name}</div>
            <div class="occupation">Character Occupation: ${responseFromAPI.data.occupation}</div>
            <div class="cartoon">Cartoon?: ${responseFromAPI.data.cartoon}</div>
            <div class="weapon">Character Weapon: ${responseFromAPI.data.weapon}</div>
            <div class="id">ID:${responseFromAPI.data.id}</div>
            </div>
          `
          $('.characters-container').append(html)
      })
      .catch(err => {
        console.log('Error is: ', err);
      })
  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters`, {
      "name": $('#name').val(),
      "occupation": $('#occupation').val(),
      "weapon": $('#weapon').val(),
      "cartoon": $('#checkbox').val()
    })
      .then(responseFromAPI => {
        console.log('Response from API is: ', responseFromAPI.data);
        $('#send-data').toggleClass("green");
      })
      .catch(err => {
        console.log('Error is: ', err);
        $('#send-data').toggleClass("red");
      })
  }

  
  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(responseFromAPI => {
        console.log('Response from API is: ', responseFromAPI.data);
        $('#delete-one').toggleClass("green");
      })
      .catch(err => {
        console.log('Error is: ', err);
        $('#delete-one').toggleClass("red");
      })
  }

  updateOneRegister (id) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {
      "name": $('#name-edit').val(),
      "occupation": $('#occupation-edit').val(),
      "weapon": $('#weapon-edit').val(),
      "cartoon": $('#checkbox-edit').val()
    })
    .then(responseFromAPI => {
      console.log('Response from API is: ', responseFromAPI.data);
      $('#send-edit').toggleClass("green");
    })
    .catch(err => {
      console.log('Error is: ', err);
      $('#send-edit').toggleClass("red");
    })
  }}
