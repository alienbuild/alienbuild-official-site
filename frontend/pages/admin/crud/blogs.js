import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead"
import Link from "next/link"

const Blog = () => (
    <Layout>
        <Admin>
            <h2>Manage blogs</h2>
            <BlogRead />
        </Admin>
    </Layout>
)

export default Blog