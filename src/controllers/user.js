const User = require('../model/user');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// login user
exports.getUser = async (req, res) => {
    try {
        const { email, username } = req.body;
        console.log(req.body)

        if (!email || !username) {
            return res.status(400).json({ message: 'Email and username are required' });
        }

        const userEmail = await User.query().where('email', email).first();
        const userName = await User.query().where('username', username).first();

        if (userName && userEmail) {
            // User found, send it as a response
            return res.status(200).json(userEmail);
        } else {
            // User not found
            return res.status(404).json({ message: 'Invalid email or username' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



// get all users
exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.query();
        if (!allUsers) {
            throw new Error("Check the database connection, the user table doesn't exist.");
        }
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }

}