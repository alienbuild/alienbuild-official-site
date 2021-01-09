import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import CreateBlog from "../../../components/crud/BlogCreate"
import Link from "next/link"

const Blog = () => (
    <Layout>
        <Admin>
            <h2>Create a new blog</h2>
            <CreateBlog />
        </Admin>
    </Layout>
)

export default Blog