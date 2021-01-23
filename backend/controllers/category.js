const Category = require('../models/category')
const slugify = require('slugify')
const Blog = require('../models/blog')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.create = (req,res) => {
    const { name } = req.body
    let slug = slugify(name).toLowerCase()

    let category = new Category({ name, slug })

    category.save((err,data) => {
        if (err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.read = (req,res) => {
    const slug = req.params.slug.toLowerCase()

    Category.findOne({ slug })
        .exec((err, category) => {
            if (err){
                res.status(400).json({
                    error: errorHandler(err)
                })
            }
            Blog.find({categories: category})
                .populate('categories', '_id name slug')
                .populate('tags', '_id name slug')
                .populate('author', '_id name')
                .select('_id title slug categories author tags createdAt updatedAt')
                .exec((err, data) => {
                    if (err){
                        res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    res.json({
                        category,
                        blogs: data
                    })
                })
        })
}

exports.list = (req,res) => {
    Category.find({})
        .exec((err, data) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(data)
        })
}

exports.remove = (req,res) => {
    const slug = req.params.slug.toLowerCase()

    Category.findOneAndRemove({ slug })
        .exec((err, data) => {
            if (err){
                res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json({
                message: 'Category removed successfully.'
            })
        })
}