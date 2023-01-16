import { useEffect, useState } from 'react'
import blogService from '../services/blogs'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setBlogs, newLike, createComment } from '../reducers/blogReducer'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'


const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const SingleBlog = ({blogs }) => { 

const [singleBlogs, setSingleBlogs] = useState([])
const [comments, setComments] = useState('')
const id = blogs.map(b => b.id)
  

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
      <Page className="py-6 px-6 shadow-xl">
        <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
    <div>
<h2 className="text-2xl py-2">{singleBlogs.title}</h2>
<strong>URL:</strong><a href={singleBlogs.url}> {singleBlogs.url}</a>
<p><strong>Likes:</strong> {singleBlogs.likes}</p><button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full" onClick={() => voteLike(singleBlogs.id)}>Like</button>
<button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 mx-4 rounded-full" onClick={handleClick}>Back</button>
<p><strong>added by:</strong> {singleBlogs.user.name}</p>
</div>
</TableCell>
</TableRow>
</TableBody>
</Table>
</TableContainer>
<div>
<form className="py-4" onSubmit={handleSubmit}>Add Comment: <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="comment" id="comment" value={comments} onChange={handleComment}></input><button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full mx-4" type="submit">Add</button></form>
<h4 className="py-2">Comments</h4>
<TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
<ul>
  {singleBlogs.comments.map(s => <li><ul>{s}</ul></li>)}

</ul>
</TableCell>
</TableRow>
</TableBody>
</Table>
</TableContainer>
    </div>
    </Page>
)} else 
return null
}

export default SingleBlog