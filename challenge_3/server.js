const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => console.log(`App is listening on port: ${port}`));

