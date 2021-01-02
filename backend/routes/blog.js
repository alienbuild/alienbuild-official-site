const express = require('express')
const router = express.Router()
const { testAPI } = require('../controllers/blog')

// Test Route
router.get('/test', testAPI)

module.exports = router