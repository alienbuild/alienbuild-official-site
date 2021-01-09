import Link from "next/link"
import { useState, useEffect } from 'react'
import Router from "next/router"
import dynamic from "next/dynamic"
import { withRouter } from "next/router"
import { getCookie, isAuth } from "../../actions/auth"
import { getCategories } from "../../actions/category"
import { getTags } from "../../actions/tag"
import { createBlog } from "../../actions/blog"

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})
// import '../../node_modules/react-quill/dist/quill.snow.css'

const CreateBlog = ({ router }) => {

    const blogFromLS = () => {
        if (typeof window === 'undefined'){
            return false
        }

        if (localStorage.getItem('blog')){
            return JSON.parse(localStorage.getItem('blog'))
        } else {
            return false
        }
    }

    const [body, setBody] = useState(blogFromLS())
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    })

    const { error, sizeError, success, formData, title, hidePublishButton } = values

    useEffect(() => {
        setValues({ ...values, formData: new FormData() })
    },[router])

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value, formData, error: '' })
    }

    const handleBody = e => {
        setBody(e)
        formData.set('body', e)
        if (typeof window !== 'undefined'){
            localStorage.setItem('blog', JSON.stringify(e))
        }
    }

    const publishBlog = (e) => {
        e.preventDefault()
        console.log('Publishing blog')
    }

    const createBlogForm = () => {
        return (
            <form onSubmit={publishBlog}>
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange('title')} />
                <div className="quill">
                    <ReactQuill
                        modules={CreateBlog.modules}
                        formats={CreateBlog.formats}
                        value={body}
                        placeholder={"Write something awesome."}
                        onChange={handleBody}
                    />
                </div>
                <button type={"submit"}>Publish</button>
            </form>
        )
    }
    return(
        <>
            <h2>Create blog form</h2>
            {createBlogForm()}
        </>
    )
}

CreateBlog.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
}

CreateBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
]

export default withRouter(CreateBlog)