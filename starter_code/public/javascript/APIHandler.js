///// --[#]-- [CONSTRUCTOR] ----- >>>>>
  class APIHandler
  {
    constructor (baseUrl)
      {
      this.BASE_URL = baseUrl;
      }

  ///// --[#]-- [METHODS] ----- >>>>>

    ///// --[#]-- [GET FULL LIST] ----- >>>>>
        getFullList () {

        $.ajax
          ({
            url    : this.BASE_URL + '/characters/',
            method : 'GET',
            success: (res) =>
              {
                console.log(res);
                $('.characters-container').empty();
                res.forEach( (character) =>
                  {
                    $('.characters-container').append(`
                      <div class="character-info">
                      <div class="name">Character Name:             <span>${character.name}</span></div>
                      <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
                      <div class="debt">Character Debt:             <span>${character.debt}</span></div>
                      <div class="weapon">Character Weapon:         <span>${character.weapon}</span></div>
                      </div>
                    `);
                  }
                );
              },
            error  : (err)    =>
              {
                console.log(err);
              }
          });

      }
    ///// --[@]-- [GET FULL LIST] ----- -END- <= DONE

    ///// --[#]-- [GET ONE] ----- >>>>>
        getOneRegister (characterId) {

        $.ajax
          ({
            url    : this.BASE_URL + '/characters/' +characterId,
            method : 'GET',
            success: (res) =>
            {
              console.log(res);
              $('#disp-name').html(res.name);
              $('#disp-occupation').html(res.occupation);
              $('#disp-debt').html(res.debt);
              $('#disp-weapon').html(res.weapon);
            },
            error  : (err)    =>
            {
              console.log('Error: ' +err);
            }
          });

      }
    ///// --[@]-- [GET ONE] ----- -END- <= DONE

    ///// --[#]-- [CREATE ONE] ----- >>>>>
        /* TODO: WRITE */
      createOneRegister (data) {
        $.ajax
          ({
            url    : this.BASE_URL + '/characters',
            method : 'POST',
            data   : data,
            success: (res) =>
            {
              console.log(res);
            },
            error  : (err)    =>
            {
              console.error(err);
            }
          });
      }
    ///// --[@]-- [CREATE ONE] ----- -END- <= DONE

    ///// --[#]-- [UPDATE ONE]----- >>>>>
      // /* TODO: WRITE */
      updateOneRegister (data, id) {
        $.ajax
          ({
            url    : this.BASE_URL + '/characters/' +id,
            method : 'PATCH',
            data   : data,
            success: (res) =>
            {
              console.log(res);
            },
            error  : (err)    =>
            {
              console.error(err);
            }
          });
      }
    ///// --[@]-- [UPDATE ONE]----- -END- <= DONE

    ///// --[#]-- [DELETE ONE] ----- >>>>>
        /* TODO: WRITE */
      deleteOneRegister (characterId) {
        $.ajax
          ({
            url    : this.BASE_URL + '/characters/' +characterId,
            method : 'DELETE',
            success: (res) =>
            {
              console.log(res);
            },
            error  : (err)    =>
            {
              console.log('Error: ' +err);
            }
          });
      }
    ///// --[@]-- [DELETE ONE] ----- -END- <= DONE

  ///// --[@]-- [METHODS] ----- -END-

  }
///// --[@]-- [CONSTRUCTOR] ----- -END-