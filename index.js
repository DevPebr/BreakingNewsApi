const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('OK');
})


app.listen(port, () => console.log(`Server's running on port: ${port}`));