const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        max: 160,
        min: 3,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    body: {
        type: {},
        required: true,
        unique: true,
        max: 4000000,
        min: 200,
    },
    excerpt: {
        type: String,
        max: 1000,
    },
    mtitle: {
        type: String,
    },
    mdesc: {
        type: String,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    categories: [{ type: ObjectId, ref: 'Category', required: true }],
    tags: [{ type: ObjectId, ref: 'Tag', required: true }],
    author: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)