class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
return $.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (e) {
return $.get(`${this.BASE_URL}/characters/`+e);
  }

  createOneRegister (character) {
return $.post(`${this.BASE_URL}/characters`,{
name:character.name,
occupation:character.occupation,
weapon:character.weapon
});
  }

  updateOneRegister () {

  }

  deleteOneRegister (e) {
       return $.ajax({
         url: `${this.BASE_URL}/characters/`+e,
         method: 'DELETE',
       });

  }
}
