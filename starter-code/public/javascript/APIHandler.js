class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
        console.log('Response from API is:', responseFromAPI.data)
        responseFromAPI.data.forEach((obj)=> {

          // $(".id").html("Id: " + obj.id)
          // $(".name").html("Name: " + obj.name)
          // $(".occupation").html("Occupation: " + obj.occupation)
          // if(obj.cartoon == "on"){
          //   $(".cartoon").html("Is a Cartoon?: true")
          // }
          // else{
          //   $(".cartoon").html("Is a Cartoon?: false")
          // }       
          // $(".weapon").html("Weapon: " + obj.weapon)

          let is=""

          if(obj.cartoon == "on"){
            is = true
          }
          else{
            is = false
          }

          let html = 
          
          `
          <div class="character-info">
          <div class="id">Id: ${obj.id}</div>
          <div class="name">Name: ${obj.name}</div>
          <div class="occupation">Occupation: ${obj.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${is}</div>
          <div class="weapon">Weapon: ${obj.weapon}</div>
          </div>
          `

          $('.characters-container').append(html)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getOneRegister (id) {
    console.log(id)
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(responseFromAPI => {
      let choice = responseFromAPI.data
      console.log('Response from API is: ', responseFromAPI.data);
      // responseFromAPI.data.forEach((obj)=> {
        $(".id").html("Id: " + choice.id)
        $(".name").html("Name: " + choice.name)
        $(".occupation").html("Occupation: " + choice.occupation)
        if(choice.cartoon == "on"){
          $(".cartoon").html("Is a Cartoon?: true")
        }
        else{
          $(".cartoon").html("Is a Cartoon?: false")
        }       
        $(".weapon").html("Weapon: " + choice.weapon)

    })
    .catch(err => {
      console.log(err);
    })
  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters`, {
      "name": $('#name').val(),
      "occupation": $('#occupation').val(),
      "debt": $('#debt').val(),
      "weapon": $('#weapon').val(),
      "cartoon": $('#cartoon').val(),
    })
    .then(responseFromAPI => {
      console.log('Response from API is:', responseFromAPI.data)
      $(".1st-send").removeClass("red")
      $(".1st-send").addClass("green")
    })
    .catch(err => {
      $(".1st-send").removeClass("green")
      $(".1st-send").addClass("red")
      console.log(err);
    })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(responseFromAPI => {
      console.log('Response from API is:', responseFromAPI.data)
      $("#delete-one").removeClass("red")
      $("#delete-one").addClass("green")
    })
    .catch(err => {
      console.log(err);
      $("#delete-one").removeClass("green")
      $("#delete-one").addClass("red")
    })
  }

  updateOneRegister (id) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {
      "name": $('#name-edit').val(),
      "occupation": $('#occupation-edit').val(),
      "debt": $('#debt-edit').val(),
      "weapon": $('#weapon-edit').val(),
      "cartoon": $('#cartoon-edit').val(),
    })
    .then(responseFromAPI => {
      console.log('Response from API is:', responseFromAPI.data)
      console.log(responseFromAPI.name, "deleted")
      $(".2nd-send").removeClass("red")
      $(".2nd-send").addClass("green")
    })
    .catch(err => {
      console.log(err);
      $(".2nd-send").removeClass("green")
      $(".2nd-send").addClass("red")
    })
  }
}



// for(let i=0; i < responseFromAPI; i++){
//   $(".id").html(responseFromAPI[0].id)
//   $(".name").html(responseFromAPI[0].name)
//   $(".occupation").html(responseFromAPI[0].occupation)
//   $(".cartoon").html(responseFromAPI[0])
//   $(".weapon").html(responseFromAPI[0].weapon)
// }