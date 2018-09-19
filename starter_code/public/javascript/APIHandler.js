class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL+`/characters`)
    .then( res => {
      let list = [];
      res.data.forEach((e) => {
        list.push(e);
        })
        return list;
   }).catch(e => console.log(e));
  }

  getOneRegister (idCharacter) {
    return axios.get(this.BASE_URL+`/characters/${idCharacter}`)
    .then( res => {
        console.log(res);
        return res;
   }).catch(e => console.log(e));

  }

  createOneRegister (characterInfo) {
    axios.post(this.BASE_URL+`/characters`, characterInfo)
    .then(res => {
      console.log('post success');
      console.log(res)
  })
  .catch(error => {
      console.log('post Error');  
      console.log(error)
  })

  }

  updateOneRegister (idChar, updateInfo) {
    axios.put(this.BASE_URL+`/characters/${idChar}`, updateInfo)
    .then(res => {
      console.log("Update SUCCESS");
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })

  }

  deleteOneRegister (idCharacter) {
    axios.delete(this.BASE_URL+`/characters/${idCharacter}`)
    .then( res => {
      console.log(res);
      return res;
    }).catch(e => console.log(e));

  }
}
