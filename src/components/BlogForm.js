import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Notification from './Notification'

const BlogForm = ({ blogs, setBlogs, setErrorMessage, errorMessage }) => {
  const dispatch = useDispatch()

  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value);
  };

  const titleStyle = {
    paddingTop: 10,
    paddingLeft: 10
  }


  const addBlogRedux = (event) => {
    event.preventDefault()
    const content = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.author.value,
      likes: 0
    }

    dispatch(createBlog(content))
    setErrorMessage(`Blog Added!`);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);

  }
  return (
    <div className="formDiv px-4 py-4 shadow-2xl my-2">
      <Notification message={errorMessage} />
      <h2 className="text-2xl font-bold" style={titleStyle}>Add a Blog</h2>
      <List>
      <form onSubmit={addBlogRedux}>
        <ListItem>
        <strong>Author:{" "}</strong>
        <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4"
        name="author"
          id="author"
          value={newAuthor}
          onChange={handleAuthorChange}
          placeholder="write here author content"
          data-cy="author"
        />
        </ListItem>
        
        <ListItem>
        <strong>Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
        <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4"
        name="title"
          id="title"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="write here title content"
          data-cy="title"
        />
        </ListItem>
        
        <ListItem>
        <strong>Url:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
        <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-4"
        name="url"
          id="url"
          value={newUrl}
          onChange={handleUrlChange}
          placeholder="write here url content"
          data-cy="url"
        />
        
        </ListItem>
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full" type="submit" data-cy="save">save</button>
      </form>
      </List>
    </div>
  );
};

export default BlogForm;
