class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return $.ajax({
        url:`${this.BASE_URL}/characters`,
      });
      //de forma predeterminada devuelve un json
  }

  getOneRegister (one) {
    return $.ajax({
      url:`${this.BASE_URL}/characters/${one}`
    });

  }

  createOneRegister () {
        $.ajax({
          url     : this.BASE_URL + "/characters",
          data    : characterInfo,
          method  : "POST",
          success : (response) => {
                      showFeedback( response, 'create');
                    },
          error   : (response) => {
                      handleError( response, 'create');
                    },
        });
  }

  updateOneRegister () {
    $.ajax({
      url     : this.BASE_URL + "/characters" + characterInfo.id,
      data    : characterInfo,
      method  : "PATCH",
      success : (response) => {
                  showFeedback( response, 'create');
                },
      error   : (response) => {
                  handleError( response, 'create');
                },
    });
  }

  deleteOneRegister () {

  }
}
