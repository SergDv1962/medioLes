const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
   console.log('Hello World!')
});

app.listen(port, () => {
   console.log(`Server listening to port ${port}`)
});