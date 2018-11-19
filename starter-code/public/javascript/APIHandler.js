class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList () {
    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response) => {
        console.log(response.data);

        $("#list-of-characters").html("<ul class='container' id='list'></ul>");
        response.data.forEach((eachCharacter) => {

          $("#list").append(`
          <div class="container">
          <li >
          ID:  ${eachCharacter.id}
          </li>
          <li >
          name:  ${eachCharacter.name}
          </li>
          <li >
          occupation: ${eachCharacter.occupation}
          </li>
          <li >
          debt: ${eachCharacter.debt}
          </li>
          <li >
          weapon:  ${eachCharacter.weapon}
          </li>
          
          </div>
            `);
        })

      })
      .catch((err) => {
        console.log(err)
      })
  }

  getOneRegister (country) {
    console.log('=--=-=-=-=-=-=-=-=-')
   

    axios.get("https://ih-crud-api.herokuapp.com/characters/")
        .then(responseFromAPI => {
          // console.log('Response from API is: ', responseFromAPI.data);
          $("#singleCharacters").html("<ul class='container' id='list'></ul>");
          for(let i=0 ; i<responseFromAPI.data.length ; i++){

            if (responseFromAPI.data[i].id === Number(country)){
              
              $("#list").append(`
              <li>
              Id : ${responseFromAPI.data[i].id}
              </li>
              <li>
              Name : ${responseFromAPI.data[i].name}
              </li>
              <li>
              Occupation : ${responseFromAPI.data[i].occupation}
              </li>
              <li>
              Weapon : ${responseFromAPI.data[i].weapon}
              </li>
              <li>
              Is in Debt? : ${responseFromAPI.data[i].debt}
              </li>
                      `);
        }
          }

        })
        .catch(err => {
          $("#singleCharacters").append(`This is not a country`);
          console.log('Error is: ', err);
        })
    }


  createOneRegister () {
      event.preventDefault();

      const nameFromHTML = $("#theName").val();
      const occupationFromHTML = $("#theOccupation").val();
      const weaponFromHTML = $("#theWeapon").val();
      const debtFromHTML = $("#debt").val();

      axios
        .post("https://ih-crud-api.herokuapp.com/characters", {
          name: nameFromHTML,
          occupation: occupationFromHTML,
          weapon: weaponFromHTML,
          debt: debtFromHTML
        })

        .then(result => {
          console.log(result);
          this.getFullList();
          // calling the other function to show the new character on the list after we add it to the api
        })
        .catch(err => {
          console.log(err);
        });
  }

  updateOneRegister() {
    // console.log("--=-=-==-=-=--=-=-=-==--=-=-==--=-=-=-=-=-=-=-=-=-=", country)
    const country = document.getElementById("editID").value;
    const nameFromHTML = $("#editName").val();
    const occupationFromHTML = $("#editOccupation").val();
    const weaponFromHTML = $("#editWeapon").val();
    const debtFromHTML = $("#editDebt").val();

    axios
      .put("https://ih-crud-api.herokuapp.com/characters/" + country, {

        name: nameFromHTML,
        occupation: occupationFromHTML,
        weapon: weaponFromHTML,
        debt: debtFromHTML


      })
        .then(responseFromAPI => {

          this.getOneRegister(country);  

       })
      .catch(err => {
        $("#singleCharacters").append(`This is not a country`);
        console.log("Error is: ", err);
      });
  }


  deleteOneRegister() {
    let inputValue = $('#deletion').val();
    console.log('yooo', inputValue)
    axios.delete(`https://ih-crud-api.herokuapp.com/characters/` + inputValue)
      .then(result => {
        console.log(result)
        this.getFullList();   
      })
      .catch(err => {
        console.log(err)
      })
  }
}
