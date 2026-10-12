const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from backend');
});

app.listen(PORT, () => {
    console.log("le server tourne bien au "+ PORT);
});