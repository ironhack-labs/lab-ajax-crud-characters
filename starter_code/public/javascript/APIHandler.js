class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  displayCharacter(data){
    function createDiv(clas, text, text2){ 
      const div = document.createElement('div');
      div.className = clas;
      if(text && text2){
        div.innerText = text2 + ' ' + text;
      }
      return div;
    }
      const div = createDiv('character-info');
      const id = createDiv('id', data.id, 'Id:');
      const name = createDiv('name', data.name, 'Name:');
      const occupation = createDiv('occupation', data.occupation, 'Occupation:');
      const weapon = createDiv('weapon', data.weapon, 'Weapon:');
      const cartoon = createDiv('cartoon', data.cartoon.toString(), 'Is Cartoon:');
      div.id = data.id;
      div.appendChild(id);
      div.appendChild(name);
      div.appendChild(occupation);
      div.appendChild(cartoon);
      div.appendChild(weapon);
      document.getElementsByClassName('characters-container')[0].appendChild(div);
      console.log(div);
  }

  getFullList () {
    axios.get(this.BASE_URL + '/characters')
      .then(response => {
        var arr = Array.from(document.getElementsByClassName('characters-container')[0].children);
        arr.forEach(e => e.remove());
        // document.getElementsByClassName('character-info')[0].remove();
        response.data.forEach(e => {
          this.displayCharacter(e);
        });
        document.getElementById('fetch-all').className = 'active';
        console.log(response.data);
      })
      .catch(err => {
        document.getElementById('fetch-all').className = 'error';
        console.log('If you want a character slide to Marvel:', err);
      });
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL + '/characters/' + id)
      .then(response => {
        var arr = Array.from(document.getElementsByClassName('characters-container')[0].children);
        arr.forEach(e => e.remove());
        this.displayCharacter(response.data);
        console.log(response.data);
        document.getElementById('fetch-one').className = 'active';
      })
      .catch(err => {
        document.getElementById('fetch-one').className = 'error';
        console.log('Nope this character ain\'t for you:', err);
      });
  }

  createOneRegister (characterInfo) {
    axios.post(this.BASE_URL + '/characters', characterInfo)
      .then(response => {
        console.log(response);
        console.log('Successful yeeting');
        document.getElementById('send-data').className = 'active';
      })
      .catch(err => {
        document.getElementById('send-data').className = 'error';
        console.log('Try adding this character to your own databse ya fool: ', err);
      });
  }

  updateOneRegister (id, data) {
    axios.put(this.BASE_URL + '/characters/' + id, data)
      .then(response => {
        document.getElementById('udpate-data').className = 'active';
        console.log(response)
        console.log('Update successful yeet yeet');
      })
      .catch(err => {
        console.log('This character is happy as is: ', err);
        document.getElementById('udpate-data').className = 'error';
      });
  }

  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + '/characters/' + id)
      .then(response => {
        document.getElementById(id).remove();
        document.getElementById('delete-one').className = 'active';
        console.log(response);
        console.log('Delete successful');
      })
      .catch(err => {
        document.getElementById('delete-one').className = 'error';
        console.log('Nah you can\'t delete me!: ', err);
      });
  }
}
