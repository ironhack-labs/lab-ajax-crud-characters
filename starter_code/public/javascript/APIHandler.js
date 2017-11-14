class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
  $.ajax({
    url: "http://ih-crud-api.herokuapp.com/characters",
    method: "GET",
    success: function (response) {
      $('.character-info').remove();
      for(let i = 0; i < response.length; i++){
        console.log(response[i]);
        $('.characters-container').append(
          '<div class="character-info">' +
            '<div class="name">Name: ' + response[i].name + '</div>' +
            '<div class="occupation">occupation: ' + response[i].occupation + '</div>' +
            '<div class="debt">Debt: ' + response[i].debt + '</div>' +
            '<div class="weapon">weapon: ' + response[i].weapon + '</div>' +
          '</div>'
        )
      }
    },
    error: function (err) {
      console.log(err);
    },
  })

  }

  getOneRegister (id) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/" + id,
      method: "GET",
      success: function (response) {
        $('.character-info').remove();
          console.log(response);
          $('.characters-container').append(
            '<div class="character-info">' +
              '<div class="name">Name: ' + response.name + '</div>' +
              '<div class="occupation">occupation: ' + response.occupation + '</div>' +
              '<div class="debt">Debt: ' + response.debt + '</div>' +
              '<div class="weapon">weapon: ' + response.weapon + '</div>' +
            '</div>'
          )
      },
      error: function (err) {
        console.log(err);
      },
    })

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}

// function removeAndDrawDivs (response){
//   let div = document.querySelector('.character-info');
//     $('.character-info').remove();
//     response.forEach(e => {
//       let clone = div.cloneNode(true)
//       clone.querySelector('.id').innerHTML = e.id;
//     })
// }
