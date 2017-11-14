class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "GET",
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });
  };

  getOneRegister (id) {
    $.ajax({
  url: this.BASE_URL + "/characters/"+id,
  method: "GET",
  success: function(response) {
    removeAndDrawDivs(response);
    console.log(response);
  },
  error: function(err) {
    console.log("cagada");
  }
});
};


  createOneRegister() {
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "POST",
      // data: characterInfo,
      success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });

  };


  updateOneRegister() {

  }

  deleteOneRegister(id) {
    $.ajax({
        url: this.BASE_URL + "/characters/"+id,
      method: "DELETE",
        success: function(response) {
        removeAndDrawDivs(response);
        console.log(response);
      },
      error: function(err) {
        console.log("cagada");
      }
    });

  };


};

//hacemos funcion xq hay un chorro para borrar
function removeAndDrawDivs(response) {
  let div = document.querySelector(".character-info");
  console.log(div);
  $(".character-info").remove();
};
