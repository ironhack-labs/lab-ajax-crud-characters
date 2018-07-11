// When the WALL-E button is clicked


  /* function showFeedback (postResponse) {
    const newCharacterHtml = 
      `
        <li>
          <h3> ${postResponse.data.name} </h3>
          <p> Id: ${postResponse.data.id} </p>
        </li>
      `;
      document.getElementById("characters-list").innerHTML += newCharacterHtml;
  }

  */
  
  document.getElementById("character-form").onsubmit = function() {
    event.preventDefault();
  
    const characterInfo = {
      name: document.getElementById("the-name-input").value,
      occupation: document.getElementById("the-occupation-input").value,
      weapon: document.getElementById("the-weapon-input").value
    };
  
    axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
      .then(response => {
          const newCharacterHtml = `
          <li>
            <h3> ${response.data.name} </h3>
            <p> Id: ${response.data.id} </p>
          </li>
          `;
     //     document.getElementById("characters-list").innerHTML += newCharacterHtml;
        //  showFeedback(response)
      })
      .catch(error => {
          console.log(error)
      })
  };

  document.getElementById("update-form").onsubmit = function() {
    event.preventDefault();
      
    const updateInfo = {
      name: document.getElementById("update-name-input").value,
      occupation: document.getElementById("update-occupation-input").value,
      weapon: document.getElementById("update-weapon-input").value
    };
    const charId = document.getElementById("character-id-input").value;
  
    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${charId}`, updateInfo)
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })
  } 

  

    document.getElementById("delete-form").onsubmit = function() {
        event.preventDefault();
          
       
        deleteId= document.getElementById("delete-id-input").value,
        axios.delete(`https://ih-crud-api.herokuapp.com/characters/${deleteId}`, {id:deleteId} )
        .then(response => {
          console.log("Delete SUCCESS!")
        })
        .catch(error => {
          console.log(error)
        })
      } 
      
   
    

  document.getElementById("show-characters").onsubmit = function() {
    event.preventDefault();
      


    axios.get(`https://ih-crud-api.herokuapp.com/characters`)
  .then(function (response) {
    console.log(response.data.length);

    for (var i=0; i<response.data.length;i++){

        const newCharacterHtml = 
        `
          <li>
            <h3> Name:${response.data[i].name} </h3>
            <h3> Occupation:${response.data[i].occupation} </h3>
            <h3> Weapon:${response.data[i].weapon} </h3>
            <h3> Id: ${response.data[i].id} </h3>
            <hr>
          </li>
        `;
        document.getElementById("characters-list").innerHTML += newCharacterHtml;

    }

    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  } 