const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', () => {
  console.log('here we are at the root.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
