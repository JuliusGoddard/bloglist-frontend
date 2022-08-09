import React from 'react'
import BlogForm from './BlogForm'
import ErrorNotification from './ErrorNotification';
import Notification from './Notification';
import SingleBlog from './SingleBlog'
import LoginForm from './LoginForm'
import Togglable from './Togglable';
import styled from 'styled-components'
import Blogs from './Blogs'
import User from './User'
import Logout from './Logout'


import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from "react-router-dom"
  

const Homepage = (blogs, padding, newAuthor, newTitle, newUrl, handleAuthorChange, handleTitleChange, handleUrlChange, setErrorMessage, setUsername, setPassword, username, password, user, handleLogin, handleLogout, errorMessage, failureMessage, setBlogs ) => {


    const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`


if (!blogs) {
    return null
}

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
   
  
    <Link style={padding} to="/login">Login</Link>
    
     


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
    <Route path="/login" element={user === null ? (
    <LoginForm handleLogin={handleLogin}  setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
  ) : (
    <div>
      <p>{user.name} logged-in</p>
      <Logout handleLogout={handleLogout} />
    </div>
  )} />
    <Route path="/" element={<Blogs blogs={blogs} />} />
    <Route path="/users" element={<User/>} />
  </Routes>

<div>

  <Notification message={errorMessage} />
  <ErrorNotification message={failureMessage} />


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
    
</div>
</Page>
</Router>
);
  } else {
    return (
      <SingleBlog blogs={blogs.blogs} setBlogs={setBlogs}/>
    )
  }
}

export default Homepage
