const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
/* Check Validator Middelware  */
const { check, validationResult } = require("express-validator");
/* REGISTER */
router.post("/register", [
    check("usename").notEmpty().withMessage("Username is required"),
    check("email").notEmpty().withMessage("Email is required"),
    check("email").isEmail().withMessage("Email is not valid"),
    check("password").notEmpty().withMessage("Password is required"),
    /*     check("password").matches().withMessage("Password do not matches"), */
], async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),
    });
    const errors = validationResult(req)
    if (errors) {
        res.render('register', {
            errors: errors
        })
    } else {
        try {
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    }
});
/* LOGIN */
router.post("/login", (req, res) => {

})
module.exports = router