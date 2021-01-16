import Head from "next/head"
import Link from "next/link"
import { withRouter } from 'next/router'
import Layout from "../../components/Layout"
import { useState } from 'react'
import { listBlogsWithCategoriesAndTags } from "../../actions/blog"
import renderHTML from 'react-render-html'
import moment from "moment";
import NewsCard from "../../components/blog/NewsCard"
import { API, DOMAIN, APP_NAME } from '../../config'

const Blogs = ({ blogs, categories, tags, size, router }) => {

    const head = () => (
        <Head>
            <title>Lab | {APP_NAME}</title>

            <meta name={"description"} content={"Experiments with code"} />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property={"og:title"} content={`Lab | ${APP_NAME}`} />
            <meta property={"og:description"} content={"Experiments with code"} />
            <meta property={"og:type"} content="website" />
            <meta property={"og:url"} content={`${DOMAIN}${router.pathname}`} />
            <meta property={"og:site_name"} content={`${APP_NAME}`} />

            {/*<meta property={"og:image"} content={`${APP_NAME}`} /> TODO: Add images and app id*/}
            {/*<meta property={"og:image:secure_url"} content={`${APP_NAME}`} />*/}
            {/*<meta property={"og:image:type"} content={`image/jpg`} />*/}
            {/*<meta property={"fb:app_id"} content={`${APP_NAME}`}/>*/}
        </Head>
    )

    const showAllBlogs = () => {
        return blogs.map((blog, index) => (
            <NewsCard key={index} blog={blog} />
        ))
    }

    const showAllCategories = () => {
        return categories.map((category, index) => (
            <Link href={`/categories/${category.slug}`} key={index}>
                <a>{category.name}</a>
            </Link>
        ))
    }

    const showAllTags = () => {
        return tags.map((tag, index) => (
            <Link href={`/categories/${tag.slug}`} key={index}>
                <a>{tag.name}</a>
            </Link>
        ))
    }

    return (
        <>
            {head()}
            <Layout>
                <h2>Categories</h2>
                {showAllCategories()}
                <hr/>
                <h2>Tags</h2>
                {showAllTags()}
                <hr/>
                Show all blogs
                {showAllBlogs()}
                <hr/>
            </Layout>
        </>
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

export default withRouter(Blogs)