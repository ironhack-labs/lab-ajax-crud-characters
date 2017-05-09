class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  _clearVision(){
    $(".characters-container").html(`
      <div class='character-info'>
      <div class='name'>Character Name</div>
      <div class="occupation">Character Occupation</div>
      <div class="debt">Character Debt</div>
      <div class="weapon">Character Weapon</div>
      </div>

      `);
  }
  getFullList () {
    $.ajax ({
      url: this.BASE_URL + "/characters",
      method: "GET",
      dataType: "json",
      success: (response)=> {
        this._clearVision();
        response.forEach((elem, index)=>{
          if(index === 0){
            $(".character-info .name").html(elem.name);
            $(".character-info .occupation").html(elem.occupation);
            $(".character-info .debt").html(elem.debt);
            $(".character-info .weapon").html(elem.weapon);
          } else {
            $(".characters-container").append(`
              <div class='character-info'>
              <div class='name'>${elem.name}</div>
              <div class="occupation">${elem.occupation}</div>
              <div class="debt">${elem.debt}</div>
              <div class="weapon">${elem.weapon}</div>
              </div>
              `);
          }
        });
        console.log(response);
      },
      error: (error) => {
        console.log(error);
        $(".character-info .name").html("Character Name");
        $(".character-info .occupation").html("Character Occupation");
        $(".character-info .debt").html("Character Debt");
        $(".character-info .weapon").html("Character Weapon");
      },
    });
  }

  getOneRegister (id) {
    $.ajax ({
      url: this.BASE_URL + "/characters/" + String(id),
      method: "GET",
      dataType: "json",
      success: (response)=> {
        this._clearVision();
        console.log(response);
        $(".character-info .name").html(response.name);
        $(".character-info .occupation").html(response.occupation);
        $(".character-info .debt").html(response.debt);
        $(".character-info .weapon").html(response.weapon);
        $('#fetch-one').removeClass("fail");
        $('#fetch-one').addClass("success");

      },
      error: (error) => {
        console.log(`${id} not found`);
        $('#fetch-one').removeClass("success");
        $('#fetch-one').addClass("fail");
        this._clearVision();
      },

    });
  }

  createOneRegister (userData) {
   $.ajax ({
     url: this.BASE_URL + "/characters",
     method: "POST",
     data: userData,
     success: () => {
       $('#new-character-form button').removeClass("fail");
       $('#new-character-form button').addClass("success");

   },
     error: (error) => {
       $('#new-character-form button').removeClass("success");
       $('#new-character-form button').addClass("fail");

     },
   });
  }

  updateOneRegister (userData, id) {
    $.ajax ({
      url: this.BASE_URL + "/characters/" + String(id),
      method: "PATCH",
      data: userData,
      success: (patchResponse) => {
        $('#edit-character-form button').removeClass("fail");
        $('#edit-character-form button').addClass("success");
        console.log(patchResponse);
      },
      error: (error)=> {
        $('#edit-character-form button').removeClass("success");
        $('#edit-character-form button').addClass("fail");
      }
    });
  }

  deleteOneRegister (id) {
    $.ajax ({
      url: this.BASE_URL + "/characters/" + String(id),
      method: "DELETE",
      success: ()=> {
        $('#delete-one').removeClass("fail");
        $('#delete-one').addClass("success");

      },
      error: (error) => {
        $('#delete-one').removeClass("success");
        $('#delete-one').addClass("fail");
    },
    });
  }
}
