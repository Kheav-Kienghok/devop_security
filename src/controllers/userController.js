const users = require('../models/userModel');

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
};
