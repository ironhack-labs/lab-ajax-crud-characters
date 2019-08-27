class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
    baseURL: baseUrl
    });
  }
  
  
  
  getFullList () {
    this.api.get('characters')
    .then(responseFromAPI => {
	    let data=responseFromAPI.data;
		fill(data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }

  
  
  getOneRegister (id) {
      this.api.get('characters/'+id)
    .then(responseFromAPI => {
	   
		fillOne(responseFromAPI.data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }

  createOneRegister (data) {
	 console.log(JSON.stringify(data));
	 this.api.post('characters',data)
    .then(response => {
        
    })
    .catch(error => {
        alert( 'Error: '+error);
    })
	  
  }

  updateOneRegister (id,data) {
   this.api.patch('characters/'+id,data)
    .then(response => {
        alert(JSON.stringify(response));
    })
    .catch(error => {
        alert( 'Error: '+error);
    })
  }

  deleteOneRegister (id) {
	  
   this.api.delete('characters/'+id)
    .then(responseFromAPI => {
		
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }
  
  
  
  
  
}
