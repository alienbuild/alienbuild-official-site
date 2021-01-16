import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout"
import { useState } from 'react'
import { listBlogsWithCategoriesAndTags } from "../../actions/blog"
import { API } from "../../config"
import renderHTML from 'react-render-html'
import moment from "moment";
import NewsCard from "../../components/blog/NewsCard"

const Blogs = ({ blogs, categories, tags, size }) => {

    const showAllBlogs = () => {
        return blogs.map((blog, index) => (
            <NewsCard key={index} blog={blog} />
        ))
    }
    return (
        <Layout>
            <h1>Blogs</h1>
            Categories and tags
            <hr/>
            Show all blogs
            {showAllBlogs()}
            <hr/>
        </Layout>
    )
}

Blogs.getInitialProps = () => {
    return listBlogsWithCategoriesAndTags()
        .then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                return {
                    blogs: data.blogs,
                    categories: data.categories,
                    tags: data.tags,
                    size: data.size
                }
            }
        })
        .catch((e) => console.log(e))
}

export default Blogs