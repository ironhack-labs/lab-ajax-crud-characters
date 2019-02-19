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
    let charID = document.getElementById("character-id").value;
    axios.get(`${this.BASE_URL}/characters/${charID}`)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
    console.log(charID);
  }

  createOneRegister (object) 
  {
    axios.post(`${this.BASE_URL}/characters`, object)
    .then(response => {
      console.log(response.data);
      document.getElementById("new-character-form").reset();
    })
    .catch(error => {
      console.log("Error is: ", error);
    })
  }
  
  updateOneRegister (id, object) 
  {
    axios.patch(`${this.BASE_URL}/characters/${id}`, object)
    .then(response => {
      console.log(response.data);
      document.getElementById("edit-character-form").reset();
    })
    .catch(error => {
        console.log("Error is: ", error);
    })
  }
  
  deleteOneRegister (id) 
  {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(responseFromAPI => {
      console.log(responseFromAPI.data);
    })
    .catch(error => {
        console.log("Error is: ", error);
    })
  }
}
