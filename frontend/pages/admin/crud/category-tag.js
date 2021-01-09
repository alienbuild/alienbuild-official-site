import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link"
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";

const CategoryTag = () => (
    <Layout>
        <Admin>
            <h2>Manage Categories and Tags</h2>
            <hr/>
            <h3>Categories</h3>
            <Category />
            <hr/>
            <h3>Tags</h3>
            <Tag />
        </Admin>
    </Layout>
)

export default CategoryTag