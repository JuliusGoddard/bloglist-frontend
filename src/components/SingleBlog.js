import { useEffect, useState } from 'react'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setBlogs, newLike, createComment } from '../reducers/blogReducer'


const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const SingleBlog = ({blogs }) => { 

const [singleBlogs, setSingleBlogs] = useState([])
const [comments, setComments] = useState('')
const id = blogs.map(b => b.id)
  
console.log(singleBlogs)

const dispatch = useDispatch()

const voteLike = (id) => {
  dispatch(newLike(id))
}

const handleComment = (event) => {
setComments(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault()
  const comment = event.target.comment.value

  const id = singleBlogs.id

  const object = {comment: comment, id: id}

  dispatch(createComment(object))

}

const handleClick = () => {
  blogService
      .getAll().then(blogs => dispatch(setBlogs(blogs)))
}

  useEffect(() => {
        blogService
          .getOne(id).then(singleBlogs => setSingleBlogs(singleBlogs)).then(singleBlogs => dispatch(setBlogs(singleBlogs)))
      }, [dispatch])
  

    
      if (!singleBlogs?.title) {
        return (
          <div><button onClick={handleClick}>Back</button></div>
        )
      }
    
     if (singleBlogs.user?.name) {
    return (
      <Page>
    <div>
<h2>{singleBlogs.title}</h2>
<p>URL: {singleBlogs.url}</p>
<p>Likes: {singleBlogs.likes}</p><button onClick={() => voteLike(singleBlogs.id)}>Like</button>
<button onClick={handleClick}>Back</button>
<p>added by: {singleBlogs.user.name}</p>
<form onSubmit={handleSubmit}>Add Comment: <input name="comment" id="comment" value={comments} onChange={handleComment}></input><button type="submit">Add</button></form>
<h4>Comments</h4>
<ul>
  {singleBlogs.comments.map(s => <li><ul>{s}</ul></li>)}

</ul>

    </div>
    </Page>
)} else 
return null
}

export default SingleBlog