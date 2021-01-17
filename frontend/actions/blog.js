import fetch from 'isomorphic-fetch'
import { API } from "../config"

export const createBlog = (blog, token) => {
    console.log('Blog stuff is: ', blog)
    return fetch(`${API}/blog`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            console.log('Response is: ', response)
            return response.json()
        })
        .catch( err => console.log('Error is: ', err))
}

export const listBlogsWithCategoriesAndTags = (offset, limit) => {
    const data = {
        limit,
        offset
    }
    return fetch(`${API}/blogs-categories-tags`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json()
        })
        .catch( err => console.log('Error is: ', err))
}