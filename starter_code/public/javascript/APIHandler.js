class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

doMyPromise (url, method, data){
  return new Promise( (resolve,reject) => {
    $.ajax({
    url: url,
    method: method,
    data: data,
    success:
      (successData) => { resolve(successData); },
    error:
      (error) => { reject(error); },
    });
  });
}

  getFullList() {
    this.doMyPromise(this.BASE_URL+'/characters/', 'GET' )
    .then( myData => removeAndDrawDivs(myData))
    .catch( error => console.log('error listing'));
  }

  getOneRegister (id) {
    this.doMyPromise(this.BASE_URL+'/characters/'+id, 'GET')
    .then( myData => removeAndDrawDivs(myData))
    .catch( error => console.log('error listing'));
  }
// name, occupation, weapon, debt(checkbox)
  createOneRegister (newChar) {
    document.getElementById("new-character-form").reset();
    this.doMyPromise(this.BASE_URL+'/characters/', 'POST', newChar)
      .then(myData => console.log("New character added!"))
      .then(myData => $('.submit-button').css("background-color","green"))
      .catch(error => console.log("FAIL"))
      .catch(error => $('.submit-button').css("background-color","red"))
  };

  updateOneRegister (editObj,id) {
    document.getElementById("edit-character-form").reset();
    this.doMyPromise(this.BASE_URL+"/characters/"+id, 'PATCH', editObj)
    .then(myData => console.log('Edited!'))
    .then(myData => $('.submit-button2').css("background-color","green"))
    .catch(error => console.log('Error'))
    .catch(error => $('.submit-button2').css("background-color","red"))
  }

  deleteOneRegister (id) {
    this.doMyPromise(this.BASE_URL+"/characters/"+id, 'DELETE')
    .then((response) => {
      if (response == "Character has been successfully deleted"){
        $('isRemoved').innerHTML = "ID Removed!";
      } else if (response == "Character not found"){
        $('isRemoved').innerHTML = "ERROR Removing";
      }
    })
    .then(myData => console.log('Deleted!'))
    .catch(error => console.log("There was an error"))
  }
}
function removeAndDrawDivs(response){
  let div = document.querySelector('.character-info');
  $('.character-info').remove();
   // true means clone all childNodes and all event handlers
  if (response.length > 1){
    response.forEach(e =>{ drawDiv(div, e); });
  } else {
    drawDiv(div,response);
  }

}

function drawDiv(div,e){
  let clone = div.cloneNode(true);
  clone.querySelector('.id').innerHTML = e.id;
  clone.querySelector('.name').innerHTML = e.name;
  clone.querySelector('.occupation').innerHTML = e.occupation;
  clone.querySelector('.weapon').innerHTML = e.weapon;
  clone.querySelector('.debt').innerHTML = e.debt;
  document.querySelector('.characters-container').appendChild(clone);
}
