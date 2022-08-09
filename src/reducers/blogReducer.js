import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

 /*const initialState = 
    {
        title: "faketitle",
        author: "fakeauthor",
        url: "fakeURL",
        likes: 0,
        id: 34322
    } */


const blogSlice = createSlice({
      name: 'blogs',
      initialState: [],
      reducers: {
createBlog(state, action) {
          const content = action.payload

          const blogObject = {
            title: content.title,
            author: content.author,
            url: content.url,
            likes: 0,
            id: generateId()
          }

          state.push({
            title: content.title,
            author: content.author,
            url: content.url,
            likes: 0,
            id: generateId()
          })

          blogService.create(blogObject)
        }, 
createComment(state, action) {
 const content = action.payload
 
blogService.newComment(content)

},
newLike(state, action) {
        const id = action.payload

        const blogToChange = state.find(b => b.id === id)

        const changedBlog = { 
          ...blogToChange, 
          likes: blogToChange.likes + 1 
        }

        blogService.update(id, changedBlog)

        return state.map(blog =>
          blog.id !== id ? blog : changedBlog
        )
       },

deleteBlog(state, action) {
  const id = action.payload

  blogService.remove(id)

  return state.filter(b => b.id !== id)
  
},
      appendBlog(state, action) {
        state.push(action.payload)
      },
      setBlogs(state, action) {
        return action.payload
      }
    },
})

 /* export const createBlog = (content) => {
    return {
      type: 'NEW_BLOG',
      data: {
        title: content.title,
        author: content.author,
        url: content.url,
        likes: 0
      }
    }
  }

  export const newLike = (id) => {
   return {
    type: 'NEW_LIKE',
    data: { id }
   }
  }

  export const removeBlog = (id) => {
    return {
      type: 'DELETE_BLOG',
      data: { id }
    }
  } */

 export const {  createBlog, newLike, appendBlog, setBlogs, deleteBlog, createComment } = blogSlice.actions

export default blogSlice.reducer