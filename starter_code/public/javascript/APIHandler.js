class APIHandler {
    constructor(baseUrl) {
     this.baseURL =baseUrl;
        }
    

    getFullList() {
        return axios({
                 method: "get",
                 url: `${this.baseURL}/characters`
                }).then(res => {
                  return res.data;
                });
    }

    getOneRegister(id) {
        return axios({
                 method: "get",
                  url: `${this.baseURL}/characters/${id}`
                }).then(res => {
                  return res.data;
                });
    }

    createOneRegister(obj) {
        return axios({
                  method: "post",
                  url: `${this.baseURL}/characters`,
                  params: "obj"
                }).then(res => {
                  return res.data;
                });
               }

    updateOneRegister(id, obj) {
            return axios({
              method: "put",
              url: `${this.baseURL}/characters${id}`,
              params: obj
            }).then(res => {
              console.log("updated succes");
            });
           }

    deleteOneRegister() {
        return axios({
            method: "delete",
            url: `${this.baseURL}/chatacters${id}`,
            params: "URL parameters to be sent with the request"
        }).then(res => {
            return res.data;
        });
    }
}

