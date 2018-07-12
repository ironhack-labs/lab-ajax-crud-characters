class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.searchID = '';
    this.updateObj = {};
  }

  getFullList(){
    return new Promise((resolve, reject) =>{
      let url = this.BASE_URL + '/characters';
      fetch(url)
        .then(res=>{
          if(!res.ok) return reject(res.statusText);
          return res.json();
        })
        .then(data=>{
          resolve(data);
        });
    });
  }

  getOneRegister() {
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + '/characters/' + this.searchID;
      fetch(url)
        .then(res=>{
          if(!res.ok) return reject(res.statusText);
          return res.json();
        })
        .then(data=>{
          resolve(data);
        });
    });
  }

  createOneRegister () {
    return new Promise((resolve, reject)=>{
      let url = this.BASE_URL + '/characters';

      fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.updateObj)
      })
        .then(res=>{
          if(!res.ok) return reject(res.statusText);
          return res.json();
        })
        .then(data=>{
          resolve(data);
        });
    });
  }

  updateOneRegister () {
    return new Promise((resolve, reject)=>{
      let url = this.BASE_URL + '/characters/' + this.searchID;

      fetch(url, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.updateObj)
      })
        .then(res=>{
          if(!res.ok) return reject(res.statusText);
          return res.json();
        })
        .then(data=>{
          resolve(data);
        });
    });
  }

  deleteOneRegister () {
    return new Promise((resolve, reject)=>{
      let url = this.BASE_URL + '/characters/' + this.searchID;

      fetch(url, {
        method: 'DELETE',
      })
        .then(res=>{
          if(!res.ok) return reject(res.statusText);
          return res.json();
        })
        .then(data=>{
          resolve(data);
        });
    });
  }
}
