class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
     axios.get(`${this.BASE_URL}/characters`)
       .then(response => {
        const container =  document.querySelector(".characters-container")
        container.innerHTML = "";
         response.data.forEach(elm => {
         const createElement = document.createElement("div")
         createElement.setAttribute("class", "character-info")
          for (let key in elm) {
            if(key == "_id" || key == "__v")continue
          let pequenin = document.createElement("div")
          pequenin.setAttribute("class", key);
          pequenin.innerHTML = `<h2> ${key}</h2><p>${elm[key]} `;
          createElement.appendChild(pequenin)
          }
           container.appendChild(createElement)  
              
   
        
           
         });

        
       })
       .catch(error => console.log("¡ops! error:", error));

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
