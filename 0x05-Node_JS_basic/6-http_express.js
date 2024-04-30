const express = require('express');
const app = express();

const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.listen(port () => {
    console.log('server has started and listening on port 1245');
});

module.exports = app;
