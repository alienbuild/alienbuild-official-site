import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate"
import Link from "next/link"

const Blog = () => (
    <Layout>
        <Admin>
            <h2>Update blog</h2>
            <BlogUpdate />
        </Admin>
    </Layout>
)

export default Blog