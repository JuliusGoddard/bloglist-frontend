import React from 'react'
import Blog from './Blog'

const Blogs = (blogs) => {


    const titleStyle = {
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
      }


if (!blogs) {
    return null
}
    return (
<div>
<div className="px-2 py-2 shadow-2xl">
      <h2 className="text-2xl font-bold" style={titleStyle}>List of Technical Articles</h2>
   
   
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