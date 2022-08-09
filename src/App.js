import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";
import BlogForm from "./components/BlogForm";
import Togglable from "./components/Togglable";
import { useDispatch, useSelector } from 'react-redux'
import { setBlogs } from './reducers/blogReducer'
import User from './components/User'
import SingleBlog from './components/SingleBlog'
import styled from 'styled-components'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Logout from './components/Logout'



import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"


const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`

const App = () => {
 /* const [blogs, setBlogs] = useState([]); */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [failureMessage, setFailureMessage] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    blogService
      .getAll().then(blogs => dispatch(setBlogs(blogs)))
  }, [dispatch])

  const blogs = useSelector(state => state)



  /*
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []); */

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      setErrorMessage(`${user.name} is now logged in!`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } catch (exception) {
      setFailureMessage("Wrong username or password");
      setTimeout(() => {
        setFailureMessage(null);
      }, 5000);
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser");
  };


  const padding = {
    padding: 5
  }
  /* const createBlog = async () => {
    try {
      const blogObject = {
        author: newAuthor,
        title: newTitle,
        url: newUrl,
        likes: 0,
      };

      await blogService.create(blogObject);
      setBlogs(blogs.concat(blogObject));
      setNewTitle("");
      setNewAuthor("");
      setNewUrl("");
      setErrorMessage(`${blogObject.title} has been added!`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } catch (exception) {
      setErrorMessage(`blog couldn't be added`);
    }
  };
 */
 /* const handleLike = (id) => {
    const blog = blogs.find((b) => b.id === id);
    const changedBlog = { ...blog, likes: blog.likes + 1 };

    blogService
      .update(id, changedBlog)
      .then((returnedBlog) => {
        setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
      })
      .catch((error) => {
        alert(`the blog '${blog.content} was already deleted from the server`);
        setBlogs(blogs.filter((b) => b.id !== id));
      });
  }; */

/*  const handleDelete = (id) => {
    const blog = blogs.find((b) => b.id === id);

    if (window.confirm(`are you sure you want to remove ${blog.title}`)) {
      blogService
        .remove(id)
        .then(setBlogs(blogs.filter((b) => b.id !== id)))
        .catch((error) => {
          alert(`${error}`);
        });
    } else {
      alert("deletion cancelled");
    }
  };
 */

  
  /* const arrayforSort = [...blogs] */


  if (!blogs) {
    return null
  }
 
  if (user === null) {
    return (
<LoginForm handleLogin={handleLogin}  setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
  )}
  if (blogs.length > 1) 
  {
  return (
  
    <Router>
        <Page>
      <Navigation>
       <div>

         <Link style={padding} to="/">home</Link>
    
       
                <Link style={padding} to="/blogform">blogform</Link>
                <Link style={padding} to="/users">Users</Link>
       
      
        <Link style={padding} to="/logout">Logout</Link>
        
         
   

      </div>
</Navigation>
      <Routes>
        <Route path="/blogform" element={<BlogForm  newAuthor={newAuthor}
          newTitle={newTitle}
          newUrl={newUrl}
          handleAuthorChange={handleAuthorChange}
          handleUrlChange={handleUrlChange}
          handleTitleChange={handleTitleChange}
          setErrorMessage={setErrorMessage}
          blogs={blogs}/>} />
        <Route path="/logout" element={<div>
          <p>{user.name} logged-in</p>
          <Logout handleLogout={handleLogout} />
        </div>} />
        <Route path="/" element={<div><Notification message={errorMessage} />
      <ErrorNotification message={failureMessage} /><Blogs blogs={blogs} /></div>} />
        <Route path="/users" element={<User/>} />
      </Routes>

    <div>



    
      <Togglable buttonLabel="new blog">
        <BlogForm
          newAuthor={newAuthor}
          newTitle={newTitle}
          newUrl={newUrl}
          handleAuthorChange={handleAuthorChange}
          handleUrlChange={handleUrlChange}
          handleTitleChange={handleTitleChange}
          setErrorMessage={setErrorMessage}
          blogs={blogs}
        />
      </Togglable>

      <div>
        
      </div>
        
    </div>
    </Page>
    </Router>
  );
      } else {
        return (
          <SingleBlog blogs={blogs} setBlogs={setBlogs}/>
        )
      }
};

export default App;
