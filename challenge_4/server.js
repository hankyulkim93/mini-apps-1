const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/client/dist')));

app.post('/', (req, res) => {
    res.send('CONNECTED');
});

// app.get

app.listen(port, () => {console.log(`Connected to port: ${port}`)});


