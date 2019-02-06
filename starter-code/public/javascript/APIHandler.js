class APIHandler 
{
  constructor (baseUrl) 
  {
    this.BASE_URL = baseUrl;
  }

  getFullList() 
  {
    axios.get(this.BASE_URL)
    .then(response => 
    {
      console.log(this.BASE_URL)
      console.log('post successful and the response is: ', response.data)
    })
    .catch(error => 
    {
    console.log('Oh No! Error is: ', error)
    })
  }

  getOneRegister () {
    axios.get(this.BASE_URL)
    .then(response => 
    {
      const output = response.data.filter((data) => {
        return data.id === +document.querySelector("input[name=character-id]").value
      })[0]

      console.log('post successful and the response is: ', output)
    })
    .catch(error => 
    {
      console.log('Oh No! Error is: ', error)
    })
  }

  createOneRegister (elbicho) {
    axios.post(this.BASE_URL, elbicho)
    .then(response => 
    {
      console.log("+++++",response)
    })
    .catch(error => 
    {
    console.log('Oh No! Error is: ', error)
    })
  }

  updateOneRegister () {
    
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + "/" + id).then(persons => {
      console.log(persons)
    });
  }
}