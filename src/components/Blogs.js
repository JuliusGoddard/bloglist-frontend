import React from 'react'
import Blog from './Blog'

const Blogs = (blogs) => {

if (!blogs) {
    return null
}
    return (
<div>
<div>
      <h2>blogs</h2>
   
   
      {blogs.blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
          />
        ))}
        </div>
</div>
    )
}

export default Blogs