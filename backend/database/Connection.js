const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

require('dotenv').config();

const connectToDb = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = mongoose.connection;
      db.on('connected', () => {
          console.log('Mongoose default connection is open');
          resolve();
      });
      db.on('error', (err) => {
          console.log(`Mongoose default connection has occured ${err} error`);
          reject(err);
      });
      db.on('disconnected', () => {
          console.log('Mongoose default connection is disconnected');
          reject(new Error('Mongoose default connection is disconnected'));
      });
    });
  };

  module.exports = connectToDb;
  