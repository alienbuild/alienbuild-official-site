import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link"

const AdminIndex = () => (
    <Layout>
        <Admin>
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link href={`/admin/crud/category-tag`}>Create Category</Link>
                </li>
                <li>
                    <Link href={`/admin/crud/category-tag`}>Create Tag</Link>
                </li>
                <li>
                    <Link href={`/admin/crud/blog`}>Create Blog</Link>
                </li>
            </ul>
        </Admin>
    </Layout>
)

export default AdminIndex