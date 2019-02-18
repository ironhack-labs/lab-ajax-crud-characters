class APIHandler 
{
  constructor (baseUrl) 
  {
    this.BASE_URL = baseUrl;
  }

  getFullList () 
  {
    axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
        })
    .catch(err => {
      console.log('Error is: ', err);
    })
  }

  getOneRegister () 
  {
    axios.get(`${this.BASE_URL}/characters/:id`)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }

  createOneRegister () 
  {

  }

  updateOneRegister () 
  {

  }

  deleteOneRegister () 
  {

  }
}
