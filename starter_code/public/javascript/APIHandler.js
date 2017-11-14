class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let url = this.BASE_URL + '/characters';
    $.ajax({
      url: url,
      success: (charList) => {
        console.log(charList);
        charList.forEach( (e, i) => {
          let newDiv;
          if (i > 0) {
            newDiv = $('.character-info:first').clone().appendTo('.characters-container')
          } else {
            newDiv = $('.character-info:first');
              newDiv.prepend(`<div class="id">Id: ${e.id}</div>`);
          }
            newDiv.children('.id').text(`Id: ${e.id}`);
            newDiv.children('.name').text(`Character Name: ${e.name}`);
            newDiv.children('.occupation').text(`Character Ocupation: ${e.occupation}`);
            newDiv.children('.debt').text(`Character Debt: ${e.debt}`);
            newDiv.children('.weapon').text(`Character Name: ${e.weapon}`)
        })
      }
    });
  }

  getOneRegister (id) {
    let url = this.BASE_URL + '/characters/' + id;
    $.ajax({
      url: url,
      success: (char) => {
        console.log(char);
        let newDiv = $('.character-info:first').clone();
        $('.characters-container').empty().append(newDiv);
        newDiv.children('.name').text(`Character Name: ${char.name}`);
        newDiv.children('.occupation').text(`Character Ocupation: ${char.occupation}`);
        newDiv.children('.debt').text(`Character Debt: ${char.debt}`);
        newDiv.children('.weapon').text(`Character Name: ${char.weapon}`);
        if(newDiv.children('.id')) {
          newDiv.children('.id').text(`Id: ${char.id}`);
        } else {
          newDiv.prepend(`<div class="id">Id: ${char.id}</div>`);
        }
      }
    });
  }

  createOneRegister (newChar) {
    let url = this.BASE_URL + '/characters';
    $.ajax({
      type: "POST",
      url: url,
      data: newChar,
      success: (newChar) => {
        console.log(newChar);
        $('#new-character-form button').css('background-color', 'green');
      },
      error : () => {
        console.log("Input fields can't be empty!")
        $('#new-character-form button').css('background-color', 'red');
      },
    });
  }

  updateOneRegister (id, newChar) {
    let url = this.BASE_URL + '/characters/' + id;
    $.ajax({
      type: "PATCH",
      url: url,
      data: newChar,
      success: (newChar) => {
        console.log(newChar);
        $('#edit-character-form button').css('background-color', 'green');
      },
      error : () => {
        $('#edit-character-form button').css('background-color', 'red');
      },
    });
  }

  deleteOneRegister (id) {
    let url = this.BASE_URL + '/characters/' + id;
    $.ajax({
        type: "DELETE",
        url: url,
        success: () => {
          console.log("Character has been successfully deleted");
          $('#delete-one').css('background-color', 'green');
        },
        error : () => {
          console.log("Character not found");
          $('#delete-one').css('background-color', 'red');
        },
      });
    }
  }
