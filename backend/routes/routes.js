const express = require('express');
const router = express.Router();
const user = require('../model/Model');
const {registrationValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const verifyToken = require('./verifyToken');

router.post('/register', async (req, res) => {
    // VALIDATION BEFORE REGISTERATION
    const {error} = registrationValidation.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if username already exists
    const usernameExists = await user.findOne({username: req.body.username});
    if (usernameExists) return res.status(400).send("username already exists");

    // Check if email already exists
    const emailExists = await user.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send("email already exists");

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const signedUpUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await signedUpUser.save();
        res.send(savedUser);
    } catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    // VALIDATION BEFORE LOGIN
    const {error} = loginValidation.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        // Check if the user exists
        const User = await user.findOne({ username: req.body.username });
        if (User) {
          // Check if password matches
          const result = await bcrypt.compare(req.body.password, User.password);
          if (result) {
            // Sign token and Send it in response
            const token = await jwt.sign({_id: User._id}, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
          } else {
            res.status(400).send("password doesn't match");
          }
        } else {
            res.status(400).send("username doesn't exist");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/posts', verifyToken, async (req, res) => {
    const User = await user.findOne({_id: req.user._id});
    res.send(User);
});

module.exports = router;