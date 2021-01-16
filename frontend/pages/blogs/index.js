import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout"
import { useState } from 'react'
import { listBlogsWithCategoriesAndTags } from "../../actions/blog"
import { API } from "../../config"
import renderHTML from 'react-render-html'
import moment from "moment";

const Blogs = ({ blogs, categories, tags, size }) => {

    const showAllBlogs = () => {
        return blogs.map((blog, index) => (
            <article key={index}>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <header><h2>{blog.title}</h2></header>
                        {/*/!*<section>{renderHTML(blog.introtext)}</section>*!/ TODO: Setup introtext field, route, controller*/}
                        <section>Written by {blog.author.name} | Published {moment(blog.updatedAt).fromNow()}</section>
                        <section>Categories: | Tags: </section>
                    </a>
                </Link>
            </article>
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