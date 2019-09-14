//const charactersAPI = new APIHandler('http:/ / localhost: 8000');
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    axios.get("http://localhost:8000/characters").then((result) => {
      let resultsFromApi = result.data;
      console.log(resultsFromApi);

      resultsFromApi.forEach((character) => {
        let newNode = document.getElementsByClassName("character-info")[0].cloneNode(true)
        newNode.getElementsByClassName("name")[0].innerText = character.name
        newNode.getElementsByClassName("occupation")[0].innerText = character.occupation
        newNode.getElementsByClassName("weapon")[0].innerText = character.weapon
        newNode.getElementsByClassName("cartoon")[0].innerText = character.cartoon
        document.getElementsByClassName("characters-container")[0].append(newNode)
      });
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementsByTagName("input")[0].value
    console.log(id);

    axios.get(`http://localhost:8000/characters/${id}`).then((result) => {


      //http://localhost:8000/characters/${id})
      //http://localhost:8000/characters/:id
      //http://localhost:8000/characters/{id}
      let character = result.data;

      let newNode = document.getElementsByClassName("character-info")[0].cloneNode(true)
      newNode.getElementsByClassName("name")[0].innerText = character.name
      newNode.getElementsByClassName("occupation")[0].innerText = character.occupation
      newNode.getElementsByClassName("weapon")[0].innerText = character.weapon
      newNode.getElementsByClassName("cartoon")[0].innerText = character.cartoon
      document.getElementsByClassName("characters-container")[0].append(newNode)
    })
  })
});
document.getElementById('delete-one').addEventListener('click', function (event) {
  //id delete-input
  let idInput = document.getElementById("delete-input").value


  axios.delete(`http://localhost:8000/characters/${idInput}`).then(() => {
    document.getElementById("delete-one").style.color = "lightgreen"
  }).catch(() =>
    document.getElementById("delete-one").style.color = "red")

  //http://localhost:8000/characters/${id})
  //http://localhost:8000/characters/:id
  //http://localhost:8000/characters/{id}


});
document.getElementById('edit-character-form').addEventListener('submit', function (event) {
});

document.getElementById('new-character-form').addEventListener('submit', function (event) {
  event.preventDefault(),
    let form = document.getElementById("new-character-form")
  let name = form.getElementsByTagName("input")[0].value
  let occupation = form.getElementsByTagName("input")[1].value
  let weapon = form.getElementsByTagName("input")[2].value
  let cartoon = form.getElementsByTagName("input")[3].checked

  axios.post("http://localhost:8000/characters", {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon,
  }).then((result) => {
    console.log(result)
  })
})
});

