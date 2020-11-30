const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'views/index.html'));
});

app.listen(3000);
