
 const characterInfo = axios.create();
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl; 
  }
 

  getFullList () {
    //let url = this.BASE_URL + "/characters"
      return characterInfo.get(this.BASE_URL + "/characters")
      // .then((response) => {
      //   console.log(response.data)
      //   if(!response.ok)return Promise.reject(response.statusText)
      //   return response.json();
      // })
  //     fetch(url)
  //     .then(response =>{
  //      if(!response.ok)return Promise.reject(response.statusText);
  //       return response.json();
  //     })
  //      .then(data =>{
  //       muestraTodo(data);
  //     })
  //     .catch((error) => {
  //       console.log('Oh nooo hay un error!');
  //       console.log(error);
  //     })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }

}//fin de la clase
