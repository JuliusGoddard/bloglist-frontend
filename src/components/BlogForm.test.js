import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const createBlog = jest.fn();
  const user = userEvent.setup();

  render(<BlogForm createBlog={createBlog} />);

  const textinput = screen.getByPlaceholderText("write here author content");
  const authorinput = screen.getByPlaceholderText("write here title content");
  const urlinput = screen.getByPlaceholderText("write here url content");
  const sendButton = screen.getByText("save");

  await user.type(textinput, "testing a form...");
  await user.type(authorinput, "testing a form...");
  await user.type(urlinput, "testing a form...");
  await user.click(sendButton);

  expect(createBlog.mock.calls).toHaveLength(1);
  expect(createBlog.mock.calls[0][0].author).toBe("testing a form...");
  expect(createBlog.mock.calls[0][0].title).toBe("testing a form...");
  expect(createBlog.mock.calls[0][0].url).toBe("testing a form...");
});
