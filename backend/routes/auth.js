const express = require('express')
const router = express.Router()
const { signup, signin, signout, requireSignin } = require('../controllers/auth')

// Validators
const {runValidation} = require('../validators')
const {userSignupValidator, userSigninValidator} = require('../validators/auth')

// Signup
router.post('/signup', userSignupValidator, runValidation, signup)

// Signin
router.post('/signin', userSigninValidator, runValidation, signin)

// Signout
router.get('/signout', signout)

// Test
router.get('/secret', requireSignin, (req,res) => {
    res.json({
        message: 'You have found the secret page.'
    })
})
module.exports = router