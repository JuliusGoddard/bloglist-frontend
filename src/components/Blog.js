import { useDispatch, useSelector } from 'react-redux'
import { newLike, deleteBlog, setBlogs } from '../reducers/blogReducer'
import SingleBlog from '../components/SingleBlog'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'


const Blog = ({ blog, handleLike, handleDelete }) => {
  const dispatch = useDispatch()

  const blogs = useSelector(state => state)

   const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const voteLike = (id) => {
    dispatch(newLike(id))
  }

 const removeBlog = (id) => {
    dispatch(deleteBlog(id))
  } 

  const handleClick = (blog) => {
    dispatch(setBlogs([blog]))
    }


 /*if (blogs.length === 1) {
    
    return (
      <SingleBlog blogs={blogs}/>
    )
  } */

  return (
    <div style={blogStyle} className="blog">
     <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
     <TableCell>{blog.title} {blog.author}{" "}
<button onClick={() => handleClick(blog)}>view</button></TableCell>
</TableRow>
</TableBody>
</Table>
</TableContainer>
    </div>
  );
};

export default Blog;

/*<Togglable buttonLabel="view">
{" "}
{blog.url} Likes: {blog.likes}{" "}
<button onClick={() => voteLike(blog.id)}>Like</button>
<button onClick={() => removeBlog(blog.id)}>delete</button>{" "}
{blog.user === undefined ? null : blog.user.name}{" "}
</Togglable>*/