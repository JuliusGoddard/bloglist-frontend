import { useState, useEffect } from "react";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import ErrorNotification from "./components/ErrorNotification";
import BlogForm from "./components/BlogForm";
import { useDispatch, useSelector } from 'react-redux'
import { setBlogs } from './reducers/blogReducer'
import User from './components/User'
import SingleBlog from './components/SingleBlog'
import styled from 'styled-components'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import Logout from './components/Logout'
import Header from './components/Header'
import Footer from './components/Footer'


import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"


const Page = styled.div`
  padding: 1em;
  background: papayawhip;
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
    setUser(null)
    window.localStorage.removeItem("loggedBlogappUser");
    window.location.href("https://infinite-atoll-62336.herokuapp.com/");
  };


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
      <div>
        <Header />
        <Page>

      <Routes>
        <Route path="/blogform" element={<BlogForm  newAuthor={newAuthor}
          newTitle={newTitle}
          newUrl={newUrl}
          handleAuthorChange={handleAuthorChange}
          handleUrlChange={handleUrlChange}
          handleTitleChange={handleTitleChange}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
          blogs={blogs}/>} />
        <Route path="/logout" element={<div>
          <p className="px-2 py-2">{user.name} logged-in</p>
          <Logout handleLogout={handleLogout} />
        </div>} />
        <Route path="/" element={<div><Notification message={errorMessage} />
      <ErrorNotification message={failureMessage} /><Blogs blogs={blogs} /></div>} />
        <Route path="/users" element={<User/>} />
      </Routes>

    <div>



    

      <div>
        
      </div>
        
    </div>
    </Page>
 
    </div>
    <Footer />
    </Router>
  );
      } else {
        return (
          <SingleBlog blogs={blogs} setBlogs={setBlogs}/>
        )
      }
};

export default App;
