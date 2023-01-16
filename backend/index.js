const express = require('express');
const morgan = require('morgan')
const path = require('path');
const bodyParser = require('body-parser');
const connectToDb = require('./database/Connection');
const cors = require('cors');
const checkAdmin = require('./middleware/checkAdmin');

const app = express();
require('dotenv').config();



// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json())


const controllersPath = path.join(__dirname, 'controllers');

const userController = require(path.join(controllersPath, 'userController'));
const carController = require(path.join(controllersPath, 'carController'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectToDb()
  .then(() => {
    // connection successful
    app.listen(process.env.port, () => {
        console.log(`Server is running on port 4000`);
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

app.post('/cars', carController.addCar);
app.get('/cars', carController.getAllCars);
app.put('/cars/:id', checkAdmin, carController.modifyCar);
app.delete('/cars/:id', checkAdmin, carController.deleteCar);
