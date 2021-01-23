import Head from "next/head"
import Link from "next/link"
import moment from "moment";
import Layout from "../../components/Layout"
import { singleCategory } from "../../actions/category"
import { API, DOMAIN, APP_NAME } from '../../config'
import renderHTML from 'react-render-html'
import NewsCard from "../../components/blog/NewsCard";

const Category = ({ category, blogs }) => {
    return(
        <>
            <Layout>
                <main>
                    <h1>{category.name}</h1>
                    {blogs.map((blog, index) => (
                        <NewsCard key={index} blog={blog} />
                    ))}
                </main>
            </Layout>
        </>
    )
}

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug)
        .then(data => {
            if (data.error){
                console.log('Error: ', data.error)
            } else {
                return {
                    category: data.category,
                    blogs: data.blogs
                }
            }
        })
}

export default Category