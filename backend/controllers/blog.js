const Category = require('../models/category')
const Tag = require('../models/tag')
const Blog = require('../models/blog')
const formidable = require('formidable')
const slugify = require('slugify')
const stripHtml = require('string-strip-html')
const _ = require('lodash')
const { errorHandler } = require('../helpers/dbErrorHandler')
const fs = require('fs')

exports.create = (req,res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err){
            return res.status(400).json({
                error: 'Image could not upload'
            })
        }
        const { title, body, description, categories, tags } = fields

        let blog = new Blog()
        blog.title = title
        blog.body = body
        blog.slug = slugify(title).toLowerCase()
        blog.mtitle = `${title} | ${process.env.APP_NAME}`
        blog.mdesc = description
        blog.author = req.user._id

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
            res.json(result)
        })
    })
}