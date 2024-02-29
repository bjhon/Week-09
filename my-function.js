const express = require('express');
const app = express();
const axios = require('axios');
const port = 3002;

app.use(express.json());

app.get('/say', (req, res) => {
    const name = req.query.name;
    const body = {
        "name": name
    };
    const url = 'https://8w3nxzptc4.execute-api.us-east-2.amazonaws.com/default/my-function'; // url to be able to send request 

    axios({
        method: 'get',
        url,
        params: body    
    })
    .then(function (response) {
        console.log(response.data);
        res.send(response.data); // Send response back to the client
    })
    .catch(function (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});