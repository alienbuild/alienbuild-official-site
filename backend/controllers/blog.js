const Category = require('../models/category')
const Tag = require('../models/tag')
const Blog = require('../models/blog')
const formidable = require('formidable')
const slugify = require('slugify')
const stripHtml = require('string-strip-html')
const _ = require('lodash')
const { errorHandler } = require('../helpers/dbErrorHandler')
const fs = require('fs')
const { smartTrim } = require('../helpers/blog')

exports.create = (req,res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not upload'
            })
        }
        const { title, body, description, excerpt, categories, tags } = fields

        console.log('Form fields are: ', fields)


        if (!title || !title.length){
            return res.status(400).json({
                error: 'Title is required'
            })
        }

        if (!body || body.length < 200){
            return res.status(400).json({
                error: 'Content is too short. Write some more?'
            })
        }

        if (!categories || categories.length === 0){
            return res.status(400).json({
                error: 'At least one category is required.'
            })
        }

        if (!tags || tags.length === 0){
            return res.status(400).json({
                error: 'At least one tag is required.'
            })
        }

        let blog = new Blog()
        blog.title = title
        blog.body = body
        blog.slug = slugify(title).toLowerCase()
        blog.mtitle = `${title} | ${process.env.APP_NAME}`
        blog.mdesc = description
        //blog.excerpt = smartTrim(excerpt, 320, ' ','...')
        blog.author = req.user._id

        let arrayOfCategories = categories && categories.split(',')
        let arrayOfTags = tags && tags.split(',')

        if (files.photo) {
            if (files.photo.size > 10000000 ){
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size.'
                })
            }
            blog.photo.data = fs.readFileSync(files.photo.path)
            blog.photo.contentType = files.photo.type
        }


        blog.save((err, result) => {
            console.log('Error is: ', err)
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            // res.json(result)
            Blog.findByIdAndUpdate(result._id, { $push: {categories: arrayOfCategories}}, {new: true})
                .exec((err, result) => {
                    if (err){
                        return res.status(400).json({
                            error: errorHandler(err)
                        })
                    } else {
                        Blog.findByIdAndUpdate(result._id, { $push: {tags: arrayOfTags}}, { new: true })
                            .exec((err,result) => {
                                if (err){
                                    return res.status(400).json({
                                        error: errorHandler(err)
                                    })
                                } else {
                                    res.json(result)
                                }
                            })
                    }
                })
        })
    })
}

exports.list = (req,res) => {
    Blog.find({})
        .populate('categories', '_id name, slug')
        .populate('tags', '_id name, slug')
        .populate('author', '_id name username')
        .select('_id title slug categories tags author createdAt updatedAt')
        .exec((err, data) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(data)
        })
}

exports.listAllBlogsCategoriesTags = (req,res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 10
    let offset = req.body.offset ? parseInt(req.body.offset) : 0

    let blogs
    let categories
    let tags

    Blog.find({})
        .populate('categories', '_id name, slug')
        .populate('tags', '_id name, slug')
        .populate('author', '_id name username profile')
        .sort({ createdAt : -1 })
        .skip(offset)
        .limit(limit)
        .select('_id title slug categories tags author createdAt updatedAt')
        .exec((err, data) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            blogs = data
            Category.find({})
                .exec((err, categories) => {
                    if (err){
                        return res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    Tag.find({})
                        .exec((err, tags) => {
                            if (err){
                                return res.status(400).json({
                                    error: errorHandler(err)
                                })
                            }
                            res.json({ blogs, categories, tags, size: blogs.length })
                        })
                })
        })
}

exports.read = (req,res) => {
    const slug = req.params.slug.toLowerCase()

    Blog.findOne({ slug })
        .populate('categories', '_id name, slug')
        .populate('tags', '_id name, slug')
        .populate('author', '_id name username')
        .select('_id title body mtitle mdesc slug categories tags author createdAt updatedAt')
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
    Blog.findOneAndRemove({ slug })
        .exec((err, data) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json({
                message: 'Blog deleted successfully.'
            })
        })

}

exports.update = (req,res) => {
    const slug = req.params.slug.toLowerCase()

    Blog.findOne({slug})
        .exec((err, oldBlog) => {
            if (err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }

            let form = new formidable.IncomingForm()
            form.keepExtensions = true

            form.parse(req, (err, fields, files) => {
                if (err){
                    return res.status(400).json({
                        error: 'Image could not upload'
                    })
                }

                let slugBeforeMerge = oldBlog.slug
                oldBlog = _.merge(oldBlog, fields)
                oldBlog.slug = slugBeforeMerge

                const { body, description, excerpt, categories, tags } = fields

                if (body){
                    oldBlog.desc = stripHtml(body.substr(0, 160))
                }

                if (categories){
                    oldBlog.categories = categories.split(',')
                }

                if (tags){
                    oldBlog.tags = tags.split(',')
                }

                if (files.photo) {
                    if (files.photo.size > 10000000 ){
                        return res.status(400).json({
                            error: 'Image should be less than 1mb in size.'
                        })
                    }
                    oldBlog.photo.data = fs.readFileSync(files.photo.path)
                    oldBlog.photo.contentType = files.photo.type
                }


                oldBlog.save((err, result) => {
                    if (err){
                        return res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    res.json(result)
                })
            })

        })

}

exports.photo = (req,res) => {
    const slug = req.params.slug.toLowerCase()

    Blog.findOne({ slug })
        .select('photo')
        .exec((err, blog) => {
            if (err || !blog){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.set('Content-Type', blog.photo.contentType)
            return res.send(blog.photo.data)
        })
}