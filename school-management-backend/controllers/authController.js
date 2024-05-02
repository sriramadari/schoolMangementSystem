const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
const config = require('../config/config');


module.exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        const token = jwt.sign({ id: user._id }, config.secretKey, { expiresIn: '1h' });

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, config.secretKey, { expiresIn: '1h' });

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}