class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url : this.BASE_URL + 'characters',
      method : 'GET',
      data : null,
      error : (error) => console.log('getFullList error'),
      success : (data) => {

        const charContainer = $('.characters-container');
        data.forEach((char) => {
          let charDiv =`
          <div class="character-info">
          <div class="name">${char.name}</div>
          <div class="occupation">${char.occupation}</div>
          <div class="debt">${char.debt}</div>
          <div class="weapon">${char.weapon}</div>
          </div>
          `;

          charContainer.append(charDiv);
        });
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url : this.BASE_URL + 'characters' + id,
      method : 'GET',
      data : null,
      error : (error) => console.log('getOneRegister error'),
      success : (data) => {

      }
    });
  }

  createOneRegister (charInfo) {
    $.ajax({
      url : this.BASE_URL + 'characters',
      method : 'POST',
      data : null,
      error : (error) => console.log('createOneRegister error'),
      success : (data) => {

      }
    });
  }

  updateOneRegister (id, newInfo) {
    $.ajax({
      url : this.BASE_URL + 'characters' + id,
      method : 'PUT',
      data : null,
      error : (error) => console.log('updateOneRegister error'),
      success : (data) => {

      }
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url : this.BASE_URL + 'characters' + id,
      method : 'DELETE',
      data : null,
      error : (error) => console.log('deleteOneRegister error'),
      success : (data) => {

      }
    });
  }
}
