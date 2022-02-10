const express = require("express");
const router = express.Router();
const JsonServerApi = require("./JsonServerApi");
const jsonServerApi = new JsonServerApi();

router.get("/characters", async (req, res, next)=> {
    try {
        const response = await jsonServerApi.getAll();
        console.log(response.data, typeof response);
        res.send(response.data)
    } catch (error) {
        console.log(error);
    }   
});

router.get("/characters/:id", async (req, res, next)=> {
    try {
        const response = await jsonServerApi.getOne(req.params.id);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

router.post("/characters", async (req, res, next) => {
    try {
        const response = await jsonServerApi.createOne(req.body);
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});





module.exports = router;




