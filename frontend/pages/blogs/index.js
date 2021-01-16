import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/Layout"
import { useState } from 'react'
import { listBlogsWithCategoriesAndTags } from "../../actions/blog"
import { API } from "../../config"

const Blogs = () => {
    return (
        <Layout>
            <h1>Blogs</h1>
            Categories and tags
            <hr/>
            Show all blogs
            <hr/>
        </Layout>
    )
}

export default Blogs