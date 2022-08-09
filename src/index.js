import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import blogReducer, { setBlogs } from './reducers/blogReducer'
import blogService from './services/blogs'

const store = createStore(blogReducer)


blogService.getAll().then(blogs =>
    store.dispatch(setBlogs(blogs))
  )

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>);
