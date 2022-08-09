import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = ({ blogs, setBlogs, setErrorMessage }) => {
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

  /*const addBlog = async (event) => {
    event.preventDefault();
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
  }; */

  const addBlogRedux = (event) => {
    event.preventDefault()
    const content = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.author.value,
      likes: 0
    }

    dispatch(createBlog(content))

  }
  return (
    <div className="formDiv">
      <form onSubmit={addBlogRedux}>
        Author:{" "}
        <input
        name="author"
          id="author"
          value={newAuthor}
          onChange={handleAuthorChange}
          placeholder="write here author content"
        />
        Title:{" "}
        <input
        name="title"
          id="title"
          value={newTitle}
          onChange={handleTitleChange}
          placeholder="write here title content"
        />
        Url:{" "}
        <input
        name="url"
          id="url"
          value={newUrl}
          onChange={handleUrlChange}
          placeholder="write here url content"
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default BlogForm;
