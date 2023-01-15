const User = require('../models/User');

function checkAdmin(req, res, next) {
    const userId = req.body.userId;
    User.findById(userId, (err, user) => {
        if (err) {
            return res.status(500).send({ message: 'Error finding user' });
        }
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if (user.role !== 'admin') {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        next();
    });
}

module.exports = checkAdmin;