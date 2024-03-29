import { useDispatch } from 'react-redux'
import {  setBlogs } from '../reducers/blogReducer'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'


const Blog = ({ blog, handleLike, handleDelete }) => {
  const dispatch = useDispatch()

 

   const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };


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
     <TableCell><strong>Title:</strong> {blog.title} <br /><strong>Author:</strong> {blog.author}<br />{" "}
<button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-full" onClick={() => handleClick(blog)}>view details and comments</button></TableCell>
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