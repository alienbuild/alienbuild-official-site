import Head from "next/head"
import Link from "next/link"
import moment from "moment";
import Layout from "../../components/Layout"
import { useState } from 'react'
import { singleBlog } from "../../actions/blog"
import { API, DOMAIN, APP_NAME } from '../../config'
import renderHTML from 'react-render-html'

const SingleBlog = ({ blog }) => {

    const showBlogCategories = blog => {
        return blog.categories.map((category, index) => (
            <Link key={index} href={`/categories/${category.slug}`}>
                <a>{category.name}</a>
            </Link>
        ))
    }

    const showBlogTags = blog => {
        return blog.tags.map((tags, index) => (
            <Link key={index} href={`/tags/${tag.slug}`}>
                <a>{tag.name}</a>
            </Link>
        ))
    }

    return(
        <>
            <Layout>
                <main>
                    <article>
                        <header>
                            <img src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />
                            Written by {blog.author.name} | Published {moment(blog.updatedAt).fromNow()}
                            {showBlogCategories(blog)}
                            {showBlogTags(blog)}
                        </header>
                        <section>
                            {renderHTML(blog.body)}
                        </section>
                    </article>
                </main>
            </Layout>
        </>
    )
}

SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug)
        .then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                return {blog: data}
            }
        })
}

export default SingleBlog