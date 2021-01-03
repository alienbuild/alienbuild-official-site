const express = require('express')
const router = express.Router()
const { create, list, read, remove } = require('../controllers/category')
const { requireSignin, adminMiddleware } = require('../controllers/auth')

// Validators
const { runValidation } = require('../validators')
const { categoryCreateValidator } = require('../validators/category')

// Create
router.post('/category', categoryCreateValidator, requireSignin, adminMiddleware, create)

// List
router.get('/categories', list)

// Read
router.get('/category/:slug', read)

// Delete
router.delete('/category/:slug', requireSignin, adminMiddleware, remove)


module.exports = router