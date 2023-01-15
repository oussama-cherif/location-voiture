const User = require('../models/User');
const mongoose = require('mongoose');

exports.createUser = (req, res) => {
    // Extract the user data from the request body
    const { username, password } = req.body;
    // Validate the user data
    if (!username || !password) {
        return res.status(400).json({
            message: "username and password are required"
        });
    }
    // Create a new user with the data from the request body
    const newUser = new User({username, password});
    // Save the user to the database
    newUser.save((err, user) => {
        if(err) {
            return res.status(400).json({
                message: "Error saving user",
                error: err
            });
        }
        return res.status(200).json({
            message: "User saved successfully",
            user: user
        });
    });
};

exports.getUser = function(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!user) {
        return res.status(404).send({ message: 'User not found.' });
      }
      return res.status(200).send(user);
    });
  };

