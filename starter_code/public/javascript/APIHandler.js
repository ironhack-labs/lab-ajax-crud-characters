class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.charContainer = $('.characters-container');
  }

  getFullList () {
    $.ajax({
      url : this.BASE_URL + 'characters',
      method : 'GET',
      data : null,
      error : (error) => console.log('getFullList error'),
      success : (chars) => {

        chars.forEach((char) => {
          let charDiv =`
          <div class="character-info">
          <div class="name"><b>Id: ${char.id}</b></div>
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
          </div>
          `;

          this.charContainer.append(charDiv);
        });
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url : this.BASE_URL + 'characters/' + id,
      method : 'GET',
      data : null,
      error : (error) => console.log('getOneRegister error'),
      success : (char) => {
        let charDiv =`
        <div class="character-info">
        <div class="name"><b>Id: ${char.id}</b></div>
        <div class="name">Name: ${char.name}</div>
        <div class="occupation">Occupation: ${char.occupation}</div>
        <div class="weapon">Weapon: ${char.weapon}</div>
        </div>
        `;

        this.charContainer.html(charDiv);
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
