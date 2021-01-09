const express = require('express')
const router = express.Router()
const { create } = require('../controllers/blog')
const { requireSignin, adminMiddleware } = require('../controllers/auth')

// Create blog
router.post('/blog', requireSignin, adminMiddleware, create)

module.exports = router