const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');;
const checkAdmin = require('./middleware/checkAdmin')

const app = express();

const connectToDb = require('./database/Connection');
app.use(bodyParser.json())
port=4000

const controllersPath = path.join(__dirname, 'controllers');

const userController = require(path.join(controllersPath, 'userController'));
const carController = require(path.join(controllersPath, 'carController'));

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

// User routes
app.post('/users', userController.createUser);
app.get('/users/:id', userController.getUser);

// admin only routes
app.get('/admin', checkAdmin, (req, res) => {
    res.send('Welcome to the admin page');
});
app.get('/admin/dashboard', checkAdmin, (req, res) => {
    res.send('Welcome to the other admin page');
});

app.post('/cars', checkAdmin, carController.addCar);
app.put('/cars/:id', checkAdmin, carController.modifyCar);
app.delete('/cars/:id', checkAdmin, carController.deleteCar);
