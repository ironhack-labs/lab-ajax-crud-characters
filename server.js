// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3001; // Ensure this port is different from json-server's
// const apiBaseUrl = 'http://localhost:3000/characters'; // URL to your json-server

// app.use(bodyParser.json());

// // GET all characters
// app.get('/characters', async (req, res) => {
//     try {
//         const response = await axios.get(apiBaseUrl);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
// });

// // GET a single character by ID
// app.get('/characters/:id', async (req, res) => {
//     try {
//         const response = await axios.get(`${apiBaseUrl}/${req.params.id}`);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
// });

// // POST a new character
// app.post('/characters', async (req, res) => {
//     try {
//         const response = await axios.post(apiBaseUrl, req.body);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
// });

// // PATCH/PUT update a character
// app.patch('/characters/:id', async (req, res) => {
//     try {
//         const response = await axios.patch(`${apiBaseUrl}/${req.params.id}`, req.body);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
// });

// // DELETE a character
// app.delete('/characters/:id', async (req, res) => {
//     try {
//         await axios.delete(`${apiBaseUrl}/${req.params.id}`);
//         res.send("Character has been successfully deleted");
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });
