const express = require('express');
const app = express();

const connectToDb = require('./database/Connection');

port=4000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectToDb()
  .then(() => {
    // connection successful
    app.listen(`${port}`, () => {
        console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    // handle error
    console.log(`Error connecting to database: ${err}`);
    process.exit(1);
  });


