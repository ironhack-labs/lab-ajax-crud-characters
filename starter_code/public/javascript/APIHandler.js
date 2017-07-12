class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
//OJO
//Con AJAX NO se necesita new Promise
//AJAX es una promesa que internamente
//ya retorna una promesa por lo que tampoco
//requiere success porque internamente
//retorna lo resuelto.
  getFullList () {
  return new Promise ((res, rej) => { //si se cumple es con res(resolve) y si no es rej(reject)
    $.ajax({ //las promesas necesitan retornar algo
        method: 'GET', //Get es por default
        dataType: 'json', //json es por default
        url: `${this.BASE_URL}/characters/`, //la barra aqui en /characters o en el api
        success: (data) => { //success es una función que si se llama a ella en index.js puede ejecutar el then
          res(data);
        }
      });
    });
  }

  getOneRegister (id) {
    return $.ajax({ //las promesas necesitan retornar algo
        url: `${this.BASE_URL}/characters/${id}`
      });
  }

  createOneRegister () {
    return $.ajax({
          method: 'POST', //post to create!!!!!
          url: `${this.BASE_URL}/characters`,
          data: e,
        });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
