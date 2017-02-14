class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
     type:    'GET',
     url:     `${this.BASE_URL}/characters`,
     success: function (response) {
       response.forEach(function(element){
         const newCharacterHtml = `
            <li>
              <h3>${element.name} </h3>
              <p>Occupation: ${element.occupation} </p>
              <p>Debt: ${element.debt} </p>
              <p>Weapon: ${element.weapon} </p>
              <p>Id: ${element.id} </p>
            </li>
          `;
       return $('#display').append(newCharacterHtml);
       });
       },
     error: function (err) {console.log(err);}
    });
  }

  getOneRegister() {
    var id =$("input[name='character-id']").val();
    $.ajax({
     type:    'GET',
     url:     `${this.BASE_URL}/characters/${id}`,
     success: function (response) {
         console.log(response);
         const newCharacterHtml = `
            <li>
              <h3>${response.name} </h3>
              <p>Occupation: ${response.occupation} </p>
              <p>Debt: ${response.debt} </p>
              <p>Weapon: ${response.weapon} </p>
              <p>Id: ${response.id} </p>
            </li>
          `;
       return $('#display').append(newCharacterHtml);
       },
     error: function (err) {console.log(err);}
    });
  }

  createOneRegister() {
    const characterInfo = {
       name: $("input[name='name']").val(),
       occupation: $("input[name='occupation']").val(),
       debt: $("input[name='debt']").is(":checked"),
       weapon: $("input[name='weapon']").val()
     };
    $.ajax({
     type:    'POST',
     url:     `${this.BASE_URL}/characters`,
     data: characterInfo,
     success: function (response) {
       console.log(characterInfo);
       },
     error: function (err) {console.log(err);}
    });
  }

  updateOneRegister() {
    const updateInfo = {
       id: $("input[name='chr-id']").val(),
       name: $("input[name='name']").val(),
       occupation: $("input[name='occupation']").val(),
       debt: $("input[name='debt']").is(":checked"),
       weapon: $("input[name='weapon']").val()
     };
     const id = $("input[name='character-id']").val();
    $.ajax({
     type:    'PATCH',
     url:     `${this.BASE_URL}/characters/${id}`,
     data: updateInfo,
     success: function (response) {
       console.log(updateInfo);
       },
     error: function (err) {console.log(err);}
    });
  }

  deleteOneRegister() {
    var id =$("input[name='character-id-delete']").val();
    $.ajax({
     type:    'DELETE',
     url:     `${this.BASE_URL}/characters/${id}`,
     success: function (response) {
         console.log(response);
         const newCharacterHtml = `
            <li>
              <h3>${response.name} </h3>
              <p>Occupation: ${response.occupation} </p>
              <p>Debt: ${response.debt} </p>
              <p>Weapon: ${response.weapon} </p>
              <p>Id: ${response.id} </p>
            </li>
          `;
       return $('#display').append(newCharacterHtml);
       },
     error: function (err) {console.log(err);}
   });
}
}
