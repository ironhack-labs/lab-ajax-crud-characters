class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

    getFullList (){
      $.ajax({
        url: "https://ih-api.herokuapp.com/characters",
        method: "GET",
        success: function (response) {
          console.log(response);
        },
        error: function (err) {
          console.log(err);
        },
      });
  }

  getOneRegister (id) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/"+id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister () {
      event.preventDefault();

      function showFeedback (postResponse) {
        console.log('post success');
        console.log(postResponse);
        const newCharacterHtml = `
          <li>
            <h3> ${postResponse.name} </h3>
            <p> Id: ${postResponse.id} </p>
          </li>
        `;

        $('#characters-list').append(newCharacterHtml);
      }

      function handleError (err) {
        console.log('Oh no! Error:');
        console.log(err);
      }



      const characterInfo = {
        name:        $("input[name*='name']").val(),
        occupation:  $("input[name*='occupation']").val(),
        weapon:      $("input[name*='weapon']").val(),
        debt:        $("input[type*='checkbox']").val(),
      };

      $.ajax({
        type: 'POST',
        url: 'https://ih-api.herokuapp.com/characters',
        data: characterInfo,
        success: showFeedback,
        error: handleError
      });

  }

  updateOneRegister () {
//not done
  }


  deleteOneRegister (id) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/"+id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}
