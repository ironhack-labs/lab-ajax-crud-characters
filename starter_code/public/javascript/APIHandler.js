class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    //ih-api.herokuapp.com/characters
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',
      success: (data) => {
        console.log(data);
        data.forEach(actor => {
            $('.info-list').append(`
              <li>
                <h3>${actor.name}</h3>
                <p>${actor.occupation}</p>
                <p>${actor.debt}</p>
                <p>${actor.weapon}</p>
              </li>
              `);
        });
      },
      error: (err) => {
        console.log(err);
      }
    }
  );
  }

  getOneRegister (id) {
    $.ajax( {
      url: 'https://ih-api.herokuapp.com/characters/'+id,
      method: 'GET',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  createOneRegister(char) {
    $.ajax( {
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'POST',
      data: char,
      success: (data) => {
        console.log(data);
        $('#send-data').css('background-color','green');
      },
      error: (err) => {
        console.log(err);
        $('#send-data').css('background-color','red');
      }
    });
  }

  updateOneRegister (info,id) {
    $.ajax(
      {
        url: 'https://ih-api.herokuapp.com/characters/' + id,
        method: 'PATCH',
        data: info,
        success: (data) => {
          console.log('UPDATED -------> ');
          console.log(data);
          $('#edit-data').css('background-color','green');
        },

        error: (err) => {
          console.log('ERR');
          console.log(err);
          $('#edit-data').css('background-color','red');
        }
      }
    );
  }

  deleteOneRegister (id) {
    $.ajax( {
      url: 'https://ih-api.herokuapp.com/characters/'+id,
      method: 'DELETE',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
