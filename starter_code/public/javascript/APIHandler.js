class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (url) {
    $.ajax({
      url: this.BASE_URL + url,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
        },
      });

  }

  getOneRegister (url) {
    $.ajax({
      url: this.BASE_URL + url,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
        },
      });

  }

  createOneRegister (name, occ, weap, debt) {
    const characterInfo={
      name : name,
      occupation : occ,
      weapon : weap,
      debt : debt
    };

    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "POST",
      data: characterInfo,
      success: function (postResponseresponse) {
        console.log(postResponseresponse);
      },
      error: function (err) {
        console.log(err);
        },
      });


  }


  updateOneRegister(url, charId) {

      $.ajax({
        method: 'PATCH',
        url: this.BASE_URL + url + charId,
        data: updateInfo,
        success: (patchResponse) => {
        console.log('Update!');
        console.log(patchResponse);
            },
        error: handleError
        });
    }

  deleteOneRegister(url, charid) {
    $.ajax ({
        method: 'DELETE',
        url: this.BASE_URL + url + charid,
        success: (patchResponse) => {
            console.log('Character has been successfully deleted');
        },
        error: handleError
    });
  }
};
function showFeedback(postResponse) {
    console.log('post success');
    console.log(postResponse);
}

function handleError(err) {
    console.log('Oh no! Error:');
    console.log(err);
};
