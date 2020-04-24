const charactersAPI = new APIHandler('http://localhost:8000');
const newCard = document.querySelector(".character-info")

document.querySelector(".characters-container").innerHTML = ""


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

     axios
      .get("http://localhost:8000/characters")

      .then((allCharacs) => {

        document.querySelector(".characters-container").innerHTML = ""

      allCharacs.data.forEach(function(el) {

        newCard.querySelector(".name").innerHTML = "Character Name: " + el.name
        newCard.querySelector(".occupation").innerHTML = "Character Occupation: " + el.occupation
        newCard.querySelector(".cartoon").innerHTML = "Is a Cartoon? " + el.cartoon
        newCard.querySelector(".weapon").innerHTML = "Character Weapon: " + el.weapon

        document.querySelector(".characters-container").append(newCard.cloneNode(true))
      })
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

      let searchIdCont = document.querySelectorAll(".operation")[1]
      let inputField = searchIdCont.getElementsByTagName("input")[0].value

      document.querySelector(".characters-container").innerHTML = ""

    axios
      .get("http://localhost:8000/characters/" + inputField)
      .then((char) => {

        document.querySelector(".characters-container").append(newCard.cloneNode(true))

        newCard.querySelector(".name").innerHTML = "Character Name: " + char.data.name
        newCard.querySelector(".occupation").innerHTML = "Character Occupation: " + char.data.occupation
        newCard.querySelector(".cartoon").innerHTML = "Is a Cartoon? " + char.data.cartoon
        newCard.querySelector(".weapon").innerHTML = "Character Weapon: " + char.data.weapon
      })
  });


  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    let inputField = document.querySelector(".operation.delete input").value

    axios
      .delete("http://localhost:8000/characters/" + inputField)
      .then(() => {
        document.getElementById("delete-one").style.backgroundColor = "green"
      })
      .catch((err) => {
        document.getElementById("delete-one").style.backgroundColor = "red"
      })
  });


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

        
    event.preventDefault();

    let form = document.getElementById("new-character-form")
  
    const characterInfo = {
      name: form.getElementsByTagName("input")[0].value,
      occupation: form.getElementsByTagName("input")[1].value,
      weapon: form.getElementsByTagName("input")[2].value,
      cartoon: form.getElementsByTagName("input")[3].checked
    }

    console.log(characterInfo)

    axios
      .post("http://localhost:8000/characters/", characterInfo)
      .then(() => console.log(characterInfo))
  });
});
