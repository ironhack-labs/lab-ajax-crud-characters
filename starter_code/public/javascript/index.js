const charactersAPI = new APIHandler("http://localhost:8000/characters");

$(document).ready(() => {
  let n, o, w, c;

  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      console.log(data);
      console.log(data.data[0].name);
      $("#section1").addClass("characters-container");
      let container = $("#section1");
      data.data.forEach(e => {
        n = e.name;
        o = e.occupation;
        c = e.cartoon;
        w = e.weapon;

        let info = $("<div class='character-info'>");
        let name = $("<p>").text(n);
        let occupation = $("<p>").text(o);
        let cartoon = $("<p>").text(c);
        let weapon = $("<p>").text(w);
        container.append(info);
        info.append(name);
        info.append(occupation);
        info.append(cartoon);
        info.append(weapon);
      });
    
    });
  }
  


document.getElementById("fetch-one").onclick = function() {
  e = $(".valor").val();
  console.log(e);
charactersAPI.getOneRegister().then(data => {
  $("#section2").addClass("characters-container");
      let container = $("#section2");
        n = data.data[e-1].name;
        o = data.data[e-1].occupation;
        c = data.data[e-1].cartoon;
        w = data.data[e-1].weapon;

        let info = $("<div class='character-info'>");
        let name = $("<p>").text(n);
        let occupation = $("<p>").text(o);
        let cartoon = $("<p>").text(c);
        let weapon = $("<p>").text(w);
        container.append(info);
        info.append(name);
        info.append(occupation);
        info.append(cartoon);
        info.append(weapon);
      });
  
  };
    
  document.getElementById('delete-one').onclick = function(){
    b = $(".borrar").val();
    charactersAPI.deleteOneRegister(b);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    
      const characterInfo = {
         name:       '$',
         occupation: 'Waste Allocation Robot',
         weapon:     'Head laser'
       };
       // Make a POST request
       axios.post('https://ih-crud-api.herokuapp.com/characters',characterInfo)
         .then(response => {
             console.log('post success');
             console.log(response)
         })
         .catch(error => {
             console.log('Oh No! Error!');  
             console.log(error)
         })
     }
     charactersAPI.createOneRegister(characterInfo)
  }
)
